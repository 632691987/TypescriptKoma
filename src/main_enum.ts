import * as _ from 'lodash';

enum IAMRole {
    AdministratorAccess,
    AmazonDynamoDBFullAccess,
    AmazonS3FullAccess,
}


// 授权函数
const auth = (role: IAMRole) => {
    if (role == IAMRole.AdministratorAccess) {
        console.log("管理员权限")
    }
    if (role === IAMRole.AmazonDynamoDBFullAccess) {
        console.log("DynamoDB全存取权限")
    }
    if (role === IAMRole.AmazonS3FullAccess) {
        console.log("S3全存取权限")
    }
}


const main = () => {
    // 定义枚举型变量
    let myRole: IAMRole = IAMRole.AdministratorAccess
    auth(myRole)

    // 修改权限
    myRole = IAMRole.AmazonS3FullAccess
    auth(myRole)
}

main()