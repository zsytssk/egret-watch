import { Test, mapTest } from "testBuilder";
import { TestBuilderCtor } from "testBuilder/testBuilder";
import { getTestEnable, getTestIgnore } from "utils/utils";

const testScope = new Test("top");
testScope.addChild();
const testBuilder = new TestBuilderCtor(testScope, { is_on: true });
testBuilder.enableDisableTest(getTestEnable(), getTestIgnore());
testBuilder.init();

export let testMap: any = mapTest(testBuilder.top_scope);
