## 2019-12-23 10:19:27

- @ques 能不能同时启动两个 watch
  - hhgzmj_copy

* @ques 再刷新的时候 收到一个编译的任务怎么处理
  - 每次有一个 id 每次刷新之前 将自己的 id 保存
  - 每次刷新之后将自己的 id 返回给服务端

https://expressjs.com/en/starter/hello-world.html

- @ques 监听修改的文件（显示 compiling） + 修改 debugView

- egret run 很快 build 很慢 怎么处理。。。
  - egret run 自动刷新页面 功能有没有
  - 或者监听 egret run 的输出判断编译成功 (也可以...)
  - title 上显示 compile。。。 loading
