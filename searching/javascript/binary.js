/*
*Time Complexity= Theta(log n)
*works only in sorted array
*starts Searching in a sorted array by repeatedly dividing the search interval in half
*/

function binarySearch(data,l,r,value){
    while (l <= r){
        var m = parseInt(l + (r-l)/2);
    
        // Check if value is present at mid
        if (data[m] == value) 
            return "find at index "+m;  
    
        // If value greater, ignore left half  
        if (data[m] < value) 
            l = m + 1; 
    
        // If value is smaller, ignore right half 
        else 
            r = m - 1; 
    }
    
    // if we reach here, then element was not present
    return "element does not exists";   
}
