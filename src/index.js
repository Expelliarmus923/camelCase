import { isObject, isArray } from './util.js';
//把下划线换驼峰 aa_bb_cc => aaBbCc
const camelCaseToUpperCase = (obj, key) => {
    let reg = /_([^_])/gi;
    let ckey = key.replace(reg, function() {
        return arguments[1].toLocaleUpperCase();
    });
    if (ckey === key) {
        return obj;
    }
    Object.defineProperty(obj, ckey, {
        value: obj[key],
        configurable: true,
        writable: true,
        enumerable: true
    });
    delete obj[key];
    return obj;
};
function arrayConvert (nowValue){
    nowValue.forEach((el, idx) => {
        nowValue[idx]= camelCaseConvert(el);
    });
}
function camelCaseConvert(obj) {
    if(isObject(obj)){
        Object.keys(obj).map(key => {
            let nowValue = obj[key];
            camelCaseToUpperCase(obj, key);
            if (isObject(nowValue)) {
                return camelCaseConvert(nowValue);
            }
            if (isArray(nowValue)) {
                return arrayConvert(nowValue)
            }
        });   
    }
    return obj;
}
export default camelCaseConvert;
