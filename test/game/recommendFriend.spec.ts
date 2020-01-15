import { Test } from 'testBuilder';
import { RecommendFriendData, Data2 } from './recommendFriend.data';
import { openPop } from 'utils/mjhong.util';

export const recommend_friend = new Test('recommendFriend', runner => {
    runner.describe('show_list', async () => {
        const pop = (await openPop(
            WindowConst.RecommendFriend,
        )) as RecommendFriend.RecommendFriend;
        // tslint:disable-next-line
        pop['onRecommendFriend'](RecommendFriendData);
        return pop;
    });

    runner.describe('invite', async () => {
        await recommend_friend.runTest('show');
        const uid = RecommendFriendData[0].uid;
        setTimeout(() => {
            App.MessageCenter.dispatch(gdmj.SocketMsg.InviteRecommendFriend, {
                uid,
            });
        }, 1000);
    });

    runner.describe('show_tip', async () => {
        const pop = (await openPop(
            WindowConst.RecommendFriendTip,
            Data2.Push_Stage_RecvInvite,
        )) as RecommendFriend.RecommendFriendTip;
        return pop;
    });
});
