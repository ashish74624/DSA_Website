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
      {/*  */}
      <div className="mt-6 space-y-2 border-t-2 border-black pt-6">
        <h2 className="text-2xl">Leetcode 153. Find Minimum in Rotated Sorted Array</h2>
        <h3 className="text-yellow-600 text-lg">Medium</h3>
        <p className="bg-gray-900/90 hover:bg-gray-900/100 transition-all duration-300 text-white p-4 rounded-xl ">
          Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:
<br /><br />
[4,5,6,7,0,1,2] if it was rotated 4 times.
<br />
[0,1,2,4,5,6,7] if it was rotated 7 times.
<br />
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
<br />
Given the sorted rotated array nums of unique elements, return the minimum element of this array.
<br />
You must write an algorithm that runs in O(log n) time.

<br /><br /> 

Example 1:
<br />
Input: nums = [3,4,5,1,2] <br />
Output: 1 <br />
Explanation: The original array was [1,2,3,4,5] rotated 3 times.
<br /><br />
Example 2:
<br />
Input: nums = [4,5,6,7,0,1,2] <br />
Output: 0 <br />
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
<br /><br />
Example 3:
<br />
Input: nums = [11,13,15,17] <br />
Output: 11 <br />
Explanation: The original array was [11,13,15,17] and it was rotated 4 times.  <br />
 <br /><br />

Constraints:
<br />
n == nums.length <br />
1 {'<'}= n {'<'}= 5000 <br/>
-5000 {'<'}= nums[i] {'<'}= 5000 <br/>
All the integers of nums are unique. <br/>
nums is sorted and rotated between 1 and n times.
        </p>
        <h2 className="text-2xl">Solution :</h2>
        <pre className="bg-gray-900/90 hover:bg-gray-900/100 transition-all duration-300 text-white p-4 rounded-xl overflow-auto ">

        <code >
          {`function findMin(nums: number[]): number {
    let low=0;
    let high:number=nums.length-1;
    let mid = Math.trunc(low+(high-low)/2);

    while(low<high){
        if(nums[mid]>=nums[high]){
            low=mid+1;
        }else{
            high=mid;
        }
        mid = Math.trunc(low+(high-low)/2);
    }
    return nums[low];
    
};`}
        </code>
        </pre>
      </div>
      {/*  */}
      <div className="mt-6 space-y-2 border-t-2 border-black pt-6">
        <h2 className="text-2xl">Leetcode 154. Find Minimum in Rotated Sorted Array II</h2>
        <h3 className="text-red-600 text-lg">Hard</h3>
        <p className="bg-gray-900/90 hover:bg-gray-900/100 transition-all duration-300 text-white p-4 rounded-xl ">
          Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:
<br /><br />
[4,5,6,7,0,1,2] if it was rotated 4 times.
<br />
[0,1,2,4,5,6,7] if it was rotated 7 times.
<br /> <br />
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
<br /> <br />
Given the sorted rotated array nums that may contain duplicates, return the minimum element of this array.
<br /> <br />
You must write an algorithm that runs in O(log n) time.

<br /><br /> 

Example 1:
<br />
Input: nums = [3,4,5,1,2] <br />
Output: 1 <br />
Explanation: The original array was [1,2,3,4,5] rotated 3 times.
<br /><br />
Example 2:
<br />
Input: nums = [4,5,6,7,0,1,2] <br />
Output: 0 <br />
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
<br /><br />
Example 3:
<br />
Input: nums = [11,13,15,17] <br />
Output: 11 <br />
Explanation: The original array was [11,13,15,17] and it was rotated 4 times.  <br />
 <br /><br />

