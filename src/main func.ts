// 普通函数
function add1(x: number, y: number) {
    return x + y
}

// 箭头函数
const add2 = (x: number, y: number) => {
    return x + y
}

// 简化写法
const add3 = (x: number, y: number) => x + y

const add4 = (x: number = 1, y: number = 2) => {
    return x + y;
}

// 调用函数
//console.log(add3(100, 200))