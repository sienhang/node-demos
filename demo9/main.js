// // 表示当前正在执行的脚本文件所在位置的绝对路径
// console.log('__filename：', __filename)
//
// // 表示当前执行脚本所在的目录
// console.log('__dirname：', __dirname)




// const printHello = () => {
//   console.log('Hello, World!')
// }
//
// // 两秒后执行以上函数
// const t = setTimeout(printHello, 2000)
//
// // 清除定时器
// clearTimeout(t)
//
// const i = setInterval(printHello, 2000)
//
// clearInterval(i)





// console.info('程序开始执行：')
//
// const counter = 10
// console.log('计数: %d', counter)
//
// console.time('获取数据')
// //
// // 执行一些代码
// //
// console.timeEnd('获取数据')
//
// console.info('程序执行完毕。')



//
// // process：用于描述当前Node.js 进程状态的对象，提供了一个与操作系统的简单接口
// process.on('exit', code => {
//
//   // 以下代码永远不会执行
//   setTimeout(() => {
//     console.log('该代码不会执行')
//   }, 0)
//
//   console.log('退出码为:', code)
// })
// console.log('程序执行结束')



// // 标准输出流
// process.stdout.write('Hello World!' + '\n')
//
// // argv 属性返回一个数组，由命令行执行脚本时的各个参数组成。它的第一个成员总是node，第二个成员是脚本文件名，其余成员是脚本文件的参数。
// process.argv.forEach((val, index, array) => {
//   console.log(`${index}: ${val}`)
// })
//
// // 返回执行当前脚本的 Node 二进制文件的绝对路径。
// console.log(process.execPath)
//
// // 运行程序所在的平台系统 'darwin', 'freebsd', 'linux', 'sunos' 或 'win32'
// console.log(process.platform)



// 返回当前进程的工作目录
console.log('当前目录: ' + process.cwd())

// Node 的版本
console.log('当前版本: ' + process.version)

// 返回一个对象，描述了 Node 进程所用的内存状况，单位为字节
console.log(process.memoryUsage())
