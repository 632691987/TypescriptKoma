/// <reference path="ns1/DB.ts" />
// 事实证明，我的文件夹叫 ns1, 不需要一定叫 Utils2


namespace App {
    const main = () => {
        let db: Utils2.DB2 = new Utils2.DB2("mysql", 3306, "RDS")
        db.connect()
    }

    main()
}


/**
 注意，此时的 tsconfig.json, 是这样的
 */

//  {
//   "compilerOptions": {
//     "target": "es5", /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
//     "module": "amd", /* this is for import the ns1/DB.ts */
//     //"module": "commonjs", /* This is default value. */
//     "rootDir": "./src", /* Specify the root folder within your source files. */
//     "outDir": "./dist", /* Specify an output folder for all emitted files. */
//     "outFile": "./dist/main.js",
//     "removeComments": true, /* Disable emitting comments. */
//     "esModuleInterop": true, /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables `allowSyntheticDefaultImports` for type compatibility. */
//     "forceConsistentCasingInFileNames": true, /* Ensure that casing is correct in imports. */
//     "strict": true, /* Enable all strict type-checking options. */
//     "skipLibCheck": true /* Skip type checking all .d.ts files. */
//   }
// }