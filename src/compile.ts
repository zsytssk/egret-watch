import { excuse } from "./zutil/ls/exec";
import * as path from "path";
import { default as nodeWatch } from "node-watch";
import { Observable } from "rxjs";
import { throttlePromise } from "./throttle";

export type CompileType = "compile" | "end";
/** 防止 resource 无限循环的修改 */
let is_building = false;
export function compile(project_path: string): Observable<CompileType> {
  return new Observable(subscriber => {
    const [run, isEnd] = throttlePromise(() => {
      console.log(`start build...`);
      subscriber.next("compile");
      is_building = true;
      return egretBuild(project_path).then(() => {
        is_building = false;
        if (isEnd()) {
          subscriber.next("end");
        }
      });
    });
    watchChange(project_path).subscribe(run);
  });
}

function watchChange(project_path: string) {
  return new Observable(subscriber => {
    // 监听文件修改
    const src = path.resolve(project_path, "src");
    const resource = path.resolve(project_path, "resource");
    nodeWatch([src], { recursive: true }, () => {
      subscriber.next();
    });

    /** resource 修改 直接刷新页面 */
    nodeWatch([resource], { recursive: true }, () => {
      if (!is_building) {
        subscriber.next();
      }
    });

    subscriber.next();
  });
}

function egretBuild(project_path: string) {
  return excuse("egret build -sourcemap", {
    path: project_path,
    output: true
  });
}