Constraints:
<br />
n == nums.length <br />
1 {'<'}= n {'<'}= 5000 <br/>
-5000 {'<'}= nums[i] {'<'}= 5000 <br/>
All the integers of nums are unique. <br/>
nums is sorted and rotated between 1 and n times.
<br /><br />
Follow up: This problem is similar to Find Minimum in Rotated Sorted Array, but nums may contain duplicates. Would this affect the runtime complexity? How and why?
        </p>
        <h2 className="text-2xl">Solution :</h2>
        <pre className="bg-gray-900/90 hover:bg-gray-900/100 transition-all duration-300 text-white p-4 rounded-xl overflow-auto ">

        <code >
          {`function findMin(nums: number[]): number {
    let n= nums.length;
    let low=0;
    let high=n-1;
    let mid = Math.trunc(low+(high-low)/2);

    while(low<high){
        if(nums[mid]>nums[high]){
            low=mid+1;
        }else if(nums[mid]<nums[high]){
            high = mid;
        }else{
            if(nums[mid]===nums[high]){
                high--;
            }else{
                high=mid;
            }
        }
        mid = Math.trunc(low+(high-low)/2);
    }
    return nums[low];
};`}
        </code>
        </pre>
      </div>
      {/*  */}
      <div className="mt-6 space-y-2 border-t-2 border-black pt-6">
        <h2 className="text-2xl">Leetcode 162. Find Peak Element</h2>
        <h3 className="text-yellow-600 text-lg">Medium</h3>
        <p className="bg-gray-900/90 hover:bg-gray-900/100 transition-all duration-300 text-white p-4 rounded-xl ">
         A peak element is an element that is strictly greater than its neighbors.
<br/>
Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.
<br/>
You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.
<br/>
You must write an algorithm that runs in O(log n) time.

 <br/><br/>

Example 1:
<br/>
Input: nums = [1,2,3,1] <br/>
Output: 2 <br/>
Explanation: 3 is a peak element and your function should return the index number 2.
<br/><br/>
Example 2:
<br/>
Input: nums = [1,2,1,3,5,6,4] <br/>
Output: 5 <br/>
Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.
 <br/><br/>

Constraints:
<br/>
1 {'<'}= nums.length {'<'}= 1000 <br/>
-231 {'<'}= nums[i] {'<'}= 231 - 1 <br/>
nums[i] != nums[i + 1] for all valid i.
        </p>
        <h2 className="text-2xl">Solution :</h2>
        <pre className="bg-gray-900/90 hover:bg-gray-900/100 transition-all duration-300 text-white p-4 rounded-xl overflow-auto ">

        <code >
          {`function findPeakElement(nums: number[]): number {
    let low=0;
    let high=nums.length-1;
    let mid = Math.trunc(low + (high-low)/2);

    while(low<high){
        if(nums[mid]>nums[mid+1]){
            high=mid;
        }else{
            low=mid+1;
        }
        mid = Math.trunc(low + (high-low)/2);
    }
    return low;
};`}
        </code>
        </pre>
      </div>
      {/* */}
      <div className="mt-6 space-y-2 border-t-2 border-black pt-6">
        <h2 className="text-2xl">Leetcode 367. Valid Perfect Square</h2>
        <h3 className="text-green-600 text-lg">Easy</h3>
        <p className="bg-gray-900/90 hover:bg-gray-900/100 transition-all duration-300 text-white p-4 rounded-xl ">
         Given a positive integer num, return true if num is a perfect square or false otherwise.
<br />
A perfect square is an integer that is the square of an integer. In other words, it is the product of some integer with itself.
<br />
<br />
You must not use any built-in library function, such as sqrt.
<br />
<br />

Example 1:
<br />

Input: num = 16
<br />
Output: true
<br />
Explanation: We return true because 4 * 4 = 16 and 4 is an integer.
<br />
<br />
Example 2:
<br />
Input: num = 14 
<br />
Output: false
<br />
Explanation: We return false because 3.742 * 3.742 = 14 and 3.742 is not an integer.
<br />
<br />

Constraints:
<br />
1 {'<'}= num {'<'}= 231 - 1
        </p>
        <h2 className="text-2xl">Solution :</h2>
        <pre className="bg-gray-900/90 hover:bg-gray-900/100 transition-all duration-300 text-white p-4 rounded-xl overflow-auto ">

        <code >
          {`function isPerfectSquare(num: number): boolean {
    let low=0;
    let high=num;
    let mid= Math.trunc(low+(high-low)/2);
    while(low<=high){
        if(mid*mid===num){
            return true;
        }else if((mid*mid)>num){
            high=mid-1;
        }else{
            low=mid+1;
        }
        mid= Math.trunc(low+(high-low)/2);
    }
    return false;
};`}
        </code>
        </pre>
      </div>
      {/* */}
      <div className="mt-6 space-y-2 border-t-2 border-black pt-6">
        <h2 className="text-2xl">Leetcode 475. Heaters</h2>
        <h3 className="text-yellow-600 text-lg">Medium</h3>
        <p className="bg-gray-900/90 hover:bg-gray-900/100 transition-all duration-300 text-white p-4 rounded-xl ">
        Winter is coming! During the contest, your first job is to design a standard heater with a fixed warm radius to warm all the houses.
