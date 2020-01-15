export function getGameModel() {
    return App.ControllerManager.getControllerModel(
        ControllerConst.Game,
    ) as gdmj.GameModel;
}
export function getGameView() {
    return App.ViewManager.getView(ViewConst.Game) as gdmj.GameView;
}
export function getFrontCard() {
    return getGameView().getFrontHandCardView();
}
export function getFrontHuCard() {
    return getGameView()['huCardView'].frontHuPaiView['riverCardList'];
}
export function getUserHandCard() {
    const gameModel = getGameModel();
    if (gameModel == null || gameModel.homeInfo == null) {
        return;
    }
    const uid = gdmj.GameContext.uid;
    const handCardInfo = gameModel.handCardMap;
    return handCardInfo[uid];
}
export function getMenInfo() {
    const gameModel = getGameModel();
    return gameModel.$menInfo;
}
export function playEndTip(type: YakuType, isDouble: boolean) {
    const gameView = getGameView();
    return gameView.gameAniView.playEndTip(type, isDouble);
}
export function getRoomConfig() {
    const gameModel = getGameModel();
    return JSON.parse(gameModel.homeInfo.homeConfig as string);
}
export function doPutdown(index: number) {
    const gameView = App.ViewManager.getView(ViewConst.Game) as gdmj.GameView;
    const hand_card = getUserHandCard();
    if (!hand_card) {
        return;
    }
    const card_map = hand_card.HandCardMap;
    if (!card_map) {
        return;
    }
    const keys = Object.keys(card_map);
    const item = card_map[keys[index]];
    gameView.handCardViewMap[1].doPutdown(item.Sid as number);
    // doPutdown
}
/** 复盘进去 而且游戏已经开始 */
export function openResult(msg: any) {
    App.WindowMgr.open(
        WindowConst.ZjmjRoundResult,
        {
            Bean_Desk_GZMJ_RoundItemInfo: msg,
        },
        true,
    );
}

export function getGameController() {
    return App.ControllerManager.getController(
        ControllerConst.Game,
    ) as gdmj.GameController;
}
export function showBigWin() {
    egret.MainContext.instance.stage.addEventListener(
        egret.TouchEvent.TOUCH_BEGIN,
        () => {
            if (!App.WindowMgr.isShow(WindowConst.BigWinShareView)) {
                App.WindowMgr.open(WindowConst.BigWinShareView, {
                    condition: 1111,
                });
            }
        },
        null,
    );
}

export function getShareStr() {
    return getGameController()['controllerCompt'].getShareStr();
}
export function getUid() {
    return gdmj.GameContext.uid;
}

export const gameUtils = {
    getUserHandCard,
    getGameModel,
    getGameView,
    getMenInfo,
    doPutdown,
    getRoomConfig,
    getFrontCard,
    getFrontHuCard,
    playEndTip,
    getGameController,
    getShareStr,
    openResult,
    getUid,
};
