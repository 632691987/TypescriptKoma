type User = {
    name: string,
    age: number,
    weight: number,
}

// 定义一个角色类型
type Role = {
    role: string,
    tel: string,
}

type Staff = User & Role;

const main12 = () => {
    // 实现一个用户
    let user1: User = {
        name: "Koma",
        age: 25,
        weight: 70,
    }
    console.log(user1)

    // 实现一个员工
    let staff: Staff = {// 不能屏蔽任何一个属性,是严格限定的
        name: "Koma",
        age: 25,
        weight: 70,
        role: "Admin",
        tel: "01-1234-5678"
    }
    console.log(staff)
}

main12()