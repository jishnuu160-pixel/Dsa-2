function selectionSort(arr){
  for(let i=0;i<arr.length;i++){
    let key=arr[i];
    let j=i-1;

    while(j>=0 && arr[j]>key){
       arr[j+1]=arr[j];

        j--;
    }

    arr[j+1]=key;
  }
  return arr;
}

console.log(selectionSort([4,1,4,6,5,8,1,9]));