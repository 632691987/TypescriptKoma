namespace MAIN26 {
    const mergeString = (x: string, y: string) => {
        return x + y;
    }
    const mergeNumber = (x: number, y: number) => {
        return x + y;
    }
    const merge = (x: any, y: any) => {
        return x + y;
    }
    
    const main = () => {
        console.log(mergeString("aaa", "bbb"))
        console.log(mergeNumber(10, 20))
    
        console.log(merge("xxx", "yyy"))
        console.log(merge(100, 200))
        console.log(merge(1000, "zzz"))
    }
    
    main()
}


// 以前是 "main": "clear && npx tsc && node dist/main.js"