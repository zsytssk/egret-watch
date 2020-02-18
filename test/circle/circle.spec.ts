import { Test } from 'testBuilder';
import data from './circleRecord.data.json';
import { injectProto, sleep } from '../utils/utils';

export const circle_test = new Test('circle', runner => {
    runner.describe('circle_record_show', async () => {
        await RES.loadGroup('baseview');

        const stage = App.StageUtils.getStage();
        const circle_record = new gdmj.CircleRecordView();
        stage.addChild(circle_record);
        let render_data = data.Res_Stage_FriendRoomRecord.friendRoomRecord;
        render_data = [...render_data, ...render_data, ...render_data];
        circle_record['renderData'](render_data);
        circle_record.x = (stage.width - circle_record.width) / 2;
        circle_record.y = (stage.height - circle_record.height) / 2;

        const { btn_close } = circle_record;
        btn_close.once(
            egret.TouchEvent.TOUCH_TAP,
            () => {
                stage.removeChild(circle_record);
            },
            circle_record,
        );

        console.log(`test:>`, circle_record);
    });

    runner.describe('circle_apply_list', async () => {
        await RES.loadGroup('baseview');

        const stage = App.StageUtils.getStage();
        const circle_apply_list = new gdmj.CircleApplyList();
        stage.addChild(circle_apply_list);
        circle_apply_list.initUI();
        circle_apply_list.x = (stage.width - circle_apply_list.width) / 2;
        circle_apply_list.y = (stage.height - circle_apply_list.height) / 2;

        const { btn_close } = circle_apply_list;
        btn_close.once(
            egret.TouchEvent.TOUCH_TAP,
            () => {
                stage.removeChild(circle_apply_list);
            },
            circle_apply_list,
        );

        console.log(`test:>`, circle_apply_list);
    });

    runner.describe('circle_get_data', async () => {
        // const view = await new Promise((resolve, reject) => {
        //     injectProto(gdmj.CircleRecordView, 'initUI', instance => {
        //         console.log(`test:>instance`, instance);
        //         resolve(instance);
        //     });
        // });
        let num = 0;
        App.MessageCenter.addListener(
            gdmj.SocketMsg.HistoryRecord,
            async (_data: any) => {
                if (_data.test) {
                    return;
                }
                num++;
                if (num > 3) {
                    num = 0;
                    return;
                }

                await sleep(2);
                App.MessageCenter.dispatch(gdmj.SocketMsg.HistoryRecord, {
                    test: true,
                    ...data,
                });
            },
            null,
        );
    });
});
