//回调函数是对象的方法，那么setTimeout使得方法内部的this关键字指向全局环境，而不是定义时所在的那个对象。

var x = 1;
var obj = {
    x:2,
    y:function (){
        console.log(this.x);
    }
};

setTimeout(function (){
    obj.y();
},1000);

setTimeout(obj.y.bind(obj),1000)

setInterval()


var hash = window.location.hash;
var hashWatcher = setInterval(function()  {
    if(window.location.hash != hash) {
        updatePage();
    }
},1000);

var i = 1;
var timer = setTimeout(function f() {
    //...
    timer = setTimeout(f,2000);
},2000);

var id1 = setTimeout(f,1000);
clearTimeout(id1);
//clearInterval;

(function() {
    //every turn
    var gid = setInterval(clearAllTimeouts,0);

    function clearAllTimeouts(){
        var id = setTimeout(function() {},0);
        while (id > 0){
            if (id !== gid){
                clearTimeout(id);
            }
            id--;
        }
    }
})();

//debounce
$('textarea').on('keydown',ajaxAction);
$('textarea').on('keydown',debounce(ajaxAction,2500));

function debounce(fn,delay){
    var timer = null;
    return function() {
        var context = this;
        var args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function (){
            fn.apply(context,args);
        },delay);
    };
}

document.getElementById('input-box').onkeypress = function() {
    var self = this;
    setTimeout(function(){
        self.value = self.value.toUpperCase();
    },0);
}

var div = document.getElementsByTagName('div')[0];
 //first way
 for (var i = 0xA00000; i < 0xFFFFFF; i++){
     div.style.backgroundColor = '#' + i.toString(16);
     if (i++ == 0xFFFFFF) clearTimeout(timer);

 }

 //second way
 var timer;
 var i = 0x100000;
 function func() {
     timer = setTimeout(func,0);
     div.style.backgroundColor = '#' + i.toString(16);
     if (i++ == 0xFFFFFF) clearTimeout(timer);

 }

 timer = setTimeout(func,0);

 Promise
 //pending  fulfilled  rejected  (resolved)
 //如果某些事件不断地反复发生，一般来说，使用 Stream 模式是比部署Promise更好的选择。

 const promise = new Promise(function(resolve,reject){

    //..
    if(/*done*/){
        resolve(value);
    }else {
        reject(error);
    }
 });

 promise.then(function(value){

    //success
 },function(error) {
     //failure
 });


 const getJSON = function(url) {
    const promise = new Promise(function(resolve, reject){
      const handler = function() {
        if (this.readyState !== 4) {
          return;
        }
        if (this.status === 200) {
          resolve(this.response);
        } else {
          reject(new Error(this.statusText));
        }
      };
      const client = new XMLHttpRequest();
      client.open("GET", url);
      client.onreadystatechange = handler;
      client.responseType = "json";
      client.setRequestHeader("Accept", "application/json");
      client.send();
  
    });
  
    return promise;
  };
  
  getJSON("/posts.json").then(function(json) {
    console.log('Contents: ' + json);
  }, function(error) {
    console.error('出错了', error);
  });

  //调用resolve或reject并不会终结 Promise 的参数函数的执行。

  getJSON("/post/1.json").then(
    post => getJSON(post.commentURL)
  ).then(
    comments => console.log("resolved: ", comments),
    err => console.log("rejected: ", err)
  );

  const promise = new Promise(function(resolve,reject){
      throw new Error('test');
  });
  promise.catch(function(error))

  promise
    .then(function(data){
        //success
    })
    .catch(function(err){
        //error
    });

    promise
.then(result => {···})
.catch(error => {···})
.finally(() => {server.stop});

Promise.all
const p = Promise.all([p1,p2,p3]);

Promise.resolve()

const preLoadImage = function(path){


    return new Promise(function (resolve,reject){
        const image = new Image();
        image.onload = resolve;
        image.onerror = reject;
        image.src = path;

    });
};

Promise.resolve().then(f)
