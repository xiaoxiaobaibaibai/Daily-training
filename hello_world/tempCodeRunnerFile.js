console.log(Date());
function leftDays() {
  let today = new Date()
  let endYear = new Date(today.getFullYear(),11,31,23,59,59,999)
  let msPerDay = 24 * 60 * 60 * 1000;
 
  return Math.round((endYear.getTime() - today.getTime()) / msPerDay);

}
let ss = function leftDays()

console.log(ss);