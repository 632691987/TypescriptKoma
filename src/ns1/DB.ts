namespace Utils2 {
    export class DB2 {
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