<br /><br />
Every house can be warmed, as long as the house is within the heater's warm radius range. 
<br /><br />
Given the positions of houses and heaters on a horizontal line, return the minimum radius standard of heaters so that those heaters could cover all houses.
<br /><br />
Notice that all the heaters follow your radius standard, and the warm radius will the same.

 <br /><br />

Example 1:
<br />
Input: houses = [1,2,3], heaters = [2] <br />
Output: 1 <br />
Explanation: The only heater was placed in the position 2, and if we use the radius 1 standard, then all the houses can be warmed.
<br /><br />
Example 2:
<br />
Input: houses = [1,2,3,4], heaters = [1,4] <br />
Output: 1 <br />
Explanation: The two heaters were placed at positions 1 and 4. We need to use a radius 1 standard, then all the houses can be warmed.
<br /><br />
Example 3:
<br />
Input: houses = [1,5], heaters = [2] <br />
Output: 3
 
<br /><br />
Constraints:
<br />
1 {'<'}= houses.length, heaters.length {'<'}= 3 * 104 <br />
1 {'<'}= houses[i], heaters[i] {'<'}= 109
        </p>
        <h2 className="text-2xl">Solution :</h2>
        <pre className="bg-gray-900/90 hover:bg-gray-900/100 transition-all duration-300 text-white p-4 rounded-xl overflow-auto ">

        <code >
          {`class Solution {
public:
    bool isPossible(int mid,vector<int>& houses, vector<int>& heaters){
        int i=0;
        int j=0;
        while(i<houses.size()){
            if(j<heaters.size()){
                if(abs(houses[i]-heaters[j])<=mid){
                    i++;
                }else{
                    j++;
                }
            }else{
                return false;
            }
        }
        return true;
        // while(i<houses.size() && j<heaters.size()){
        //     if(abs(houses[i]-heaters[j])<=mid){
        //         i++;
        //     }else{
        //         j++;
        //     }
        // }
        // return i==houses.size();
    }
    int findRadius(vector<int>& houses, vector<int>& heaters) {
        int low=0;
        int high=INT_MAX;
        int ans=0;
        vector<int> sortedHeaters=heaters;
        sort(sortedHeaters.begin(),sortedHeaters.end());
        sort(houses.begin(),houses.end());
        while(low<=high){
            int mid = low+(high-low)/2;
            if(isPossible(mid,houses,sortedHeaters)){
                ans=mid;
                high=mid-1;
            }else{
                low=mid+1;
            }
        }
        return ans;
    }
};`}
        </code>
        </pre>
      </div>
      {/*  */}
      <div className="mt-6 space-y-2 border-t-2 border-black pt-6">
        <h2 className="text-2xl">Leetcode 540. Single Element in a Sorted Array</h2>
        <h3 className="text-yellow-600 text-lg">Medium</h3>
        <p className="bg-gray-900/90 hover:bg-gray-900/100 transition-all duration-300 text-white p-4 rounded-xl ">
        You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.
<br/>
Return the single element that appears only once.
<br/>
Your solution must run in O(log n) time and O(1) space.

 <br/><br/>

Example 1:<br/>

Input: nums = [1,1,2,3,3,4,4,8,8]<br/>
Output: 2<br/><br/>
Example 2:<br/>

Input: nums = [3,3,7,7,10,11,11]<br/>
Output: 10<br/><br/>
 

Constraints:<br/>

