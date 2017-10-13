/*
*Time Complexity= Theta(log n)
*works only in sorted array
*starts Searching in a sorted array by repeatedly dividing the search interval in half
*/

module.exports = {
    binarySearch : binarySearch
}

function binarySearch(data,l,r,value){
    while (l <= r){
        var m = parseInt(l + (r-l)/2);
    
        // Check if value is present at mid
        if (data[m] == value){
            return "find at index "+m; 
        }  
    
        // If value greater ignore left half  
        if (data[m] < value){
            l = m + 1;
        }  
    
        // If value is smaller ignore right half 
        else{
            r = m - 1;
        }    
    }
    
    // if we reach here, then element was not present
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
            result = binarySearch(data,0,n,value);
            console.log(result);
            n=undefined;
            console.log("enter the number of elements:");
            i=0;
            data=[];
        }
    });
}

