import { Test, mapTest } from 'testBuilder';
import { TestBuilderCtor } from 'testBuilder/testBuilder';
import { getTestEnable, getTestIgnore } from 'utils/utils';
import { recommend_friend } from 'game/recommendFriend.spec';
import { circle_test } from 'circle/circle.spec';

const testScope = new Test('top');
testScope.addChild(recommend_friend, circle_test);
const testBuilder = new TestBuilderCtor(testScope, { is_on: true });
testBuilder.enableDisableTest(getTestEnable(), getTestIgnore());
testBuilder.init();

export let testMap: any = mapTest(testBuilder.top_scope);
