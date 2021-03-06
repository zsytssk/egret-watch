export function sleep(time: number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time * 1000);
    });
}
export function nameMap(path: string | string[], end_obj: any, obj?: any) {
    if (typeof path === 'string') {
        path = path.split('.');
    }
    if (!obj) {
        obj = window;
    }
    const cur_path = path.shift() as string;
    if (path.length === 0) {
        obj[cur_path] = end_obj;
        return;
    }

    if (!obj[cur_path]) {
        obj[cur_path] = {};
    }
    nameMap(path, end_obj, obj[cur_path]);
}
export function injectWindow(obj: { [key: string]: any }) {
    for (const key in obj) {
        if (!obj.hasOwnProperty(key)) {
            continue;
        }
        nameMap(key, obj[key]);
    }
}

let test_ignore_arr: string[] = [];
/** 测试是否需要跳过 */
export function getTestIgnore() {
    if (!test_ignore_arr.length) {
        const test_str = getUrlVars('test_ignore');
        if (!test_str) {
            return test_ignore_arr;
        }
        test_ignore_arr = test_str.split(',');
    }
    return test_ignore_arr;
}

let test_enable_arr: string[] = [];
/** 测试开启 */
export function getTestEnable() {
    if (!test_enable_arr.length) {
        const test_str = getUrlVars('test_enable');
        if (!test_str) {
            return test_enable_arr;
        }
        test_enable_arr = test_str.split(',');
    }
    return test_enable_arr;
}

function getUrlVars(name: string) {
    var vars = {} as { [key: string]: string };
    window.location.href.replace(
        /[?&]+([^=&]+)=([^&]*)/gi,
        (m, key, value) => (vars[key] = value),
    );
    return vars[name];
}

/** 在class的fun执行之后执行fun */
export function injectAfter<T extends {}, K extends ObjFilterKeys<T, Function>>(
    instance: T,
    fun_name: K,
    func: Func<any>,
) {
    const ori_fun = instance[fun_name] as Func<any>;
    instance[fun_name] = function(...params: any[]) {
        const result = ori_fun.apply(this, [...params]);
        if (result instanceof Promise) {
            result.then(() => {
                func(this, result, ...params);
            });
        } else {
            func(this, result, ...params);
        }
        return result;
    } as any;
}

export function injectProto<T extends {}, K extends ObjFilterKeys<T, Function>>(
    ctor: Ctor<T>,
    fun_name: K,
    func: Func<any>,
    once?: boolean,
) {
    const ori_fun = ctor.prototype[fun_name];
    ctor.prototype[fun_name] = function(...params: any[]) {
        const result = ori_fun.apply(this, [...params]);
        if (result instanceof Promise) {
            result.then(() => {
                func(this, result, ...params);
            });
        } else {
            func(this, result, ...params);
        }
        if (once) {
            ctor.prototype[fun_name] = ori_fun;
        }
        return result;
    };
}
