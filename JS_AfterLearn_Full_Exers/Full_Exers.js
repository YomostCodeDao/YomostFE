//Bài 1. Viết chương trình để hiện thị ngày giờ
let d1 = new Date();
let ngay = d1.getDate();
let thang = d1.getMonth() + 1;
let nam = d1.getFullYear();
let gio = d1.getHours();
let phut = d1.getMinutes();
let giay = d1.getSeconds();

let timeDay = "Hom nay la: " + ngay + '/' + thang + '/' + nam + " Bay gio la: " + gio + ':' + phut + ':' + giay;
console.log(timeDay)

//Bài 2: In ra ngày tháng năm theo các định dạng: mm-dd-yyyy ; mm-/dd/yyyy ; dd-mm-yyyy ; dd/mm/yy
let d2 = new Date()
let mm = d2.getMonth() + 1
let dd = d2.getDate()
let yy = d2.getFullYear()

console.log(mm + '-' + dd + '-' + yy) //  mm-dd-yyyy
console.log(mm + '/' + dd + '/' + yy) //  mm-/dd/yyyy
console.log(dd + '-' + mm + '-' + yy) //  dd-mm-yyyy
console.log(dd + '/' + mm + '/' + yy) //  dd/mm/yy

//Bài 3: Kiểm tra xem một số nguyên đã cho có chuỗi chữ số tăng hay không
//Ví dụ : 12345 : Tăng(true) 24563: Giảm(false)
const chuoi = '45678'

function tangDan(chuoi) {
    for (let i = 1; i < chuoi.length; i++) {
        const check = chuoi[i] > chuoi[i - 1]
        if (!check) {
            console.log(false)
            return
        }
    }
    console.log(true)
}
tangDan(chuoi)
tangDan('135798642')
tangDan('24563')

//Bài 4: Thay thế mọi ký tự trong một chuỗi đã cho vói ký tự theo sau nó trong bảng chữ cái
function cau4(string) {
    let allChar = string.split("");

}

//Bài 5: Viết chương trình để tạo chuỗi bằng cách sử dụng ba ký tự ở giữa của một chuỗi có độ dài lẻ. Độ dài chuỗi phải lớn hơn hoặc bằng 3
function get3Char(string) {
    if (string.length % 2 === 0) {
        console.log("Khong phai la chuoi le")
        return
    }

    const middlePart = (string.length - 1) / 2
    const result = string[middlePart - 1] + string[middlePart] + string[middlePart + 1]
    console.log(result)
}

get3Char('abcde')
get3Char('win')

// Bài 6: Viết chương trình hiển thị số xuất hiện nhiều nhất trong mảng

function xuatHienNhieu(arr) {
    arr.sort()
    let max = [0, 0];

    let dem = 1
    for (i = arr.length - 1; i > 0; --i) {
        if (arr[i] == arr[i - 1]) ++dem;
        else {
            if (max[1] < dem) {
                max[0] = arr[i];
                max[1] = dem;
            }
            dem = 1;
        }
    }
    console.log(max[0] + ':' + max[1] + 'lan')

}
let arr = [1, 2, 2, 3, 4, 2]
xuatHienNhieu(arr)

//DONE

// Bài 7: Kiểm tra xem chuỗi chứa "java" không
const str = 'My love language is Java';
const substr = 'java';
console.log(str.toLowerCase().includes(substr));

// Done

// Bài 8: Viết một hàm để lấy tên tháng từ một số cụ thể (ví dụ: 1 - Tháng một)

const month = ['Một', 'Hai', 'Ba', 'Bốn', 'Năm', 'Sáu', 'Bảy', 'Tám', 'Chín', 'Mười', 'Mười Một', 'Mười Hai']

for (let i = 0; i <= month.length; i++) {
    const string = '3'
    if (string == i) {
        console.log(string + ' Tháng ' + month[i - 1])
    }
}

//DOne nhưng chưa tối ưu lắm

//Bài 9: Nhập một chuỗi và tìm từ dài nhất trong chuỗi
function chuDaiNhat(string) {
    const arr = string.split(' ')
    let result = arr[0]

    for (i = 1; i < arr.length; i++) {
        const charAtIndex = arr[i]
        if (charAtIndex.length > result.length) {
            result = arr[i]
        }
    }

    console.log(result)

}


chuDaiNhat('jkadhkjfdshk kfadshfkjahsdkjhfkjsdahf hkjdhfjdh hdjfhdjfhdj')

