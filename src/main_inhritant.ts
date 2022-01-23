class DB {

    constructor(
        public name: string,
        public port: number,
        public dbtype: string,
    ) { }


    desc() {
        console.log(`${this.name}-${this.port}-${this.dbtype}`)
    }
}

class RDB extends DB {
    constructor(
        public name: string,
        public port: number,
    ) {
        super(name, port, "RDB")
    }
}

class NoSqlDB extends DB {
    constructor(
        public name: string,
        public port: number,
    ) {
        super(name, port, "NoSql")
    }
}

const main8 = () => {
    const myDb = new DB("mysql", 3306, "RDB")
    myDb.desc()

    const mySql = new RDB("mysql", 3306)
    mySql.desc()

    const mongodb = new NoSqlDB("mongoDB", 27017)
    mongodb.desc()
}

main8()