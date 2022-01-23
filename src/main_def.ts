import * as _ from 'lodash';

const main = () => {
    //////////////////////////////////////
    // 定义变量
    let myName = "Koma"
    console.log("myName:", myName)
    myName = "Xiaoma"
    console.log("myName:", myName)

    //////////////////////////////////////
    // 定义常量
    const siteName = "小马技术"
    console.log("siteName:", siteName)
    // Error:常量不可修改
    // siteName = "深学AWS"

    //////////////////////////////////////
    // 数值变量:number
    let myAge: number = 25
    console.log(typeof myAge)
    console.log(`My age is ${myAge}.`)
    // Error:类型不可变更
    // myAge = "25"
    // myAge = false

    //////////////////////////////////////
    // 字符变量:string
    let myCareer: string = "系统工程师"
    console.log(typeof myCareer)
    console.log(`My career is ${myCareer}.`)
    // Error:类型不可变更
    // myCareer = 25
    // myCareer = false

    //////////////////////////////////////
    // 布尔变量:boolean
    let isVIP: boolean = true
    console.log(typeof isVIP)
    console.log(`VIP is ${isVIP}.`)
    // Error:类型不可变更
    // isVIP = "true"
    // isVIP = 1
}

main()