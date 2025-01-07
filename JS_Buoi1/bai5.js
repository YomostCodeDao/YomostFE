//Bài 5: Viết chương trình để tạo chuỗi bằng cách sử dụng a ký tự ở giữa của một chuỗi có độ dài lẻ. Độ dài chuỗi phải lớn hơn hoặc bằng 3
function get3Char(string){
    if(string.length % 2 === 0){
        console.log("Khong phai la chuoi le")
        return
    }

    const middlePart = (string.length - 1) / 2
    const result = string[middlePart-1] + string[middlePart] + string[middlePart+1]
    console.log(result)
}

get3Char('abcde')
get3Char('win')

//Done