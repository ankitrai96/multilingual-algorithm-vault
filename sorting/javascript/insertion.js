/*
*Time Complexity:- O(n^2)
*if already sorted then time taken is in order of n
*works the way we sort playing cards in our hands
*useful when number of elements is small
*when input array is almost sorted
*/

module.exports = {
    insertionSort : insertionSort
}

function insertionSort(data,l,n){
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
            insertionSort(data,0,n);
            console.log(data);
            n=undefined;
            console.log("enter the number of elements:");
            i=0;
            data=[];
        }else{
            
        }
    });
}
