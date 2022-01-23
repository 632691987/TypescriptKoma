interface IDB {
    name: string;
    port: number;

    connect(): void;
}

// 定义接口实现类
class PostgreSqlDB implements IDB {

    constructor(public name: string, public port: number) {
    }

    connect(): void {
        console.log("连接到", this.name, this.port)
    }

}

const main11 = () => {
    // 定义实现接口的对象
    let mysql: IDB = {
        name: "172.16.10.1",
        port: 3306,
        connect() {
            console.log("连接到", this.name, this.port)
        }
    }
    mysql.connect()

    // 使用 PostgreSqlDB 类
    let postgre = new PostgreSqlDB("192.168.1.1", 5432)
    postgre.connect()
}

main11()