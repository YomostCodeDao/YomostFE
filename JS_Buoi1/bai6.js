// Bài 6: Viết chương trình hiển thị số xuất hiện nhiều nhất trong mảng

function xuatHienNhieu(arr) {
    arr.sort()
    let max = [0, 0];

    let dem = 1
    for (i = arr.length - 1; i > 0; --i) {
        if (arr[i] == arr[i - 1]) ++dem;
        else {
            if (max[1] < dem) {
                max[0] = arr[i];
                max[1] = dem;
            }
            dem = 1;
        }
    }
    console.log(max[0] + ':' + max[1] + 'lan')

}
let arr = [1,2,2,3,4,2]
xuatHienNhieu(arr)

//DONE 