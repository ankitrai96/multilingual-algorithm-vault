/*
*Time Complexity:- O(n^2)
*sorts an array by repeatedly finding the minimum element from unsorted part and putting it at the beginning
*Memory efficient as auxilarry space is O(1)
*/

module.exports = {
    selectionSort : selectionSort
}

function selectionSort(data,l,n){
    // step wise move boundary of the unsorted sub array
    for (var i = 0; i < n-1; i++){
            // Finding the min value in the unsorted array
            var min = i;
            for (var j = i+1; j < n; j++){
                if (data[j] < data[min]){
                    min = j;
                }
            }
 
            // Swap the founded min element with the first
            var temp = data[min];
            data[min] = data[i];
            data[i] = temp;
        }
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
            console.log("sorted array is:");
            selectionSort(data,0,n);
            console.log(data);
            n=undefined;
            console.log("enter the number of elements:");
            i=0;
            data=[];
        }else{
            
        }
    });
}
