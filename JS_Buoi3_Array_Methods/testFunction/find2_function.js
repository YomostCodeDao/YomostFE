// Hàm find2()
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
console.log(newData2)

// Kiểm tra hàm find2()
var newData2 = data.find2(function(data){
    return data.name === 'Tra Sua'
})
console.log(newData)



