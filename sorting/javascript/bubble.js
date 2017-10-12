/*
*Time Complexity:- O(n^2)   Worst           //reverse sorted
*                  O(n^2)   Average
*                  O(n)     Best            //already sorted
*repeatedly swap the adjacent elements if they are in wrong order
*/

module.exports = {
    bubbleSort : bubbleSort
}

function bubbleSort(data,l,n){
    for (var i = 0; i < n-1; i++){
        for (var j = 0; j < n-i-1; j++){
            if (data[j] > data[j+1]){
                // swap data[j] and data[j+1]
                var temp = data[j];
                data[j] = data[j+1];
                data[j+1] = temp;
            }
        }
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
            bubbleSort(data,0,n);
            console.log(data);
            n=undefined;
            console.log("enter the number of elements:");
            i=0;
            data=[];
        }else{
            
        }
    });
}
