/*
*Time Complexity:- O(n^2)   Worst           //reverse sorted
*                  O(n^2)   Average
*                  O(n)     Best            //already sorted
*repeatedly swap the adjacent elements if they are in wrong order
*/

function bubbleSort(arr,n){
    for (var i = 0; i < n-1; i++){
        for (var j = 0; j < n-i-1; j++){
            if (arr[j] > arr[j+1]){
                // swap temp and arr[i]
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}