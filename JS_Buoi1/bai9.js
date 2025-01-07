//Bài 9: Nhập một chuỗi và tìm từ dài nhất trong chuỗi
function chuDaiNhat(string) {
    const arr = string.split(' ')
    let result = arr[0]

    for (i = 1; i < arr.length; i++) {
        const charAtIndex = arr[i]
        if (charAtIndex.length > result.length) {
            result = arr[i]
        }
    }

    console.log(result)

}


chuDaiNhat('jkadhkjfdshk kfadshfkjahsdkjhfkjsdahf hkjdhfjdh hdjfhdjfhdj')

//Done