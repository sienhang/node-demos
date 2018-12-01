const fs = require('fs')
const zlib = require('zlib')

// 压缩 input.txt 文件为 input.txt.gz
fs.createReadStream('input.txt')
  .pipe(zlib.createGzip()) // 压缩
  .pipe(fs.createWriteStream('input.txt.gz')) // 写入

console.log('文件压缩完成。')
