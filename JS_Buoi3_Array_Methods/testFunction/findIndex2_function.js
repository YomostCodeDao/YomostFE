// Hàm findIndex2()
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