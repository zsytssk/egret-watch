export function getGameModel() {
    return App.ControllerManager.getControllerModel(
        ControllerConst.Game,
    ) as gdmj.GameModel;
}
export function getGameView() {
    return App.ViewManager.getView(ViewConst.Game) as gdmj.GameView;
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

export const gameUtils = {
    getUserHandCard,
    getGameModel,
    getGameView,
    getMenInfo,
    doPutdown,
    getRoomConfig,
};
