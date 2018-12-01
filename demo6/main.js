// 从流中读取数据
// const fs = require('fs')
//
// let data = ''
//
// // 创建可读流
// const readerStream = fs.createReadStream('input.txt')
//
// // 设置编码为 utf8。
// readerStream.setEncoding('UTF8')
//
// // 当有数据可读时触发
// readerStream.on('data', chunk => {
//   data += chunk
//   console.log('读取数据。。。')
// })
//
// // 没有更多的数据可读时触发
// readerStream.on('end', () => {
//   console.log('读取完成。。。')
//   console.log(data)
// })
//
// // 在接收和写入过程中发生错误时触发
// readerStream.on('error', err => {
//   console.log('读取失败。。。')
//   console.log(err.stack)
// })
//
// console.log('程序执行完毕')



// 写入流
// const fs = require('fs')
//
// const data = 'Hello World'
//
// // 创建一个可以写入的流，写入到文件 output.txt 中
// const writerStream = fs.createWriteStream('output.txt')
//
// // 使用 utf8 编码写入数据
// writerStream.write(data, 'UTF8')
//
// // 标记文件末尾
// writerStream.end()
//
// // 所有数据已被写入到底层系统时触发
// writerStream.on('finish', () => {
//   console.log('写入完成。')
// })
//
// // 在接收和写入过程中发生错误时触发
// writerStream.on('error', err => {
//   console.log(err.stack)
// })
//
// console.log('程序执行完毕')


// // 管道流
// const fs = require('fs')
//
// // 创建一个可读流
// const readerStream = fs.createReadStream('input.txt')
//
// // 创建一个可写流
// const writerStream = fs.createWriteStream('output1.txt')
//
// // 管道读写操作
// // 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
// readerStream.pipe(writerStream)
//
// console.log('程序执行完毕')


