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

// 本地测试代码自动跳过选择玩家
window.addEventListener(
  "load_script",
  function(e) {
    const vars = getUrlVars();
    const env = vars.env;
    const uid = vars.uid;

    if (env === "dev2") {
      /** 直接跳过 debugLoginView, 最好都不打开这个页面 */
      debugLoginView.prototype.childrenCreated = function() {
        App.env = env;
        PIMgr.Inst.js_code = uid;
        this.dispatchEvent(new egret.Event("debug", false, false));
      };
      /** 取消initLifecycle设置 */
      Main.prototype.initLifecycle = function() {};

      injectAfter(gdmj.HallView, "initUI", function() {
        // setTimeout(() => {
        //     App.WindowMgr.closeAll();
        //     App.WindowMgr.open(WindowConst.GameRule, 12);
        // }, 1000)
      });

      // App.DebugUtils.isPC = () => { return false }
    }
  },
  false
);

function getUrlVars() {
  var vars = {};
  window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(
    m,
    key,
    value
  ) {
    vars[key] = value;
  });
  return vars;
}

var loadScriptOri = loadScript;
loadScript = (list, callback) => {
  loadScriptOri(list, () => {
    var event = new Event("load_script", list);
    event.data = list;
    window.dispatchEvent(event);
    callback();
  });
};
