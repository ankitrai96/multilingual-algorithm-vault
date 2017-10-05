/*
*Time Complexity:- Theta(n log n)
*Divide and Conquer algorithm
*merge sort always divides the array in two halves and take linear time to merge two halves
*Merge Sort is useful for sorting linked lists
*Inversion Count Problem
*Used in External Sorting
*/

function merge(arr,l,m,r)
{
    var i, j, k;
    var n1 = m - l + 1;
    var n2 =  r - m;
 
    /* create temp arrays */
    var L=[], R=[];
 
    /* Copy data to temp arrays L[] and R[] */
    for (i = 0; i < n1; i++){
        L[i] = arr[l + i];
    }   
    for (j = 0; j < n2; j++){
        R[j] = arr[m + 1+ j];
    }
 
    /* Merge the temp arrays back varo arr[l..r]*/
    i = 0;
    j = 0;
    k = l;
    while (i < n1 && j < n2){
        if (L[i] <= R[j]){
            arr[k] = L[i];
            i++;
        }else{
            arr[k] = R[j];
            j++;
        }
        k++;
    }
 
    /* Copy the remaining elements of L[], if there are any */
    while (i < n1){
        arr[k] = L[i];
        i++;
        k++;
    }
 
    /* Copy the remaining elements of R[], if there are any */
    while (j < n2){
        arr[k] = R[j];
        j++;
        k++;
    }
}

function mergeSort(arr,n){
   var curr_size;  // For current size of subarrays to be merged
                   // curr_size varies from 1 to n/2
   var left_start; // For picking starting index of left subarray
                   // to be merged
 
   // Merge subarrays in bottom up manner.  First merge subarrays of
   // size 1 to create sorted subarrays of size 2, then merge subarrays
   // of size 2 to create sorted subarrays of size 4, and so on.
   for (curr_size=1; curr_size<=n-1; curr_size = 2*curr_size){
       // Pick starting povar of different subarrays of current size
       for (left_start=0; left_start<n-1; left_start += 2*curr_size){
           // Find ending povar of left subarray. mid+1 is starting 
           // povar of right
           var mid = left_start + curr_size - 1;
 
           var right_end = Math.min(left_start + 2*curr_size - 1, n-1);
 
           // Merge Subarrays arr[left_start...mid] & arr[mid+1...right_end]
           merge(arr, left_start, mid, right_end);
       }
   }
}