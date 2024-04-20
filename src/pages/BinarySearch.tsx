

export default function BinarySearch() {
  return (
    <section className="bg-[#DDD3C9]/90 w-auto h-screen overflow-x-hidden px-6 overflow-y-auto">
      <h1 className="text-3xl mt-4 text-gray-800">
        Binary Search :-
      </h1>
      <div className="mt-6 space-y-2">
        <h2 className="text-2xl">Leetcode 33. Search in Rotated Sorted Array</h2>
        <h3 className="text-yellow-600 text-lg">Medium</h3>
        <p className="bg-gray-900/90 hover:bg-gray-900/100 transition-all duration-300 text-white p-4 rounded-xl ">
          There is an integer array nums sorted in ascending order (with distinct values).
          <br />
          Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 &lt;= k &lt; nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
          <br /><br />
          Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
          <br /><br />
          You must write an algorithm with O(log n) runtime complexity.
        </p>
        <h2 className="text-2xl">Solution :</h2>
        <pre className="bg-gray-900/90 hover:bg-gray-900/100 transition-all duration-300 text-white p-4 rounded-xl ">

        <code >
          {`const Pivot=(nums:number[])=>{
    //Pivot point is the lowest point in the array
    let low=0;
    let high=nums.length-1;
    let mid=Math.trunc(low+ (high-low)/2);

    while(low<high){
        if(nums[mid]>nums[high]){
            low=mid+1;
        }
        else{
            high=mid;
        }
        mid=Math.trunc(low+ (high-low)/2);
    }
    return low;
}

const binarySearch=(nums: number[], target: number,low:number,high:number):number=>{
    let mid=Math.trunc(low+ (high-low)/2);
    while(low<=high){
        if(nums[mid]===target){
            return mid;
        }else if(target>nums[mid]){
            low=mid+1;
        }else{
            high=mid-1;
        }
        mid=Math.trunc(low+ (high-low)/2);
    }
    return -1;
}

function search(nums: number[], target: number): number {
    let p= Pivot(nums);
    let ans=-1;
    if(target>=nums[p] && target<=nums[nums.length-1] ){
        ans= binarySearch(nums,target,p,nums.length-1);
    }else{
        ans= binarySearch(nums,target,0,p-1);
    }
    return ans;
};
          `}
        </code>
        </pre>
      </div>
    </section>
  );
}
