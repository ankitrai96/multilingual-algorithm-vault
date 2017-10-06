/*
*Time Complexity:- O (log log n)     Best case     (If elements are uniformly distributed).
*             O(n)              Worst case
*interpolation search may go to different locations according the value of key being searched
*/

module.exports = {
    interpolationSearch : interpolationSearch
}

function interpolationSearch(data,n,value){
    // Find both ends index
    var lo = 0, hi = (n - 1);
 
    // as array is sorted if value exists in the arraythan it is between the ends
    while (lo <= hi && value >= data[lo] && value <= data[hi]){
        // assuming the position acc to uniform distribution.
        var pos = lo + (((hi - lo) / (data[hi] - data[lo])) * (value - data[lo]));
 
        // value found
        if (data[pos] == value){
            return "find at index "+pos;
        }   
 
        // If pos is smaller, value is in upper part
        if (data[pos] < value){
            lo = pos + 1;
        }
        // If pos is larger, value is in lower part
        else{
            hi = pos - 1;
        }
    }
    return "element does not exists";
}