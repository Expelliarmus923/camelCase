import camelCaseConvert from '../src/index.js';

let start = new Date().getTime();
var obj = {
    a_v: 1,
    c_d_ddd: 2,
    addHiver: 'aaa',
    e_config_arrow: {
        daxiang_ma: null,
        sb_is_not: undefined
    },
    d_array_test: [
        {
            a_v: 1
        },
        {
            c_v: 2
        }
    ]
};
let targetObj = camelCaseConvert(Object.assign({}, obj));
console.log(obj === targetObj);