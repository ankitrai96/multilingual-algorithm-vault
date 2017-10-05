/*
*Time Complexity:- O(n^2)
*sorts an array by repeatedly finding the minimum element from unsorted part and putting it at the beginning
*Memory efficient as auxilarry space is O(1)
*/


function selection(arr,n){
    // One by one move boundary of unsorted subarray
    for (var i = 0; i < n-1; i++){
            // Find the minimum element in unsorted array
            var min_idx = i;
            for (var j = i+1; j < n; j++){
                if (arr[j] < arr[min_idx]){
                    min_idx = j;
                }
            }
 
            // Swap the found minimum element with the first
            // element
            var temp = arr[min_idx];
            arr[min_idx] = arr[i];
            arr[i] = temp;
        }
}