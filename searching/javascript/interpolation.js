    /*
    *Time Complexity:- O (log log n)     Best case     (If elements are uniformly distributed).
    *             O(n)              Worst case
    *interpolation search may go to different locations according the value of key being searched
    */


    function interpolationSearch(data,n,value){
        // Find indexes of two corners
        var lo = 0, hi = (n - 1);
    
        // Since array is sorted, an element present
        // in array must be in range defined by corner
        while (lo <= hi && value >= data[lo] && value <= data[hi]){
            // Probing the position with keeping
            // uniform distribution in mind.
            var pos = lo + (((hi-lo) /
                (data[hi]-data[lo]))*(value - data[lo]));
    
            // Condition of target found
            if (data[pos] == value){
                return "find at index "+pos;
            }   
    
            // If x is larger, x is in upper part
            if (data[pos] < value){
                lo = pos + 1;
            }
            // If x is smaller, x is in lower part
            else{
                hi = pos - 1;
            }
        }
        return "element does not exists";
    }