/*
*Time Complexity:- O (log log n)     Best case     (If elements are uniformly distributed).
*             O(n)              Worst case
*interpolation search may go to different locations according the value of key being searched
*/

module.exports = {
    interpolationSearch : interpolationSearch
}

function interpolationSearch(data,lo,n,value){
    // Find both ends index
    hi = (n - 1);
 
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

//standalone

if(typeof require && require.main == module){
    var data=[];
    var value;
    var i=0;
    var n;
    
    console.log("enter number of elements:");
    var stdin = process.openStdin();
    stdin.addListener("data", function(answer) {
        answer = parseInt(answer.toString().trim());
        if(n === undefined){
            n = answer;
            console.log("enter elements:");
        }else if(i < n-1){
            //console.log("i "+i);
            data[i] = answer;
            i++;
        }else if(n-1 == i){
            data[i] = answer;
            i++;
            console.log("enter key value to search:");
        }else{
            value = answer;
            console.log(data);
            console.log(value);
            data.sort();
            result = interpolationSearch(data,0,n,value);
            console.log(result);
            n=undefined;
            console.log("enter the number of elements:");
            i=0;
            data=[];
        }
    });
}