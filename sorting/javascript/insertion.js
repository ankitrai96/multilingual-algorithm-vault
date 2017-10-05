/*
*Time Complexity:- O(n^2)
*if already sorted then time taken is in order of n
*works the way we sort playing cards in our hands
*useful when number of elements is small
*when input array is almost sorted
*/

function insertionSort(data,n){
   var i, j, key;
   for (i = 1; i < n; i++){
       key = data[i];
       j = i - 1;
 
       // fix the key to its exact position by shifting all the elements larger to it to the next position
       while (j >= 0 && data[j] > key){
           data[j + 1] = data[j];
           j = j - 1;
       }
       data[j + 1] = key;
   }
}