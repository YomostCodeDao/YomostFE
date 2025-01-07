// Bài 1: Viết chương trình để hiển thị ngày và giờ

let d = new Date();
let ngay = d.getDate();
let thang = d.getMonth() + 1;
let nam = d.getFullYear();
let gio = d.getHours();
let phut = d.getMinutes();
let giay = d.getSeconds();

let timeDay = "Hom nay la: " + ngay + '/' + thang + '/' + nam + " Bay gio la: " + gio + ':' + phut + ':' + giay;
console.log(timeDay)


// Done