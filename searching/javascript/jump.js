/*
*Time Complexity:- O(√ n)
*Works only in sorted dataays
*effective than binary search in case element to search is towards the ends.
*optimal size of a block to be jumped is O(√ n)
*/

module.exports = {
    jumpSearch : jumpSearch
}

function jumpSearch(data,l, n, value){
    // Finding block-size to jump
    var step = Math.sqrt(n);
 
    // Find the block where element may present
    var prev = 0;
    while (data[Math.min(step, n) - 1] < value){
        prev = step;
        step += Math.sqrt(n);
        if (prev >= n){
            return "element does not exists";
        }
    }
 
    // linear search for value in block begins with prev.
    while (data[prev] < value){
        prev++;
 
        // reached the next-block or ending of the array means element is not present.
        if (prev == Math.min(step, n))
            return "element does not exists";
    }
    // If value is found
    if (data[prev] == value){
        return "find at index "+prev;
    }
    
    return "element does not exists";
}