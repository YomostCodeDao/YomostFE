// Hàm filter2()
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