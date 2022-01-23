import * as _ from 'lodash';

const main = () => {
    // 定义一个对象
    const mySite: {
        name: string,
        url: string,
        pageViews: number,
        // 定义一个字符数组属性
        tags: string[],
    } = {
        name: "小马技术",
        url: "https://komavideo.com",
        pageViews: 1000,
        tags: ["IT", "AWS", "Node.js", "Python"],
    }

    // 输出对象内容
    console.log(mySite)
    // 循环输出数组
    for (const item of mySite.tags) {// 这是学习的重点，用 of
        console.log("-", item)
    }
}

main()