const fs = require('fs')



// fs.readFile('input.txt', (err, data) => { // 不堵塞
//   if (err) {
//     return console.error(err)
//   }
//   console.log(`异步读取: ${data.toString()}`)
// })
//
// // 堵塞
// const data = fs.readFileSync('input.txt')
// console.log(`同步读取: ${data.toString()}`)
//
// console.log('程序执行完毕。')



// // 异步打开文件
// console.log('准备打开文件！')
// fs.open('input.txt', 'r+', (err, fd) => {
//   if (err) {
//     return console.error(err)
//   }
//   console.log('文件打开成功！')
// })



// // 通过异步模式获取文件信息
// console.log('准备打开文件！')
// fs.stat('input.txt', (err, stats) => {
//   if (err) {
//     return console.error(err)
//   }
//   console.log(stats)
//   console.log('读取文件信息成功！')
//   console.log(`是否为文件(isFile) ? ${stats.isFile()}`)
//   console.log(`是否为目录(isDirectory) ? ${stats.isDirectory()}`)
// })


// console.log('准备写入文件')
// // 异步
// fs.writeFile('input1.txt', '我是通 过fs.writeFile 写入文件的内容',  err => {
//   if (err) {
//     return console.error(err)
//   }
//   console.log('数据写入成功！')
//   console.log('--------我是分割线-------------')
//   console.log('读取写入的数据！')
//   fs.readFile('input1.txt', (err, data) => {
//     if (err) {
//       return console.error(err)
//     }
//     console.log(`异步读取文件数据: ${data.toString()}`)
//   })
// })




var buf = new Buffer.alloc(1024)

console.log('准备打开已存在的文件！')
fs.open('input.txt', 'r+', (err, fd) => {
  if (err) {
    return console.error(err)
  }
  console.log('文件打开成功！')
  console.log('准备读取文件：')
  fs.read(fd, buf, 0, buf.length, 0, (err, bytes) => {
    if (err) {
      console.log(err)
    }
    console.log(`${bytes} 字节被读取`)

    // 仅输出读取的字节
    if (bytes > 0) {
      console.log(buf.slice(0, bytes).toString())
    }

    // 关闭文件
    fs.close(fd, err => {
      if (err) {
        console.log(err)
      }
      console.log('文件关闭成功')
    })
  })
})
