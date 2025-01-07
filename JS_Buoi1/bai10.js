// Bài 10: Nhập 2 số và in ra giá trị là số nguyên tố giữa 2 số đó
function soNT(number) {
    if (number < 2) return false;
    if (number === 2) return true;
    if (number % 2 === 0) return false;
    const sqrt = Math.sqrt(number);
    for (let i = 3; i <= sqrt; i += 2) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function bai10(a, b) {
    let soNho = Math.min(a, b);
    let soLon = Math.max(a, b);
    for (let i = soNho; i < soLon; i++) {
        if (soNT(i)) {
            console.log(i);
        } 
    }
}

bai10(1, 20);
// DONE