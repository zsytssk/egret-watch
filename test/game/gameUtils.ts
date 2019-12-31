export function getGameModel() {
    return App.ControllerManager.getControllerModel(
        ControllerConst.Game,
    ) as gdmj.GameModel;
}
export function getUserHandCard() {
    let gameModel = getGameModel();
    if (gameModel == null || gameModel.homeInfo == null) {
        return;
    }
    let uid = gdmj.GameContext.uid;
    let handCardInfo = gameModel.handCardMap;
    return handCardInfo == null || handCardInfo[uid];
}
export function getMenInfo() {
    let gameModel = getGameModel();
    return gameModel.$menInfo;
}

export const gameUtils = {
    getUserHandCard,
    getGameModel,
    getMenInfo,
};
