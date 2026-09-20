function sortByMarksAscending(arr){
  
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-1-i;j++){
        if(arr[j].marks>arr[j+1].marks){
            let temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
      }
    }
    return arr;
}

let students = [
  { name: "A", marks: 65 },
  { name: "B", marks: 90 },
  { name: "C", marks: 45 },
  { name: "D", marks: 75 }
];



console.log(sortByMarksAscending(students));