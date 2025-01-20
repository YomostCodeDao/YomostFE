//Hàm forEach2()
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

