import { excuse } from "./zutil/ls/exec";
import { Config } from "./config";
import * as path from "path";
import { default as nodeWatch } from "node-watch";
import { Observable } from "rxjs";

export type CompileType = "compile" | "end";
export function compile(project_path: string): Observable<CompileType> {
  return new Observable(subscriber => {
    let output_temp = "";

    // 监听编译结束
    excuse(
      "egret run -sourcemap -a",
      { path: project_path, output: true },
      (output: string) => {
        output_temp += output;
        if (output_temp.indexOf("自动编译完成")) {
          output_temp = "";
          subscriber.next("end");
        }
      }
    );

    // 监听文件修改
    const src = path.resolve(project_path, "src");
    const resource = path.resolve(project_path, "resource");
    const build = path.resolve(project_path, "bin-debug");
    nodeWatch([src], { recursive: true }, () => {
      subscriber.next("compile");
    });

    /** resource 修改 直接刷新页面 */
    nodeWatch([resource], { recursive: true }, () => {
      subscriber.next("end");
    });

    // 23
    /** 监听 “自动编译完成” 有问题 不得不 监听bin-debug文件修改次数 */
    let change_index = 0;
    nodeWatch([build], () => {
      change_index++;
      if (change_index > 24) {
        subscriber.next("end");
        change_index = 0;
      }
    });
  });
}
