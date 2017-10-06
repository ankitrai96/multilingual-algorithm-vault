const selection = require('./selection');
const bubble = require('./bubble');
const insertion = require('./insertion');
const quick = require('./quick');
const merge = require('./merge');
const heap = require('./heap');
const counting = require('./counting');

const radix = require('./radix');

var avgTime=0;
module.exports = {
    checkSortPerformance : checkSortPerformance
}


function checkSortPerformance(data2,algo,n1,value){
    for(var index=0;index<10;index++){
        var t0 = Date.now();
            switch(algo){
                case "selection":
                    selection.selectionSort(data2,n1);
                    result=data2;
                    break;
                case "bubble":
                    bubble.bubbleSort(data2,n1);
                    result=data2;
                    break;
                case "insertion":
                    insertion.insertionSort(data2,n1);
                    result=data2;
                    break;
                case "quick":
                    quick.quickSort(data2,n1);
                    result=data2;
                    break;
                case "merge":
                    merge.mergeSort(data2,n1);
                    result=data2;
                    break;
                case "heap":
                    heap.heapSort(data2,n1);
                    result=data2;
                    break;
                case "counting":
                    counting.countingSort(data2,n1);
                    result=data2;
                    break;
                case "radix":
                    radix.radixSort(data2,n1);
                    result=data2;
                    break;

                default:
                    selection.selectionSort(data2,n1);
                    result=data2;    
            }
            //console.log(result);
            var t1 = Date.now();
            avgTime += (t1 - t0);
            /*  TO-DO
            *   document.getElementById("time").innerHTML += 'Took '+ (t1 - t0).toFixed(4) + ' milliseconds<br> ';
            *   document.getElementById("result").innerHTML += result + "<br>";
            */
        }
        
        avgTime = avgTime.toFixed(4) / 10;
        console.log("avg time = " + avgTime.toFixed(4) + " ms");
        //document.getElementById("sortTime").innerHTML = 'Took average of '+ avgTime.toFixed(4) + ' milliseconds';
}