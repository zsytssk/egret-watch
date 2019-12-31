// 本地测试代码自动跳过选择玩家
window.addEventListener(
  "load_script",
  e => {
    const vars = getUrlVars();
    const env = vars.env;
    const uid = vars.uid;

    /** 直接跳过 debugLoginView, 最好都不打开这个页面 */
    debugLoginView.prototype.childrenCreated = function() {
      App.env = env;
      PIMgr.Inst.js_code = uid;
      this.dispatchEvent(new egret.Event("debug", false, false));
    };
    /** 取消initLifecycle设置 */
    Main.prototype.initLifecycle = function() {};
    if (env === "dev2") {
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
