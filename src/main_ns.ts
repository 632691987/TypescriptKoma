namespace Utils.tools {
    export class DB {
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
    }
}

namespace App {
    const main = () => {
        let db: Utils.tools.DB = new Utils.tools.DB("mysql", 3306, "RDS")
        db.connect()
    }

    main()
}