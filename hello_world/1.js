let isPalindrome = function(s) {
  let ds = s.toLowerCase();
  let d1 = [];
  //去除标点符号，空格
  for (let i = 0; i < ds.length; i++) {
    if (
      (ds.charCodeAt(i) >= 48 && ds.charCodeAt(i) <= 57) ||
      (ds.charCodeAt(i) >= 97 && ds.charCodeAt(i) <= 122)
    ) {
      d1.push(ds[i]);
    }
  }

  //将d1深度拷贝给d2
  let d2 = [];
  d2 = d2.concat(d1);
  d2.reverse();

  //比较d1、d2
  for (let i = 0; i < d1.length; i++) {
    if (d1[i] != d2[i]) {
      return false;
    }
    return true;
  }
};

isPalindrome("ba i,");
