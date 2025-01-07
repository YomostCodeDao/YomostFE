//Bài 2: In ra ngày tháng năm theo các định dạng: mm-dd-yyyy ; mm-/dd/yyyy ; dd-mm-yyyy ; dd/mm/yy
let d = new Date()
let mm = d.getMonth() + 1
let dd = d.getDate()
let yy = d.getFullYear()

console.log(mm + '-' + dd + '-' + yy) //  mm-dd-yyyy
console.log(mm + '/' + dd + '/' + yy) //  mm-/dd/yyyy
console.log(dd + '-' + mm + '-' + yy) //  dd-mm-yyyy
console.log(dd + '/' + mm + '/' + yy) //  dd/mm/yy

//Done