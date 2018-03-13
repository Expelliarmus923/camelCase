//判断类型
export const type = function(obj) {
    return /^\[object (.*)\]$/gi.exec(Object.prototype.toString.call(obj))[1];
};
export const isObject = function(obj) {
    return type(obj) === 'Object';
};
export const isArray = function(obj) {
    return type(obj) === 'Array';
};