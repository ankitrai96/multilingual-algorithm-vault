/*
*Time Complexity:- O(n^2)   Worst           //reverse sorted
*                  O(n^2)   Average
*                  O(n)     Best            //already sorted
*repeatedly swap the adjacent elements if they are in wrong order
*/

function bubbleSort(data,n){
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