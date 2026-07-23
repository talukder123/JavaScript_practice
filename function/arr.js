
function arrDouble(arr) {
    for (let i=0; i< arr.length; i++) {
        arr[i] *= 2;
    }

    return arr;
}

let arr = [10, 20, 30, 40, 50];

let new_arr = arrDouble(arr);
console.log(new_arr);