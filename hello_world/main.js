/*
console.log("Hi,js")
//var o = new Object();
//o.hasOwnProperty("name");var
var a = 2/3;
console.log(a); 
let oldArray = {
    key1: 1,
    key2: 2
  };
  
  console.log(Object.keys(oldArray));*/
  /*
  let bai = {
    yong:2,
    qian:'some',

  };
  if ('toString' in bai){
    console.log(bai.hasOwnProperty('toString'))
  }
  let person = { name: '老张' };

for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key);
  }
}


function fib(num){

  if (num === 0) return 0;
  if (num === 1) return 1;
  return fib(num - 2) + fib(num - 1);
 }

 console.log(fib(6));

 let args = Array.prototype.slice.call(arguments);
 //huozhe
 var args = [];
 for (let i = 0; i < arguments.length; i++){

  args.push(arguments[i]);
 }
 
let arrs = [];
arrs[-1] = 'a';
arrs[Math.pow(2,32)] = 'b';
arrs[1] = 'bai';

console.log(arrs.length,arrs[-1]);
console.log('a' in arrs)

arrs.forEach(function (arr){
  console.log(arr)
});

var colors = ['red', 'green', 'blue'];
colors.forEach(function (color) {
  console.log(color);
});

function baiYongQian(){


  Array.prototype.forEach.call(arguments,function(elem,i){

elem = 2;i = 3;
    console.log(i + '.' +elem);

  });

}
function logArgs() {
  Array.prototype.forEach.call(arguments, function (elem, i) {
    console.log(i + '. ' + elem);
  });
}
Array.prototype.forEach.call('abc', function (chr) {
  console.log(chr);
});
//这种方法比直接使用数组原生的forEach要慢，所以最好还是先将“类似数组的对象”转为真正的数组，然后再直接调用数组的forEach方法。
let arr = Array.prototype.slice.call('abc');
arr.forEach(function (chr){

  console.log(chr);
});
var oldArray = { p: 1 };
oldArray.valueOf().toString() 

//特例
let oldArray = new Date();
oldArray.valueOf = function(){
  return 1
};
oldArray.toString = function(){
  return 2
};
//Date 对象会先调用toString().*/




//3.9

//let myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello Madonna!';

