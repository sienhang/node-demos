const util = require('util')

function Base() {
  this.name = 'base'
  this.base = 1991
  this.sayHello = () => {
    console.log(`Hello ${this.name}`)
  }
}

Base.prototype.showName = function() {
  console.log(this.name)
}

function Sub() {
  this.name = 'sub'
}

// Sub 继承 Base
util.inherits(Sub, Base)

const objBase = new Base()
objBase.showName()
objBase.sayHello()
console.log(objBase)

const objSub = new Sub()
objSub.showName()
// objSub.sayHello()
console.log(objSub)

