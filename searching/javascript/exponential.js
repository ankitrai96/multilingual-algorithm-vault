/*
*Time Complexity:- O(Log n)
*useful for unbounded searches, where size of array is infinite
*works better than Binary Search for bounded arrays for elements closer to the first element
*uses binary search
*/

function exponentialSearch(data,n,value){
    // If x is present at firt location itself
    if (data[0] == value){
        return "find at index "+0;
    }  
 
    // Find range for binary search by repeated doubling
    var i = 1;
    while (i < n && data[i] <= value){
        i *= 2;
    }       
 
    //  Calling binary search for the founded range.
    return binary(data, i / 2, Math.min(i, n), value);
}