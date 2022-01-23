import { DB4 } from './ns1/DB4'

namespace App3 {
    const main = () => {
        let db: DB4 = new DB4("mysql", 3306, "RDS")
        db.connect()
    }

    main()
}