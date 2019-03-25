function f() {}
typeof f.prototype//"Object"

function Animal(name) {
  this.name = name;
}
Animal.prototype.color = 'white';

var cat1 = new Animal('大毛');
var cat2 = new Animal('二毛');

cat1.color // 'white'
cat2.color // 'white'

Animal.prototype.color = 'yellow';
//那么，Object.prototype对象有没有它的原型呢？回答是Object.prototype的原型是null。null没有任何属性和方法，也没有自己的原型。因此，原型链的尽头就是null。
Object.getPrototypeOf(Object.prototype)//null

function P (){}
P.prototype.constructor === P;

function Constr() {}
let x = new Constr();
var y = new x.constructor();
y instanceof Constr //true


C.prototype.method1 = function(){};

function Foo() {}
var f = new Foo();
f.constructor.name // "Foo"

v instanceof Vehicle
Vehicle.prototype.isPrototypeof(v);

function Fubar (foo,bar){
  if (this instanceof Fubar){
    this._foo = foo;
    this._bar = bat;
  }else {
    return new Fubar(foo,bar);
  }
}

function Shape() {
  this.x = 0;
  this.y = 0;
}

Shape.prototype.move = function (x,y){
  this.x += x;
  this.y += y;
  console.info('Shape moved.')

};

//step 1
function Rectangle() {
  Shape.call(this);
}

//step 1.2
function Rectangle() {
  this.base = Shape;
  this.base();
}

//step 2
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

classB.prototype.print = function() {
  classA.prototype.print.call(this);
}

//多重继承
function M1(){
  this.hello = 'hello';
}

function M2(){
  this.world = 'world';
}

function S() {
  M1.call(this);
  M2.call(this);
}


//Mixin
//M1
S.prototype = Object.create(M1.prototype);
//M2
Object.assign(S.prototype,M2.prototype);
//construct
S.prototype.constructor = S;

var s = new S();
s.hello
s.world

const F = function() {};
const f = new F();
Object.getPrototypeOf(f) === F.prototype //true

Object.getPrototypeOf({}) === Object.prototype // true
Object.getPrototypeOf(Object.prototype) === null // true
function f() {}
Object.getPrototypeOf(f) === Function.prototype
Object.setPrototypeOf(a,b);


const F = function() {
  this.foo = 'bar';
};

const f = new F();
//==
const f = Object.setPrototypeOf({},F.prototype);
F.call(f);

Object.create 

if (typeof Object.create !== 'function') {
  Object.create = function (obj) {
    function F() {}
    F.prototype = obj;
    return new F();
  };
}

var obj1 = Object.create({});
var obj2 = Object.create(Object.prototype);
var obj3 = new Object();

//Object.create方法生成的新对象，动态继承了原型。在原型上添加或修改任何方法，会立刻反映在新对象之上。


const obj = {};
const p = {};

obj._proto_ = p;
Object.getPrototypeOf(obj) === p //true

//获取实例对象obj的原型对象，有三种方法。
obj._proto_
obj.constructor.prototype
Object.getPrototypeOf(obj);


Object.getOwnPropertyNames(Date);//don't care enumerable
Object.keys(Date);//only get which can be enumerable

Object.prototype.hasOwnProperty()//hasOwnProperty方法是 JavaScript 之中唯一一个处理对象属性时，不会遍历原型链的方法。


function inheritedPropertyNames(obj) {
  const props = {}
  while(obj){
    Object.getOwnPropertyNames(obj).forEach(function(p){
      props[p] = true;

    });

    obj = Object.getPrototypeOf(obj);

  }
  return Object.getOwnPropertyNames(props);
}

//object's copy
function copyObject(orig){
  return Object.create(
    Object.getPrototypeOf(orig),
    Object.getOwnPropertyDescriptor(orig)
  )
}

'use strict'