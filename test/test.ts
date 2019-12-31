import { injectWindow } from "utils/utils";
import { testMap } from "testMap";
import { gameUtils } from "game/gameUtils";
import { egretUtils } from "egret/egretUtils";

const test = {
  egretUtils,
  gameUtils
};

injectWindow({ test, testMap });
