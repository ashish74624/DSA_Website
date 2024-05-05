import Navbar from "../components/Navbar";


export default function BinarySearch() {
  return (
    <section className="overflow-x-hidden overflow-y-hidden w-screen h-screen">
    <Navbar/>
    <div className="bg-[#DDD3C9]/90 w-auto h-screen overflow-x-hidden px-6 overflow-y-auto pb-20">
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
      {/*  */}
      <div className="mt-6 space-y-2 border-t-2 border-black pt-6">
        <h2 className="text-2xl">Leetcode 34. Find First and Last Position of Element in Sorted Array</h2>
        <h3 className="text-yellow-600 text-lg">Medium</h3>
        <p className="bg-gray-900/90 hover:bg-gray-900/100 transition-all duration-300 text-white p-4 rounded-xl ">
          Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
          <br /><br />
          If target is not found in the array, return [-1, -1].
          <br /><br />
          You must write an algorithm with O(log n) runtime complexity.
          <br /><br />
          Example 1:
<br />
          Input: nums = [5,7,7,8,8,10], target = 8
          <br />
          Output: [3,4]
          <br /><br />
          Example 2:
<br />
Input: nums = [5,7,7,8,8,10], target = 6
<br />
Output: [-1,-1]
<br /><br />
Example 3:
<br />
Input: nums = [], target = 0
<br />
Output: [-1,-1]
<br /><br />
          Constraints:
<br />
0 {'<'}= nums.length {'<'}= 105
<br/>
-109 {'<'}= nums[i] {'<'}= 109
<br/>
nums is a non-decreasing array.
<br/>
-109 {'<'}= target {'<'}= 109
        </p>
        <h2 className="text-2xl">Solution :</h2>
        <pre className="bg-gray-900/90 hover:bg-gray-900/100 transition-all duration-300 text-white p-4 rounded-xl overflow-auto ">

        <code >
          {`const binarySearchForFirstOcc=(nums: number[], target: number)=>{
   let low=0;
    let high=nums.length-1;
    let mid = Math.trunc(low + (high-low)/2);
    // console.log(nums.length)
    while(low<high){
        if(nums[mid]===target){
            high=mid;
        }else if(target>nums[mid]){
            low=mid+1;
        }else{
            high=mid-1;
        }
        mid = Math.trunc(low + (high-low)/2);
    } 
    
    if(nums[low]===target){
        return low;
    }else{
        return -1;
    }
}

const findLastOccurrence = (nums:number[],target: number): number => {
        let low = 0;
        let high = nums.length - 1;
        let result = -1;

        while (low <= high) {
            const mid = Math.trunc(low + (high - low) / 2);

            if (nums[mid] === target) {
                result = mid;
                low = mid + 1;
            } else if (target > nums[mid]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return result;
    };


function searchRange(nums: number[], target: number): number[] {
    let ans1:number=-1;
    let ans2:number=-1;
    ans1=binarySearchForFirstOcc(nums,target);
    if(ans1=== -1){
        return [-1,-1]
    }
    ans2= findLastOccurrence(nums,target)
    return [ans1,ans2];

    
}; `}
        </code>
        </pre>
      </div>
      {/*  */}
      <div className="mt-6 space-y-2 border-t-2 border-black pt-6">
        <h2 className="text-2xl">Leetcode 35. Search Insert Position</h2>
        <h3 className="text-green-600 text-lg">Easy</h3>
        <p className="bg-gray-900/90 hover:bg-gray-900/100 transition-all duration-300 text-white p-4 rounded-xl ">
          Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
<br /><br />
You must write an algorithm with O(log n) runtime complexity.

<br /><br />

Example 1:
<br />
Input: nums = [1,3,5,6], target = 5
Output: 2
<br /><br />
Example 2:
<br />
Input: nums = [1,3,5,6], target = 2
<br />
Output: 1
<br /><br />
Example 3:
<br />
Input: nums = [1,3,5,6], target = 7
<br />
Output: 4
<br /><br />

Constraints:
<br />
1 {'<'}= nums.length {'<'}= 104
<br/>
-104 {'<'}= nums[i] {'<'}= 104
<br/>
nums contains distinct values sorted in ascending order.
<br />
-104 {'<'}= target {'<'}= 104
        </p>
        <h2 className="text-2xl">Solution :</h2>
        <pre className="bg-gray-900/90 hover:bg-gray-900/100 transition-all duration-300 text-white p-4 rounded-xl overflow-auto ">

        <code >
          {`function searchInsert(nums: number[], target: number): number {

    let low:number =0;
    let high:number =nums.length-1;
    let mid = Math.trunc(low+(high-low)/2);

    while(low<=high){
        if(nums[mid]===target){
            return mid;
        }else if(target>nums[mid]){
            low=mid+1;
        }else{
            high=mid-1;
        }
        mid = Math.trunc(low+(high-low)/2);
    } 
    for(let i=0;i<nums.length;i++){
        if(target>nums[i] && target<nums[i+1]){
            return i+1;
        }else if(target<nums[0]){
            return 0;
        }else if(target>nums[nums.length-1]){
            return nums.length;
        }
        
    }  
};`}
        </code>
        </pre>
      </div>
      {/*  */}
      <div className="mt-6 space-y-2 border-t-2 border-black pt-6">
        <h2 className="text-2xl">Leetcode 69. Sqrt(x)</h2>
        <h3 className="text-green-600 text-lg">Easy</h3>
        <p className="bg-gray-900/90 hover:bg-gray-900/100 transition-all duration-300 text-white p-4 rounded-xl ">
          Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
<br />
You must not use any built-in exponent function or operator.
<br /><br />
For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 
<br /><br />
Example 1:
<br />
Input: x = 4
<br />
Output: 2
<br />
Explanation: The square root of 4 is 2, so we return 2.
<br /><br />
Example 2:
<br />
Input: x = 8
<br />
Output: 2
<br />
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
<br /><br />
 Constraints:
<br />
0 {'<'}= x {'<'}= 231 - 1
        </p>
        <h2 className="text-2xl">Solution :</h2>
        <pre className="bg-gray-900/90 hover:bg-gray-900/100 transition-all duration-300 text-white p-4 rounded-xl overflow-auto ">

        <code >
          {`const binarySearch=(x:number):number=>{

    let low:number = 0;
    let high=x;
    let mid = Math.trunc(low+ (high-low)/2);
    let ans:number;
    while(low<=high){
        if(mid*mid==x){
            return mid;
        }
        if((mid*mid)>x){
            high=mid-1;
        }else{
            ans=mid;
            low=mid+1;
        }
        mid = Math.trunc(low+ (high-low)/2);
    }
    return ans;
}

function mySqrt(x: number): number {
    //Using Binary search
    return binarySearch(x)
};`}
        </code>
        </pre>
      </div>
      {/*  */}
      <div className="mt-6 space-y-2 border-t-2 border-black pt-6">
        <h2 className="text-2xl">Leetcode 81. Search in Rotated Sorted Array</h2>
        <h3 className="text-yellow-600 text-lg">Medium</h3>
        <p className="bg-gray-900/90 hover:bg-gray-900/100 transition-all duration-300 text-white p-4 rounded-xl ">
          There is an integer array nums sorted in non-decreasing order (not necessarily with distinct values).
<br />
Before being passed to your function, nums is rotated at an unknown pivot index k (0 {'<'}= k {'<'} nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,4,4,5,6,6,7] might be rotated at pivot index 5 and become [4,5,6,6,7,0,1,2,4,4].
<br/>
Given the array nums after the rotation and an integer target, return true if target is in nums, or false if it is not in nums.
 <br/>
You must decrease the overall operation steps as much as possible.

 
<br/> <br />
Example 1:
<br/>
Input: nums = [2,5,6,0,0,1,2], target = 0 <br />
Output: true
<br /><br />
Example 2:
<br />
Input: nums = [2,5,6,0,0,1,2], target = 3 <br />
Output: false
 
<br /><br />
Constraints:
<br />
1 {'<'}= nums.length {'<'}= 5000
<br/>
-104 {'<'}= nums[i] {'<'}= 104
<br/>
nums is guaranteed to be rotated at some pivot.
<br/>
-104 {'<'}= target {'<'}= 104
 
        </p>
        <h2 className="text-2xl">Solution :</h2>
        <pre className="bg-gray-900/90 hover:bg-gray-900/100 transition-all duration-300 text-white p-4 rounded-xl overflow-auto ">

        <code >
          {`const Pivot=(arr: number[])=>{
    let low=0;
    let high:number = arr.length-1;
    let mid:number = Math.trunc(low + (high-low)/2);
    while(low<high){
        if(arr[mid]==arr[high]){
            high=mid-1
        }
        else if(arr[mid]>arr[high]){
            low=mid+1;
        }else if(arr[mid]<arr[high]){
            high=mid;
        }else{
            if(arr[mid]===arr[high])//Duplicate
            {
                high--; 
                //Eliminate the duplicate and reduce the search space 
            }else{
                high=mid;
            }
        }
        mid=Math.trunc(low + (high-low)/2);
    }
    return low;
}

const binarySearch=(arr: number[], target: number,low:number,high:number):boolean=>{
    let mid:number = Math.trunc(low + (high-low)/2);
    while(low<=high){
        if(arr[mid]===target){
            return true;
        }else if(target>arr[mid]){
            low=mid+1;
        }else{
            high=mid-1;
        }
        mid=Math.trunc(low + (high-low)/2);
    }
    return false;
}

function search(nums: number[], target: number): boolean {

    const arr = Array.from(new Set(nums));
    let p =Pivot(arr);
    // let ans=-1;
    if(target ===arr[p]){
        return true;
    }
    if(target>=arr[p] && target<=arr[arr.length-1]){
        return binarySearch(arr,target,p,arr.length-1)
    }else{
        return binarySearch(arr,target,0,p-1);
    }
};`}
        </code>
        </pre>
      </div>
    </div>
    </section>
  );
}