1 {'<'}= nums.length {'<'}= 105 <br/>
0 {'<'}= nums[i] {'<'}= 105 <br/>
        </p>
        <h2 className="text-2xl">Solution :</h2>
        <pre className="bg-gray-900/90 hover:bg-gray-900/100 transition-all duration-300 text-white p-4 rounded-xl overflow-auto ">

        <code >
          {`function nextGreatestLetter(letters: string[], target: string): string {
    let low=0;
    let high = letters.length-1;
    let ans:string;
    while(low<=high){
        let mid = Math.trunc(low+(high-low)/2);
        if(letters[mid]>target){
            ans=letters[mid];
            high = mid-1;
        }else{
            low=mid+1;
        }
    }

    if(ans){
        return ans;
    }
    else{
        return letters[0];
    }
};`}
        </code>
        </pre>
      </div>
      {/* */}
      <div className="mt-6 space-y-2 border-t-2 border-black pt-6">
        <h2 className="text-2xl">Leetcode 744. Find Smallest Letter Greater Than Target</h2>
        <h3 className="text-green-600 text-lg">Easy</h3>
        <p className="bg-gray-900/90 hover:bg-gray-900/100 transition-all duration-300 text-white p-4 rounded-xl ">
        You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.
<br/>
Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.
<br/><br/>
 

Example 1:
<br/>
Input: letters = ["c","f","j"], target = "a" <br/>
Output: "c"<br/>
Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.
<br/><br/>
Example 2:<br/>

Input: letters = ["c","f","j"], target = "c"<br/>
Output: "f"<br/>
Explanation: The smallest character that is lexicographically greater than 'c' in letters is 'f'.<br/><br/>
Example 3:<br/>

Input: letters = ["x","x","y","y"], target = "z"<br/>
Output: "x"<br/>
Explanation: There are no characters in letters that is lexicographically greater than 'z' so we return letters[0].<br/>
 
<br/><br/>
Constraints:<br/>

2 {'<'}= letters.length {'<'}= 104<br/>
letters[i] is a lowercase English letter.<br/>
letters is sorted in non-decreasing order.<br/>
letters contains at least two different characters.<br/>
target is a lowercase English letter.<br/>
        </p>
        <h2 className="text-2xl">Solution :</h2>
        <pre className="bg-gray-900/90 hover:bg-gray-900/100 transition-all duration-300 text-white p-4 rounded-xl overflow-auto ">

        <code >
          {`/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let left = 0;
    let right = nums.length;
    
    while (left < right) {
        let mid = (left + right) >>> 1;
        if (mid % 2 !== 0) mid--;

        const value = nums[mid];
        
        if (value !== nums[mid + 1] && 
            value !== nums[mid - 1]) {
            return value;
        }
        
        if (value === nums[mid - 1]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
};`}
        </code>
        </pre>
      </div>
      {/* */}
      <div className="mt-6 space-y-2 border-t-2 border-black pt-6">
        <h2 className="text-2xl">Leetcode 704. Binary Search</h2>
        <h3 className="text-green-600 text-lg">Easy</h3>
        <p className="bg-gray-900/90 hover:bg-gray-900/100 transition-all duration-300 text-white p-4 rounded-xl ">
       Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
<br />
You must write an algorithm with O(log n) runtime complexity.

<br />
<br />
 

Example 1:
<br />

Input: nums = [-1,0,3,5,9,12], target = 9
<br />

Output: 4
<br />

Explanation: 9 exists in nums and its index is 4
<br />
<br />

Example 2:
<br />

Input: nums = [-1,0,3,5,9,12], target = 2
<br />

Output: -1
<br />

Explanation: 2 does not exist in nums so return -1
<br />
<br />
 

Constraints:
<br />

1 {'<'}= nums.length {'<'}= 104
<br />
<br />

-104 {'<'} nums[i], target {'<'} 104
<br />

All the integers in nums are unique.
<br />

nums is sorted in ascending order.
<br />

        </p>
        <h2 className="text-2xl">Solution :</h2>
        <pre className="bg-gray-900/90 hover:bg-gray-900/100 transition-all duration-300 text-white p-4 rounded-xl overflow-auto ">

        <code >
          {`/**
function search(nums: number[], target: number): number {
  let low=0;
  let high = nums.length-1;
  while(low<=high){
      let mid = Math.trunc(low+(high-low)/2);
      if(nums[mid]===target){
          return mid;
      }else if(nums[mid]>target){
          high=mid-1;
      }else{
          low=mid+1;
      }
  }  
  return -1;
};`}
        </code>
        </pre>
      </div>
    </div>
    </section>
  );
}
