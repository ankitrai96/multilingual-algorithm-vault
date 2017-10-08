function checkSortPerformance(token){
    for(var index=0;index<10;index++){
        var t0 = performance.now();
            switch(algo){
                case "selection":
                    selectionSort(data2,n1);
                    result=data2;
                    break;
                case "bubble":
                    bubbleSort(data2,n1);
                    result=data2;
                    break;
                case "insertion":
                    insertionSort(data2,n1);
                    result=data2;
                    break;
                case "quick":
                    quickSort(data2,n1);
                    result=data2;
                    break;
                case "merge":
                    mergeSort(data2,n1);
                    result=data2;
                    break;
                case "heap":
                    heapSort(data2,n1);
                    result=data2;
                    break;
                case "counting":
                    countingSort(data2,n1);
                    result=data2;
                    break;
                case "radix":
                    radixSort(data2,n1);
                    result=data2;
                    break;

                default:
                    selectionSort(data2,n1);
                    result=data2;    
            }
            console.log(result);
            var t1 = performance.now();
            avgTime += (t1 - t0);
            /*  TO-DO
            *   document.getElementById("time").innerHTML += 'Took '+ (t1 - t0).toFixed(4) + ' milliseconds<br> ';
            *   document.getElementById("result").innerHTML += result + "<br>";
            */
        }
        
        avgTime /= 10;
        document.getElementById("sortTime").innerHTML = 'Took average of '+ avgTime.toFixed(4) + ' milliseconds';
}