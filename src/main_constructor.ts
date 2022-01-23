class Site2 {
    // 公有属性
    // public name: string;
    // 私有属性
    // private url: string;

    constructor(public name: string, private url: string) { }

    sayhelo() {
        console.log("->", `欢迎来到 ${this.name} 频道`)
        console.log("->", this.url)
    }
}

const main6 = () => {
    const mySite = new Site2(
        "小马技术",
        "httsp://komavideo.com",
    )

    console.log(mySite)
    console.log("$$", mySite.name)
    // console.log(mySite.url)
    mySite.sayhelo()
}

main6()