// Bài 10: Nhập 2 số và in ra giá trị là số nguyên tố giữa 2 số đó
function soNT(number) {
    if (number < 2) return false;
    if (number === 2) return true;
    if (number % 2 === 0) return false;
    const sqrt = Math.sqrt(number);
    for (let i = 3; i <= sqrt; i += 2) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function bai10(a, b) {
    let soNho = Math.min(a, b);
    let soLon = Math.max(a, b);
    for (let i = soNho; i < soLon; i++) {
        if (soNT(i)) {
            console.log(i);
        }
    }
}

bai10(1, 20);

// Bài 1: 
console.log('--Bài 1--')
const user = {}         //Yêu cầu 1: Tạo đối tượng user trống
user.name = 'David'     //Yêu cầu 2: Thêm thuộc tính với giá trị David
console.log(user)           //In ra đối tượng user để kiểm tra lại đó 
user.surname = 'Xuan'   //Yêu cầu 3: Thêm thuộc tính với giá trị Xuan
console.log(user)           //Kiểm tra lại lần nữa đối tượng user có thuộc tính surname 
user.name = 'Cafedev'   //Yêu cầu 4: Thay đổi giá trị của name thành Cafedev
console.log(user)           //Kiểm tra lại lần nữa đối tượng user
delete user.name        //Yêu cầu 5: Xóa thuộc tính name khỏi đối tượng
console.log(user)           //Kiểm tra lại đối tượng user

//Bài 2:
console.log('--Bài 2--')
function isEmpty(obj) {
    for (let i in obj) {
        return false;
    }
    return true;
}
let schedule = {};
console.log(isEmpty(schedule));
schedule["8:30"] = "get up";
console.log(isEmpty(schedule));


//Bài 3:
console.log('--Bài 3--')
const obj3 = {
    John: 100,
    Ann: 160,
    Pete: 130,
    Win: 240
}
const save = Object.values(obj3)   //Tạo một mảng dùng để lưu những value của Object
let sum = 0
for (let i = 0; i < save.length; i++) {
    console.log(save[i])
    sum += save[i]
}    // save = [100,160,130,240]; sum = 630

console.log('Tổng bằng:', sum)

//Bài 4:
console.log('--Bài 4--')
let menu = {
    width: 400,
    height: 500,
    top: 50,
    title: 'My menu CSS'
}

function nhan2ChiSo(Object) {
    for (let key in Object) {
        if (typeof Object[key] == 'number') {
            Object[key] *= 2
        }
    }
}
nhan2ChiSo(menu)
console.log(menu)


//Bài 5: 
console.log('--Bài 5--')
function calculator() {
    this.read = function () {
        this.a = 2              //Tự nhập tay bởi vì em chưa biết phương thức nhập dữ liệu từ bán phím vào cho biến
        this.b = 3              //Tự nhập tay bởi vì em chưa biết phương thức nhập dữ liệu từ bán phím vào cho biến
    }

    this.sum = function () {
        return this.a + this.b
    }

    this.mul = function () {
        return this.a * this.b
    }
}

let cal = new calculator()
cal.read()
console.log(cal.sum())
console.log(cal.mul())


// Viết lai các hàm: map(), forEach(), find(), findIndex(), reduce(), filter()
// Đây là data dùng để test các function
var data = [
    {
        id: 1,
        name: "Duong",
        price: 30000
    },
    {
        id: 2,
        name: "Tra Sua",
        price: 20000
    },
    {
        id: 3,
        name: "Tea",
        price: 25000
    },
    {
        id: 4,
        name: "Coffe",
        price: 23000
    },
    {
        id: 5,
        name: "Bun_Bo",
        price: 35000
    },
];
console.log('======HÀM map2()======')
Array.prototype.map2 = function (callback) {
    var newArr = this
    for (let i = 0; i < this.length; i++) {
        newArr[i] = callback(newArr[i])
    }
    return newArr
}
// Cách 2: THAM KHẢO YOUTUBE
Array.prototype.map2 = function (callback) {
    var newArr = new Array(this.length)
    for (let i = 0; i < this.length; i++) {
        newArr[i] = callback(this[i])
    }
    return newArr
}
// Kiểm tra kết quả bằng hàm map() gốc
var mapData = data.map(function (data) {
    return data
})
console.log(mapData)
// Kiểm tra kết quả bằng hàm map2()
var mapData2 = data.map2(function (data) {
    return data
})
console.log(mapData)




console.log('======HÀM forEach2()======')
Array.prototype.forEach2 = function (callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            callback(this[index], index, this)
        }
    }
}
// Kiểm tra kết quả bằng hàm forEach() gốc
data.forEach(function (data, index, array) {
    console.log(data, index, array)
})
// Kiểm tra kết quả bằng hàm forEach2()
data.forEach2(function (data, index, array) {
    console.log(data, index, array)
})




console.log('======HÀM find2()======')
Array.prototype.find2 = function (callback) {
    for (var i = 0; i < this.length; ++i) {
        var result = callback(this[i], i, this) //Trả về element, index và array gốc
        if (result) {
            return this[i]
        }
    }
}
// Kiểm tra kết quả bằng hàm find() gốc
var newData = data.find(function (data) {
    return data.name === 'Tra Sua'
})
console.log(newData)
// Kiểm tra hàm find2()
var newData2 = data.find2(function (data) {
    return data.name === 'Tra Sua'
})
console.log(newData2)




console.log('======HÀM findIndex2()======')
Array.prototype.findIndex2 = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i)) {
            return i;
        }
    }
    return -1;
}
// Kiểm tra kết quả bằng hàm findIndex() gốc
var result = data.findIndex(function (data) {
    return data.price === 35000;
})
console.log('Chi so index la: ', result)
// Kiểm tra kết quả bằng hàm findIndex2() mới
var result2 = data.findIndex2(function (data) {
    return data.price === 35000;
});
console.log('Chi so index la: ', result2)




console.log('======HÀM filter2()======')
Array.prototype.filter2 = function (callback) {
    var output = [];
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var value2 = callback(this[index], index, this)
            if (value2) {
                output.push(this[index])
            }
        }
    }
    return output
}
// Khai bảo một mảng trống output[], khi không có phần tử thỏa mãn thì filter2() 
// sẽ trả mảng trống, còn result mà đúng thì output.push và push phần tử hiện tại vào là this[index]

// Kiểm tra kết quả hàm filter()
var filterData = data.filter(function (data) {
    return data.price > 20000
})
console.log(filterData)
// Kiểm tra kết quả hàm filter2()
var filterData2 = data.filter2(function (data) {
    return data.price > 20000
})
console.log(filterData2)  