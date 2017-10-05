/*
*Time Complexity:- O(Log n)
*useful for unbounded searches, where size of array is infinite
*works better than Binary Search for bounded arrays for elements closer to the first element
*uses binary search
*/

function exponential(arr,n,x){
    // If x is present at firt location itself
    if (arr[0] == x){
        return "find at index "+0;
    }  
 
    // Find range for binary search by
    // repeated doubling
    var i = 1;
    while (i < n && arr[i] <= x){
        i = i*2;
    }       
 
    //  Call binary search for the found range.
    return binary(arr, i/2, Math.min(i, n), x);
}