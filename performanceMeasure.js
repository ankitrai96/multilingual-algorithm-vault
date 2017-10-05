var algo="linear";
var data=[];
var avgTime=0;
var n=1000000;
var n1=1000000;
var value=data[Math.random()*1000-1];
for(var i=0;i<n;i++){
    data[i]=parseInt(Math.random()*1000);
}
data1=data.slice();
data1.sort();
data1[0]=0;
data2=data.splice(0,n1);
function reset(){
    value=parseInt(Math.random()*1000-1);
}

function algorithm(name){
    algo=name;
}

function checkPerformance(token){
    for(var index=0;index<10;index++){
        var t0 = performance.now();
            if(token==0){
                switch(algo){//searching algo
                    case "linear":
                        result = linearSearch(data,value);
                        reset();
                        break;
            
                    case "binary":
                        result = binarySearch(data1,0,n-1,value);
                        reset();
                        break;
                    case "jump":
                        result = jumpSearch(data1,n,value);
                        reset();
                        break;
                    case "interpolation":
                        result = interpolationSearch(data1,n,value);
                        reset();
                        break;
                    case "exponential":
                        result = exponentialSearch(data1,n,value);
                        reset();
                        break;
                    default:
                        result = linearSearch(data,value);
                        reset();
                }
            }else{//sorting algo
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
                        console.log("merge");
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
        document.getElementById("time").innerHTML = 'Took average of '+ avgTime.toFixed(4) + ' milliseconds';
}