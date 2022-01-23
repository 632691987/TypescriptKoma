class DB2 {
    // 构造函数
    constructor(
        public name: string,
        public port: number,
        public dbtype: string,
    ) { }
    // 数据库连接方法
    connect() {
        console.log(`${this.name}-${this.port}-${this.dbtype}`)
    }

    //////////////////////////////
    // 静态属性
    static TYPE: string = "数据库通用类"

    // 静态:类说明方法
    static desc() {
        console.log(`这是一个数据库处理类，好好使用它，它会帮助到你。`)
    }
}

const main9 = () => {
    const myDb = new DB2("mysql", 3306, "RDB")
    myDb.connect()

    //////////////////////////////
    // *不用实例化就可使用*
    // 静态属性
    console.log(DB2.TYPE)
    // 静态函数
    DB2.desc()
}

main9()