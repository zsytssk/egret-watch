import { excuse } from "./zutil/ls/exec";
import * as path from "path";
import { default as nodeWatch } from "node-watch";
import { Observable } from "rxjs";

export function watchTest() {
  return new Observable(subscriber => {
    // 监听文件修改
    const static_dir = path.resolve(__dirname, "./static");
    nodeWatch([static_dir], { recursive: true }, () => {
      subscriber.next("end");
    });

    excuse("npm run webpack-dev", { path: process.cwd(), output: true });
  });
}
