function findLongestWord(str) {
  //kongge拆分字符串

  var arr = str.split(" ");
  //初始化
  var maxLength = 0;
  //loop
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > maxLength) {
      maxLength = arr[i].length;
    }
  }
  console.log(maxLength);
}

str1 = "zhengjian shige da shabi";

findLongestWord(str1);
