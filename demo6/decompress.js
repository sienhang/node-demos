const fs = require('fs')
const zlib = require('zlib')

// 解压 input.txt.gz 文件为 input.txt
fs.createReadStream('input.txt.gz')
  .pipe(zlib.createGunzip()) // 解压
  .pipe(fs.createWriteStream('input2.txt')) // 写入

console.log('文件解压完成。')
