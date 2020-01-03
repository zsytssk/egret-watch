import { clipBroad } from 'egret/egretUtils';

export function getConfig() {
    return {
        friend_rule_config: ConfigCenter.Inst['friend_rule_config'],
        fan_config: ConfigCenter.Inst['fan_config'],
    };
}
export function getPop() {
    return (App.WindowMgr.getView(
        WindowConst.CreateFriendRoom,
    ) as any) as gdmj.CreateFriendRoomView;
}
export function getContentGroup() {
    return getPop()['contentGroup'];
}
export function clipContent() {
    clipBroad(getContentGroup());
}

export const createRoom = {
    getConfig,
    getPop,
    getContentGroup,
    clipContent,
};
