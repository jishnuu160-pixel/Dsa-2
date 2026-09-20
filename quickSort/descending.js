function quickSort(arr,start,end){
  if(start>=end){
    return;
  }

  let i=start-1;
  let pivot=arr[end];

  for(let j=start;j<end;j++){
    if(arr[j]>pivot){
        i++;

        let temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
    }
  }

  let temp=arr[i+1];
  arr[i+1]=arr[end];
  arr[end]=temp;

  let pivotIndex=i+1;

  quickSort(arr,pivotIndex+1,end);
  quickSort(arr,start,pivotIndex-1);
  
  return arr;
}

let arr=[4,1,3,7,2,9];

console.log(quickSort(arr,0,arr.length-1));