import { injectWindow } from 'utils/utils';
import { testMap } from 'testMap';
import { gameUtils } from 'game/gameUtils';
import { egretUtils } from 'egret/egretUtils';
import { createRoom } from 'createRoom/createRoomUtils';
const test = {
    egretUtils,
    gameUtils,
    createRoom,
};
injectWindow({ test, testMap });
