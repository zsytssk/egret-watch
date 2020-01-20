import { Test } from 'testBuilder';
import data from './circleRecord.data.json';

export const circle_test = new Test('circle', runner => {
    runner.describe('circle_record_show', async () => {
        await RES.loadGroup('baseview');

        const stage = App.StageUtils.getStage();
        const circle_record = new gdmj.CircleRecordView();
        stage.addChild(circle_record);
        let render_data = data.Res_Stage_FriendRoomRecord.friendRoomRecord;
        render_data = [...render_data, ...render_data, ...render_data];
        circle_record.initUI(render_data);
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
});
