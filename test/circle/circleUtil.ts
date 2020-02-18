import { injectProto } from 'utils/utils';

export function waitGetRecord() {
    return new Promise((resolve, reject) => {
        injectProto(gdmj.CircleRecordView, 'initUI', instance => {
            console.log(`test:>instance`, instance);
            resolve(instance);
        });
    });
}
