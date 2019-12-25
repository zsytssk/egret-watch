type ThrottleFn = (...params: any[]) => Promise<any>;

/** promise 执行完成之后 才继续执行..., 保存最后一个 中间会被清空 */
export function throttlePromise(fn: ThrottleFn): [() => void, () => boolean] {
  let arr: number[] = [];
  let running = false;
  function addToRun() {
    arr = [1];
    if (running) {
      return;
    }
    run();
  }

  function run() {
    if (!arr.length) {
      return (running = false);
    }
    running = true;
    arr.pop();
    fn()
      .then(run)
      .catch(run);
  }

  function isEnd() {
    return arr.length === 0;
  }

  return [addToRun, isEnd];
}
