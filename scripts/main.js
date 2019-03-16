/*
console.log("Hi,js")
//var o = new Object();
//o.hasOwnProperty("name");var
var a = 2/3;
console.log(a); 
let obj = {
    key1: 1,
    key2: 2
  };
  
  console.log(Object.keys(obj));*/
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
var obj = { p: 1 };
obj.valueOf().toString() 

//特例
let obj = new Date();
obj.valueOf = function(){
  return 1
};
obj.toString = function(){
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


*/
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


//3.10 留给你的时间不多了呀


let a = 2 ** 3 ** 2;//右结合性 所以2^9

'cat' > 'Cat' //c的Unicode（99）大于C（67）；
'大' > '小'// 22823\23567
//注意与NaN的比较。任何值（包括NaN本身）与NaN比较，返回的都是false
+0 === -0 // true
{} === {} // false
[] === [] // false
(function () {} === function () {}) // false

//两个复合类型（对象、数组、函数）的数据比较时，不是比较它们的值是否相等，而是比较它们是否指向同一个地址。
undefined === undefined // true
null === null // true

let v1;
let v2;
v1 === v2 // true

function toInt32(x){
    return x | 0;
}

//一个小数连续进行两次二进制否运算，能达到取整效果。
0 ^ 3 //3 异或运算
let a = 10;
let b = 99;
a ^= b;
b ^= a;
a ^= b;
//连续对两个数a和b进行三次异或运算，a^=b; b^=a; a^=b;，可以互换它们的值。这意味着，使用“异或运算”可以在不引入临时变量的前提下，互换两个变量的值。
parseInt('42 cats') // 42
Number('42 cats') // NaN

let err = new Error('出错了');
err.message//提示信息
err.name//名称
err.stack//堆栈r
//自定义错误

function UserError(message){

  this.message = message || '默认信息';
  this.name = 'UserError';

}

 throw new UserError('出错啦！');

UserError.prototype = new Error();
UserError.prototype.constructor = UserError;

try {
  
  throw new Error('...');

}catch(e){

console.log(e.name + ":" + e.message);
console.log(e.stack)
}finally {

  console.log('...');
}

try {
   writeFile(Data);
}catch(e) 
{
  handleError(e);
}finally{
  closeFlie();
}
//!大括号要另跟在关键字后面！！！js会自动添加分号

控制台命令行API
$_
*/
/*判断变量是否为对象*/
function isObject(value) {
  return value === Object(value);
}

Object.getOwnPropertyNames(...).length
var obj = {};
obj.toString() // "[object Object]"

let type = function (o){
  let s = Object.prototype.toString.call(o);
  return s.match(/\[object (.*?)\]/)[1].toLowerCase();
  
}