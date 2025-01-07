// Bài 8: Viết một hàm để lấy tên tháng từ một số cụ thể (ví dụ: 1 - Tháng một)

const month = ['Một', 'Hai', 'Ba', 'Bốn', 'Năm', 'Sáu', 'Bảy', 'Tám', 'Chín', 'Mười', 'Mười Một', 'Mười Hai']

for (let i = 0; i <= month.length; i++) {
    const string = '3'
    if (string == i) {
        console.log(string + ' Tháng ' + month[i - 1])
    }
}

//DOne nhưng chưa tối ưu lắm







