/*
*Time Complexity:- O(Log n)
*useful for unbounded searches, where size of array is infinite
*works better than Binary Search for bounded arrays for elements closer to the first element
*uses binary search
*/

module.exports = {
    exponentialSearch : exponentialSearch
}

const binary = require('./binary');

function exponentialSearch(data,l,n,value){
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
            result = exponentialSearch(data,0,n,value);
            console.log(result);
            n=undefined;
            console.log("enter the number of elements:");
            i=0;
            data=[];
        }
    });
}