/*
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'imag/Madonna.jpeg') {
      myImage.setAttribute('src', 'imag/Madonna2.jpeg');
    } else {
      myImage.setAttribute('src', 'imag/Madonna.jpeg');
    }
}



function setHeading(name) {
  let myHeading = document.querySelector('h1');
  myHeading.textContent = '此情此景，不念俩句诗吗？' + name + '!';
  

}

function setUserName(){
  let myName = prompt('请问您高姓大名？');
  localStorage.setItem('name', myName);
  setHeading(myname);

}

let storedName = localStorage.getItem('name');
if(!storedName){

  setUserName();
}else{

  setHeading(storedName);
}

let myButton = document.querySelector('button');
myButton.onclick = setUserName;

*/
/*

function setHeading(name) {
  let myHeading = document.querySelector('h1');
  myHeading.textContent = 'Mozilla 酷毙了，' + name + '！';
}

function setUserName() {
  let myName = prompt('请输入你的名字');
  localStorage.setItem('name', myName);
  setHeading(myName);
} 

let storedName = localStorage.getItem('name');
if(!storedName) {
   setUserName();
} else {
   setHeading(storedName);
}

let myButton = document.querySelector('button'); 
myButton.onclick = setUserName;

*/
//对象的拷贝
/*
let extend = function (to,from){
  for(let property in from){
    to[property] = from[property];

  }
  return to;
}
 extend({},{
   a:1
 })

let extend = function (to,from){
  for(let property in from){
    if(!from.hasOwnProperty(property)) continue;
    Object.defineProperty(
      to,
      property,
      Object.getOwnPropertyDescriptor(from,property)
      
    );
  }
  return to;
}

extend();


let oldArray = {0:'a',
           1:'b',
           length:2};
Array.prototype.join.call(oldArray,'-')

['Hello'].concat(['World'])
let newArray = oldArray.concat();


let a = ['a','b','c'];
alert(a.slice(0));
a.slice();

Array.prototype.slice.call({ 0: 'a', 1: 'b', length: 2 });
a.splice(1,0,2)

[10111,1101,111].sort(function (a,b){
  return a - b;
})

let numbers = [1,2,3];

numbers.map(function (n){
  return n + 1; 
});
//some方法是只要一个成员的返回值是true，则整个some方法的返回值就是true，否则返回false。
//reduce方法和reduceRight方法依次处理数组的每个成员，最终累计为一个值。它们的差别是，reduce是从左到右处理（从第一个成员到最后一个成员），reduceRight则是从右到左（从最后一个成员到第一个成员），其他完全一样。
//找出字符长度较长的成员
function findLongest(entries) {
  return entries.reduece(function (longest,entry){
    return entry.length > longest.length ? entry :longest;
  })
}

String.prototype.double = function (){

  return this.valueOf() + this.valueOf();
}

Boolean(1) // true
Boolean('false') // true
Boolean([]) // true
Boolean({}) // true
Boolean(function () {}) // true
Boolean(/foo/) // true

(10).toString(8);
(10).toFixed(2);//一个数转为指定位数的小数，然后返回这个小数对应的字符串。
(10).toExponential();//科学计数法
//参数是小数点后有效数字的位数，范围为0到20，超出这个范围，会抛出一个 RangeError 错误。
(12.34).toPrecision(1) //"1e+1"
//toPrecision方法用于将一个数转为指定位数的有效数字。
//!四舍五入时不可靠

Number.prototype.add = function (x){
    return this + x;
}
//在Number对象的原型上部署了iterate方法，将一个数值自动遍历为一个数组。
Number.prototype.iterate = function (){

  let result = [];
  for (let i = 0; i <= this; i++) {
    result.push(i);

  }
  return result;
};

(9).iterate();

let s = new String('abc');
let t = 'def'
s.charAt(1);
s.charAt(s.length - 1);
s.charCodeAt(1);
s.concat(t)
console.log(s);
console.log('Hello JS')
' Hello JavaScript  '.trim();
Math.abs(-787);
Math.floor(3.2)//3
Math.ceil(3.2)//4

function ToInteger(x) {
  x = Number(X);
  return x < 0 ? Math.ceil(x) : Math.floor(x)
}

Math.round(-1.5) //-1

let radius = 20;
let area = Math.PI * Math.pow(radius, 2);

Math.sqrt(4) // 2

Math.log(8)/Math.LN10//
Math.exp(2);



new Date(1378218728000);//以国际标准时间（UTC）1970年1月1日00:00:00作为时间的零点
*/
console.log(Date());
function leftDays() {
  let today = new Date()
  let endYear = new Date(today.getFullYear(),11,31,23,59,59,999)
  let msPerDay = 24 * 60 * 60 * 1000;
 
  return Math.round((endYear.getTime() - today.getTime()) / msPerDay);
}

//regular expression
let regex = /xyz./;//xiaolvgao
let regex = new RegExp('xyz');

String.prototype.search()
//str.replace(search,replacement);
'aaa'.replace('/a/g','b')

let str = '       #id div.class  ';
str.replace(/^\s+|\s+$/g,'')

//点字符（.）匹配除回车（\r）、换行(\n) 、行分隔符（\u2028）和段分隔符（\u2029）以外的所有字符。
//^ 表示字符串的开始位置
//$ 表示字符串的结束位置
//| or



