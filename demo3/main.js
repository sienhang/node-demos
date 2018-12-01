const fs = require('fs')

// 同步读取文件，阻塞代码，阻塞是按顺序执行的
// const data1 = fs.readFileSync('input.txt')
//
// console.log('111', data1.toString())
//
// const data2 = fs.readFileSync('input.txt')
//
// console.log('222', data2.toString())
//
// console.log('程序执行结束!')


// 异步读取文件，非阻塞代码，非阻塞是不需要按顺序的
fs.readFile('input.txt', (err, data) => {
  if (err) return console.error(err)
  console.log(data.toString())
})

console.log('程序执行结束!')
