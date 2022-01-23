class Site {
    // 公有属性
    public name: string;
    // 私有属性
    private url: string;


    // 定义类属性
    // name: string;
    // url: string;

    // 构造函数
    constructor(name: string, url: string) {
        this.name = name;
        this.url = url;
    }

    // 定义类方法
    sayhelo() {
        console.log(`欢迎来到 ${this.name} 频道`)
        console.log("->", this.url)
    }
}

const mainClass = () => {
    // 定义类实例
    const mySite = new Site(
        "小马技术",
        "httsp://komavideo.com",
    )

    console.log(mySite)
    mySite.sayhelo()
}

mainClass()