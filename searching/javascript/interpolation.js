/*
*Time Complexity:- O (log log n)     Best case     (If elements are uniformly distributed).
*             O(n)              Worst case
*interpolation search may go to different locations according the value of key being searched
*/


function interpolation(arr,n,x){
    // Find indexes of two corners
    var lo = 0, hi = (n - 1);
 
    // Since array is sorted, an element present
    // in array must be in range defined by corner
    while (lo <= hi && x >= arr[lo] && x <= arr[hi]){
        // Probing the position with keeping
        // uniform distribution in mind.
        var pos = lo + (((hi-lo) /
              (arr[hi]-arr[lo]))*(x - arr[lo]));
 
        // Condition of target found
        if (arr[pos] == x){
            return "find at index "+pos;
        }   
 
        // If x is larger, x is in upper part
        if (arr[pos] < x){
            lo = pos + 1;
        }
        // If x is smaller, x is in lower part
        else{
            hi = pos - 1;
        }
    }
    return "element does not exists";
}