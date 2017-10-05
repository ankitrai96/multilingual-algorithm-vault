/*
*Time Complexity:- O(n^2)
*if already sorted then time taken is in order of n
*works the way we sort playing cards in our hands
*useful when number of elements is small
*when input array is almost sorted
*/

function insertionSort(arr,n)
{
   var i, key, j;
   for (i = 1; i < n; i++){
       key = arr[i];
       j = i-1;
 
       /* Move elements of arr[0..i-1], that are
          greater than key, to one position ahead
          of their current position */
       while (j >= 0 && arr[j] > key){
           arr[j+1] = arr[j];
           j = j-1;
       }
       arr[j+1] = key;
   }
}