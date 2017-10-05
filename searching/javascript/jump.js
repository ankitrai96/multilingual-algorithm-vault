/*
*Time Complexity:- O(√ n)
*Works only in sorted arrays
*effective than binary search in case element to search is towards the ends.
*optimal size of a block to be jumped is O(√ n)
*/

function jump(arr,x,n){
    // Finding block size to be jumped
    var step = Math.sqrt(n);
 
    // Finding the block where element is
    // present (if it is present)
    var prev = 0;
    while (arr[Math.min(step, n)-1] < x){
        prev = step;
        step += Math.sqrt(n);
        if (prev >= n){
            return "element does not exists";
        }
    }
 
    // Doing a linear search for x in block
    // beginning with prev.
    while (arr[prev] < x){
        prev++;
 
        // If we reached next block or end of
        // array, element is not present.
        if (prev == Math.min(step, n))
            return "element does not exists";
    }
    // If element is found
    if (arr[prev] == x){
        return "find at index "+prev;
    }
    
    return "element does not exists";
}