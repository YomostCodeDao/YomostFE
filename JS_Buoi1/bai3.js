//Bài 3: Kiểm tra xem một số nguyên đã cho có chuỗi chữ số tăng hay không
//Ví dụ : 12345 : Tăng(true) 24563: Giảm(false)
const chuoi = '45678'

function tangDan(chuoi){
    for(i = 1; i < chuoi.length; i++){
        const check = chuoi[i] > chuoi[i-1]
        if(!check){
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