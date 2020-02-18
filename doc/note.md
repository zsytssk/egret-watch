- @todo 只看自己的样式处理...

- @todo 所有测试代码放在游戏代码后面加载...

- @todo 滚动的内容 添加之后 抖动 怎么处理 yx egret

- @bug 新战绩 和原来的战绩数据 混了

- @bug 游戏的资源 老的战绩依赖新的资源

- @ques is_request 是否为 0

## 2020-02-14 15:45:08

- @ques 怎么 filter 战绩

- @ques 普通战绩的样式...

- @ques 没有数据 我怎么处理

  - 怎么自己模拟数据

## 2020-02-14 12:16:07

```js
// 请求该玩家最近15局信息
message Req_Stage_FriendRoomRecord {
    // 偏移量
    int32 offset = 1;

    // 请求个数
    int32 count = 2;

    // 请求时间 days == 0 今天 1 昨天 7 七天前 8 近七天 9 无限制
    int32 days = 3;

    // battleId
    int64 battleId = 4;
    int32 ruleId = 5;

    // 如果是好友圈战绩需传递groupId
    int64 groupId = 6;
    // 0 只显示自己战绩，1显示好友圈战绩
    int32 showAll = 7;
}
```

- @play 买菜 倒垃圾 + 公共垃圾...

- @ques 怎么自己

- @ques 滚动时候怎么处理

  - 还有没有的数据
  - 是不是正在加载...

- @ques replayIsUnlock 这个是什么意思

- @ques 下面的代码是干什么的...

```ts
App.ControllerManager.applyFunc(
  ControllerConst.PopUp,
  PopUpConst.REQUESTMASK_SHOW,
);
```

- @opt 干瞪眼的牌 十分的帅气...

## 2020-02-12 11:50:25

- @ques 亲友圈的入口是哪一个...

- @bug 战绩

  - 战绩是空的 [只看自己]的样式有问题...
  - 默认选中的天数
  - 原来的战绩的样式处理...

- @todo nvm

## 2020-02-11 15:20:54

- @ques 要不要 只是入口关掉 但是可以收到别人的回复

  - 还是算了一起关掉

- @ques 配置叫什么??

## 2020-01-31 09:46:19

- @ques 能不能加一个 最后成功开局打点

  - 在加入房间中监听开局成功

- @ques 编辑器中的自定义组件在什么地方 CBtn

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
