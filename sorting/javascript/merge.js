/*
*Time Complexity:- Theta(n log n)
*Divide and Conquer algorithm
*merge sort always divides the array in two halves and take linear time to merge two halves
*Merge Sort is useful for sorting linked lists
*Inversion Count Problem
*Used in External Sorting
*/

function merge(data,l,m,r){
    var i, j, k;
    var m1 = m - l + 1;
    var m2 =  r - m;
    //temp arrays
    var L=[], R=[];
 
    // Copy data to L and R
    for (i = 0; i < m1; i++){
        L[i] = data[l + i];
    }   
    for (j = 0; j < m2; j++){
        R[j] = data[m + 1+ j];
    }
 
    // Merging temporary arrays to data[l..r]
    i = 0;
    j = 0;
    k = l;
    while (i < m1 && j < m2){
        if (L[i] <= R[j]){
            data[k] = L[i];
            i++;
        }else{
            data[k] = R[j];
            j++;
        }
        k++;
    }
 
    // Copy remain elements in L
    while (i < m1){
        data[k] = L[i];
        i++;
        k++;
    }
 
    // Copy remain elements in L
    while (j < m2){
        data[k] = R[j];
        j++;
        k++;
    }
}

function mergeSort(data,n){
   var curr_size;  // size (1 to n/2) of subarrays to be merged 
   var left_start;

   //Merging sub-arrays in bottom-up manner(smaller to larger size)
   for(curr_size = 1; curr_size <= n - 1; curr_size = 2 * curr_size){
       // choose start point of diff sub-arrays of curr_size
       for(left_start = 0; left_start < n - 1; left_start += 2 * curr_size){
            var mid = left_start + curr_size - 1;    
            var right_end = Math.min(left_start + 2 * curr_size - 1, n - 1);
            merge(data, left_start, mid, right_end);
       }
   }
}