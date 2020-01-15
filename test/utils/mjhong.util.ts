export function openPop(name: string, ...params: any[]) {
    return new Promise((resolve, reject) => {
        App.WindowMgr.open(name, ...params);
        const interval = setInterval(() => {
            const pop = App.WindowMgr.getView(name);
            if (pop) {
                resolve(pop);
                clearInterval(interval);
            }
        }, 500);
    }) as Promise<BaseEuiWindow>;
}
