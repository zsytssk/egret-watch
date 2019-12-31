export function getStage() {
  return egret.MainContext.instance.stage;
}

export function watchStageClick() {
  const stage = getStage();
  stage.addEventListener(
    egret.TouchEvent.TOUCH_TAP,
    (e: any) => {
      console.log(`stageClick:>`, e.target, e.currentTarget);
    },
    null
  );
}

export const egretUtils = {
  watchStageClick,
  getStage
};
