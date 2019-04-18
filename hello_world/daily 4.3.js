document.baseURI;
<base href="ttp://www.example.com/page.html"></base>
//设置了以后，baseURI属性就返回<base>标签设置的值。

let d1 = p.ownerDocument;
d === document;
let d2 = document.getElementById('d2')
let d3 = document.getElementById('d3')

d2.nextSibling === d3;

let e1 = document.getElementById('div1').firstChild;

while (e1 !==null){
    console.log(e1.nodeName);
    e1 = e1.nextSibling;

}

let d4 = document.getElementById('d4');
d4.previousElementSibling === d3;

if (node.parentNode) {
    node.parentNode.removeChild(node);
  }

  //文档节点（document）和文档片段节点（documentfragment）的父节点都是null。另外，对于那些生成后还没插入 DOM 树的节点，父节点也是null。
  var p1 = document.getElementById('p1');
p1.firstChild.nodeName

// HTML 代码如下
// <p id="p1">
//   <span>First span</span>
//  </p>
var p1 = document.getElementById('p1');
p1.firstChild.nodeName // "#text" kongge

let children = document.querySelector('ul').childNodes;
let test = document.createElement('p');

let div = document.getElementById('myDiv');
document.body.appendChild(div);
//插入的是一个已经存在的节点myDiv，结果就是该节点会从原来的位置，移动到document.body的尾部。
Node.prototype.hasChildNodes()


function DOMComb(parent,callback) {
    if(parent.hasChildNodes()){
        for (let node = parent.firstChild;node;node = nextSibling){
            DOMComb(node,callback);
        }
    }
    callback(parent);
}
//use
DOMComb(document.body,console.log)