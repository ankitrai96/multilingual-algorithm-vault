/*
*Time Complexity:- O(Log n)
*useful for unbounded searches, where size of array is infinite
*works better than Binary Search for bounded arrays for elements closer to the first element
*uses binary search
*/

const binary = require('./binary');

module.exports = {
    exponentialSearch : exponentialSearch
}

function exponentialSearch(data,n,value){
    // If value is at the first place
    if (data[0] == value){
        return "find at index "+0;
    }  
    
    // finding range for searching element
    //for binary_Search
    var i = 1;
    while (i < n && data[i] <= value){
        i = i*2;
    }       
 
    //  executing binary_Search for the resulting range.
    return binary.binarySearch(data, i/2, Math.min(i, n), value);
}