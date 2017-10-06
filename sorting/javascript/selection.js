/*
*Time Complexity:- O(n^2)
*sorts an array by repeatedly finding the minimum element from unsorted part and putting it at the beginning
*Memory efficient as auxilarry space is O(1)
*/

module.exports = {
    selectionSort : selectionSort
}

function selectionSort(data,n){
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