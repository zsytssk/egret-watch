- @ques 能不能加一个 最后成功开局打点
  - 在加入房间中监听开局成功

## 2020-01-19 10:06:22

- @ques bug 结算的 bug 需要 获取用户的数据
  - model.homeInfo.ownerUid
  - 更新用户的是 homeType

## 2020-01-07 10:07:50

- @ques 手型添加 简单的方法

  - 可以创建多个

- @todo 压缩文件
  json 文件要不要处理

  - 我改掉了别人没改掉 那不是出问题了
  - 能不能放在发布的脚本中

- @ques 微信会自己压缩的吧
  - 我怎么知道微信线上的文件
  - fiddler

## 2019-12-31 16:20:22

- @todo 添加自动化测试脚本

- @todo ui 改变 没有自动刷新

* @ques tsconfig references

## 2019-12-25 12:39:03

-@todo 使用 express 直接在 index.html 中注入 js 而不是用 tampermonkey

- @ques The message port closed before a response was received

- @todo 每次监听改变自动去 egret run

- egret build 添加 sourcemap

`egret build -sourceMap`

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
