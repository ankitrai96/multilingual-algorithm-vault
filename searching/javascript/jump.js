/*
*Time Complexity:- O(√ n)
*Works only in sorted arrays
*effective than binary search in case element to search is towards the ends.
*optimal size of a block to be jumped is O(√ n)
*/

function jumpSearch(data,value,n){
    // find the block size to jump
    var step = Math.sqrt(n);
 
    // find block where element may present
    var prev = 0;
    while (data[Math.min(step, n)-1] < value){
        prev = step;
        step += Math.sqrt(n);
        if (prev >= n){
            return "element does not exists";
        }
    }
 
    // linear search(other searches may also be applied) for value in block beginning with prev.
    while (data[prev] < value){
        prev++;
 
        // if reached end of array or next block, element is not present.
        if (prev == Math.min(step, n))
            return "element does not exists";
    }
    // If element is found
    if (data[prev] == value){
        return "find at index "+prev;
    }
    
    return "element does not exists";
}