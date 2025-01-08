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
for(let i = 0; i < save.length;i++){
    console.log(save[i])
    sum += save[i]
}    // save = [100,160,130,240]; sum = 630

console.log('Tổng bằng:',sum)

//Bài 4:
console.log('--Bài 4--')
let menu = {
    width: 400,
    height: 500,
    top: 50,
    title: 'My menu CSS'
} 

function nhan2ChiSo(Object){
    for(let key in Object){
        if(typeof Object[key] == 'number'){
            Object[key]*=2
        }
    }
}
nhan2ChiSo(menu)
console.log(menu)


//Bài 5: 
console.log('--Bài 5--')
function calculator(){
    this.read = function() {
        this.a = 2              //Tự nhập tay bởi vì em chưa biết phương thức nhập dữ liệu từ bán phím vào cho biến
        this.b = 3              //Tự nhập tay bởi vì em chưa biết phương thức nhập dữ liệu từ bán phím vào cho biến
    }

    this.sum = function(){
        return this.a + this.b
    }

    this.mul = function(){
        return this.a * this.b
    }
}

let cal = new calculator()
cal.read()
console.log(cal.sum())
console.log(cal.mul())
