class Site3 {

    constructor(
        // 设置只读属性
        private readonly id: number,
        public name: string,
        private url: string
    ) { }

    setId(newId: number) {
        // Error:只读属性，不可更新
        // this.id = newId;
    }
}

const main7 = () => {
    const mySite = new Site3(
        100,
        "小马技术",
        "httsp://komavideo.com",
    )

    console.log(mySite)
    mySite.setId(200)
}

main7()