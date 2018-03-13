# 下划线转大小写

```js
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
```
获得一个和原值互不干扰的对象。
当然还是喜欢下面这种（后端某P下划线看起来不舒服，不如连对象都不保留，统统delete）

```js
    camelCaseConvert(obj);
    console.log(obj);
```