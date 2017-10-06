/*
*Time Complexity:- O(n log n)
*unstable (but can be made stable)
*based on Binary Heap data structure
*Sort a nearly sorted (or K sorted) array
*k largest(or smallest) elements in an array
*/

module.exports = {
    heapSort : heapSort
}

function heapify(data, n, i){
    var largest = i;  // Initializing the largest element as root
    var l = 2 * i + 1;  // left child
    var r = 2 * i + 2;  // right child
 
    // checking if left-child is larger
    if (l < n && data[l] > data[largest]){
        largest = l;
    }
 
    // checking if righ-child is larger
    if (r < n && data[r] > data[largest]){
        largest = r;
    }
 
    // Checking if largest is root
    if (largest != i){
        var swap = data[i];
        data[i] = data[largest];
        data[largest] = swap;
 
        // Recursively heapify the affected sub-tree elements
        heapify(data, n, largest);
    }
}
 
function heapSort(data,n){
    // call Build heap to rearrange arrays
    for (var i = n / 2 - 1; i >= 0; i--){
        heapify(data, n, i);
    }
 
    // extract an element from heap one by one
    for (var i = n - 1; i >= 0; i--){
        // Moving current root to end
        var temp = data[0];
        data[0] = data[i];
        data[i] = temp;
 
        // call max-heapify on the reduced heap
        heapify(data, i, 0);
    }
}