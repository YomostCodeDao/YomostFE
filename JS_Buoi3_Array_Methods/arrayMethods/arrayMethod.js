// Viết lai các hàm: map(), forEach(), find(), findIndex(), reduce(), filter()

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
var mapData = data.map(function(data){
    return data
})
console.log(mapData)
// Kiểm tra kết quả bằng hàm map2()
var mapData2 = data.map2(function(data) {
    return data
})
console.log(mapData) 




console.log('======HÀM forEach2()======')
Array.prototype.forEach2 = function(callback){
    for(var index in this){
        if(this.hasOwnProperty(index)){
            callback(this[index], index, this)
        }
    }
}
// Kiểm tra kết quả bằng hàm forEach() gốc
data.forEach(function(data, index, array){
    console.log(data,index,array)
})
// Kiểm tra kết quả bằng hàm forEach2()
data.forEach2(function(data,index,array){
    console.log(data,index,array)
})




console.log('======HÀM find2()======')
Array.prototype.find2 = function(callback){
    for(var i = 0; i < this.length; ++i){
        var result = callback(this[i], i, this) //Trả về element, index và array gốc
        if (result) {
            return this[i]
        }
    }
}
// Kiểm tra kết quả bằng hàm find() gốc
var newData = data.find(function(data){
    return data.name === 'Tra Sua'
})
console.log(newData)
// Kiểm tra hàm find2()
var newData2 = data.find2(function(data){
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
var result = data.findIndex(function(data){
    return data.price === 35000;
})
console.log('Chi so index la: ',result)
// Kiểm tra kết quả bằng hàm findIndex2() mới
var result2 = data.findIndex2(function (data) {
    return data.price === 35000;
});
console.log('Chi so index la: ',result2)




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