/*
\cX 表示Ctrl-[X]，其中的X是A-Z之中任一个英文字母，用来匹配控制字符。
[\b] 匹配退格键(U+0008)，不要与\b混淆。
\n 匹配换行键。
\r 匹配回车键。
\t 匹配制表符 tab（U+0009）。
\v 匹配垂直制表符（U+000B）。
\f 匹配换页符（U+000C）。
\0 匹配null字符（U+0000）。
\xhh 匹配一个以两位十六进制数（\x00-\xFF）表示的字符。
\uhhhh 匹配一个以四位十六进制数（\u0000-\uFFFF）表示的 Unicode 字
[xyz] 表示x、y、z之中任选一个匹配。
[^xyz]表示除了x、y、z之外都可以匹配。
[^]，就表示匹配一切字符，其中包括换行符
[abc]可以写成[a-c]，[0123456789]可以写成[0-9]，同理[A-Z]表示26个大写字母。
[1-31]，不代表1到31，只代表1到3。
{n,m}表示重复不少于n次，不多于m次。
? 问号表示某个模式出现0次或1次，等同于{0, 1}。
* 星号表示某个模式出现0次或多次，等同于{0,}。
+ 加号表示某个模式出现1次或多次，等同于{1,}
/a+?/，这时就改为非贪婪模式
x(?=y)称为先行断言（Positive look-ahead），x只有在y前面才匹配，y不会被计入返回结果。
x(?!y)称为先行否定断言（Negative look-ahead）
/(.)b(.)\1b\2/\1表示第一个括号匹配的内容（即a）


JSON.stringify('abc')
JSON.stringify('foo') === "\"foo\"" 
//正则对象会被转成空对象。
JSON.stringify(/foo/) // "{}"

let obj = {};
Object.defineProperties(obj, {
  'foo': {
    value: 1,
    enumerable: true
  },
  'bar': {
    value: 2,
    enumerable: false
  }
});

JSON.stringify(obj); // "{"foo":1}"

function f(key, value) {
  if (typeof value === "number") {
    value = 2 * value;
  }
  return value;
}

JSON.stringify({ a: 1, b: 2 }, f)

let user = {
  firstName:'san',
  lastName:'zhang',

  get fullName(){
    return this.lastName + this.firstName;
  },

  toJSON: function(){
    return{
      name:this.lastName + this.firstName
    };
  }
};

try{
  JSON.parse("'String'");
}catch(e) {
  console.log('parsing error');
}

let Vehicle = function(){
  'use strict';
  this.price = 1000;
}
//函数体内部使用了this关键字，代表了所要生成的对象实例。
//生成对象的时候，必须使用new命令。
let v = new Vehicle();
v.price//1000

//test git

let A = {
  name: '张三';
  describe: function(){
    return 'name' + this.name
  }
};

let B = {
  name: '李四'
};

B.describe = A.describe;
B.describe();

this === window
function f(){
  console.log(this === window);
}

f()

let obj ={
  foo: function() {
    console.log(this);
  }
}

obj.foo()//obj
(obj.foo = obj.foo)()//window
(false || obj.foo)()//window

let f = function() {
  console.log(this.x);
}
let x = 1;
let obj = {
  f:f,
  x:2,
};

f() //1
obj.f() //2

var o = {
  v: 'hello',
  p: [ 'a1', 'a2' ],
  f: function f() {
    this.p.forEach(function (item) {
      console.log(this.v + ' ' + item);
    }, this);//将this当作foreach方法的第二个参数，固定它的运行环境。
  }
}


let obj = {};
let f = function() {
  return this;
};

f() === window //true
f.call(obj) === obj //true

let obj = {}

let a = [10,2,4,15,9];
Math.max.apply(null,a)

Array.apply(null,['a',,'b'])

//数组中的forEach会跳过空元素，但不会跳过undefined

Array.apply(null,a).forEach(print);
Array.prototype.slice.apply({0:1,length:1})


let o = new Object();
o.f = function (){
  console.log(this === o);
}

let f = function(){
  o.f.apply(o);
}

let counter = {
  count: 0,
  inc: function(){
    this.count++;
  }

}

Element.addEventListener('click',o.m.bind(o));

let listener = o.m.bind(o);
*/

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
