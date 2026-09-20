var moveZeroes = function(nums) {
  let nonzero=0;

  for(let i=0;i<nums.length;i++){
    if(nums[i]!==0){
    [nums[nonzero],nums[i]]=[nums[i],nums[nonzero]]
    nonzero++;
  }
}
  return nums;
};