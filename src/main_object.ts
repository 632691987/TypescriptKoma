import * as _ from 'lodash';

const main = () => {
    // 定义一个对象
    const mySite: {
        name: string,
        url: string,
        pageViews: number,
    } = {
        name: "小马技术",
        url: "https://komavideo.com",
        pageViews: 1000,
    }

    // 输出对象内容
    console.log(mySite)
    // 输出对象指定属性
    console.log(mySite.name, mySite.url, mySite.pageViews)
    // Error:不存在的属性
    // console.log(mySite.description)
}

main()