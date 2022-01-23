abstract class DB3 {
    // 构造函数
    constructor(
        public name: string,
        public port: number,
        public dbtype: string,
    ) { }

    desc() {
        console.log("数据库通用类")
    }

    abstract connect(): void;
}

class RDB3 extends DB3 {
    // 构造函数
    constructor(
        public name: string,
        public port: number,
    ) {
        super(name, port, "RDB")
    }

    // 数据库连接方法
    connect() {
        console.log(`${this.name}-${this.port}-${this.dbtype}`)
    }
}

const main10 = () => {
    // Error:抽象类不可实例化
    // const myDb = new DB("mysql", 3306, "RDB")

    const mysql = new RDB3("mysql", 3306)
    mysql.desc()
    mysql.connect()
}

main10()