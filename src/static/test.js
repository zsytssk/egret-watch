// 测试代码
function injectAfter(instance, fun_name, func) {
  const ori_fun = instance.prototype[fun_name];
  instance.prototype[fun_name] = function(...params) {
    const result = ori_fun.apply(this, [...params]);
    if (result instanceof Promise) {
      result.then(() => {
        func(this, result, ...params);
      });
    } else {
      func(this, result, ...params);
    }
    return result;
  };
}

injectAfter(gdmj.HallView, "initUI", function() {
  // setTimeout(() => {
  //     App.WindowMgr.closeAll();
  //     App.WindowMgr.open(WindowConst.GameRule, 12);
  // }, 1000)
});
