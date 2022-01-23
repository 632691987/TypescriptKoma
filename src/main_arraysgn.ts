const mainArray = () => {
    //////////////////////////////////////
    // 数组定义
    let tags = ["Node.js", "Python"]
    let tagJava = "Java"

    tags.push(tagJava)

    console.log(tags)
    // 数组延展操作
    console.log(...tags)

    //////////////////////////////////////
    // 定义一个对象
    const mySite = {
        name: "小马技术",
        url: "https://komavideo.com",
        pageViews: 1000,
    }
    console.log(mySite)

    const myProfile = {
        author: "Koma",
        // 将 mySite 对象属性延展过来
        ...mySite,
    }
    console.log(myProfile)

    //////////////////////////////////////
    // 延展函数参数
    const add = (...numbers: number[]) => {
        return numbers.reduce((prev, current) => {
            return prev + current;
        }, 0)
    }

    console.log(add(1, 2, 3))
    console.log(add(1, 2, 3, 4, 5))
}

mainArray()