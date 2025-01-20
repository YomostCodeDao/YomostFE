// Hàm map2()
Array.prototype.map2 = function (callback) {
    var newArr = this
    for (let i = 0; i < this.length; i++) {
        newArr[i] = callback(newArr[i])
    }
    return newArr
}

// Cách 2 THAM KHẢO YOUTUBE
Array.prototype.map2 = function (callback) {
    var newArr = new Array(this.length)
    for (let i = 0; i < this.length; i++) {
        newArr[i] = callback(this[i])
    }
    return newArr
}

// Kiểm tra kết quả bằng hàm map() gốc
var mapData = data.map(function(data){
    return data
})
console.log(mapData)

// Kiểm tra kết quả bằng hàm map2()
var mapData2 = data.map2(function(data) {
    return data
})
console.log(mapData) 



