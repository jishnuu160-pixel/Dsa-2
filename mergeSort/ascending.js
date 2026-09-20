function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let mid=Math.floor(arr.length/2);

    let left= [];
    let right= [];

    for (let i=0;i<mid;i++) {
        left[i]=arr[i];
    }

    for (let i=mid;i<arr.length;i++) {
        right[i-mid]=arr[i];
    }

    left = mergeSort(left);
    right = mergeSort(right);

    return merge(left, right);
}


function merge(left, right) {
    let result = [];

    let i = 0;
    let j = 0;
    let k = 0;

    while (i<left.length && j<right.length) {

        if (left[i]<=right[j]) {
            result[k]=left[i];
            i++;
        } 
        else {
            result[k]=right[j];
            j++;
        }
        k++;
    }

    while(i<left.length) {
        result[k]=left[i];
        i++;
        k++;
    }

    while(j<right.length) {
        result[k] = right[j];
        j++;
        k++;
    }
    return result;
}


let arr = [4, 2, 6, 3, 7, 1];

let sorted=mergeSort(arr);

console.log(sorted);