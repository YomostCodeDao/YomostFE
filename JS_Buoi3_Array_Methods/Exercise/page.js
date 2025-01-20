// ===============================================
console.log('=====Bài 1=====')
var a = ['a', 'b', 'c']
var b = [1, 2, 3]
var merge = b.concat(a)  //Phương thức concat() dùng để nối 2 hay nhiều mảng
console.log(merge) //[1, 2, 3, 'a', 'b', 'c']


// ===============================================
console.log('=====Bài 2=====')
var data2_1 = [1, 2, 3, 4, 5]      //Trả về false
var data2_2 = [2, 4, 6]          //Trả về true

function checkEvenNumber(num) {
    return num % 2 === 0
}

const check1_1 = data2_1.every(checkEvenNumber)
console.log(data2_1, check1_1)   //Trả về No                             
const check2_1 = data2_2.every(checkEvenNumber)
console.log(data2_2, check2_1)   //Trả về Yes                          


// ===============================================
console.log('=====Bài 3=====')
var data3_1 = [1, 2, 3, 4, 5]
var data3_2 = [1, 1, 3, 1, 5]

const check1_2 = data3_1.some(checkEvenNumber) // Hàm checkEvenNumber được sử dụng lại ở trên
console.log(data3_1, check1_2)   //Trả về Yes                            
const check2_2 = data3_2.some(checkEvenNumber)
console.log(data3_2, check2_2)   //Trả về No                   


// ===============================================
console.log('=====Bài 4=====')
var data4 = [1, -2, 3, 4, -5]

const check_data4 = data4.filter(num => num > 0)   //Dùng cái ni trong ES6 sẽ gọn hơn
console.log(check_data4) // Kết quả sẽ là: 1,3,4


// ===============================================
console.log('=====Bài 5=====')
var data5 = [-1, -2, 3, 4, 5]
console.log(data5)
const check5_index = data5.findIndex(num => num > 0)
const check5_value = data5.find(num => num > 0)

// Chỗ này có một điều kiện trả về "No result:" ==> Làm sau
const check5 = 'Index: ' + check5_index + ' ; ' + 'Value: ' + check5_value
console.log(check5)


// ===============================================
console.log('=====Bài 6=====')
const data6 = [1, 5, 30, 26]
console.log(data6)
var check6 = data6.forEach(num => {
    if (num % 5 === 0) {
        console.log(num);
    }
});


// ===============================================
console.log('=====Bài 7=====')
const data7_1 = [-1, 2, 3, 4, 2, 6]
const data7_2 = [0, 6]

function bai7(arr) {
    var firstIndex = arr.indexOf(2)
    var lastIndex = arr.lastIndexOf(2)
    if (firstIndex === -1) {
        console.log('No result')
    } else {
        console.log(firstIndex + ' ' + lastIndex)
    }
}
bai7(data7_1) // Kết quả 1 4
bai7(data7_2) // Kết quả: No result


// ===============================================
console.log('=====Bài 8=====')
const data8_1 = ["A", "B", "C"]
const data8_2 = [1,2,3]
var check8_1 = data8_1.join(", ")
var check8_2 = data8_2.join(", ")
console.log(`"`+ check8_1 + `"`)
console.log(`"`+ check8_2 + `"`)



// ===============================================
console.log('=====Bài 9=====')
const data9 = [2, -1, -8]
var check9 = data9.map(num => Math.abs(num)) 
console.log(check9)




