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
        null,
    );
}
export function showImg(url: string) {
    const bit = new eui.Image();
    bit.source = url;
    getStage().addChild(bit);
}
export function clipBroad(item: egret.DisplayObject) {
    const texture: egret.RenderTexture = new egret.RenderTexture();
    texture.drawToTexture(item);
    texture.saveToFile(
        'image/png',
        'test.png',
        new egret.Rectangle(0, 0, item.width, item.height),
    );
}

export const egretUtils = {
    watchStageClick,
    getStage,
    clipBroad,
};
