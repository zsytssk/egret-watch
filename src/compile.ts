import { excuse } from "./zutil/ls/exec";
import { Config } from "./config";
import * as path from "path";
import { default as nodeWatch } from "node-watch";
import { Observable } from "rxjs";

export type CompileType = "compile" | "end";
export function compile(): Observable<CompileType> {
  return new Observable(subscriber => {
    const { path: path_str } = Config;
    let output_temp = "";

    // 监听编译结束
    excuse(
      "egret run -sourcemap -a",
      { path: path_str, output: true },
      (output: string) => {
        output_temp += output;
        if (output_temp.indexOf("自动编译完成.")) {
          output_temp = "";
          subscriber.next("end");
        }
      }
    );

    // 监听文件修改
    const src = path.resolve(path_str, "src");
    const resource = path.resolve(path_str, "resource");
    const build = path.resolve(path_str, "bin-debug");
    nodeWatch([src, resource], { recursive: true }, () => {
      subscriber.next("compile");
    });
    // 23
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
