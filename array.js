let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 6, 7, 8, 9];

// ES7中的includes(判断数组中否包含), 返回布尔值
const _inclueds = arr1.includes(5);
console.log(_inclueds); // boolean

// 过滤数据
const _filter = arr1.filter((v) => arr2.includes(v));
console.log(_filter);

// 过滤数据
const _filter1 = arr1.filter((v) => !arr2.includes(v));
console.log(_filter1)

// 求两个数组的并集
const union = arr1.concat(arr2.filter((v) => !arr1.includes(v)));
console.log(union);

// 数组reduce语法
// array.reduce(function(accumulator, arrayElement, currentIndex, arr), initialValue)

// let arr = [1,2,3,4];
const reduce
