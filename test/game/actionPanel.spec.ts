import { Test } from "testBuilder";

export const action_panel_test = new Test("sat", runner => {
  runner.describe("show", () => {
    const stage = App.StageUtils.getStage();
    const action_panel = App.ControllerManager.getController(
      ControllerConst.Game
    ).gameActionSelectPanel;
    App.ControllerManager.getControllerModel(ControllerConst.Game).huScore = 20;
    action_panel.open(
      new protocol.Push_Desk_ActionPollingInfo({
        ActionMap: { 4: true, 13: true },
        RiverCardInfo: {
          Cid: 24,
          Type: 3,
          Num: 4,
          Sid: 100,
          Wid: 34,
          Uid: 178356,
          Rid: 8
        }
      })
    );
    action_panel.x = 1000;
    stage.addChild(action_panel);
  });
});
