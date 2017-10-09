module.exports = {
    checkSortPerformance : checkSortPerformance
}

const sorting = require('../../importables/algoVault');

var avgTime=0;
var algo="selection";

function checkSortPerformance(data2,algo,n1,value){
    for(var index=0;index<10;index++){
        var t0 = Date.now();
            switch(algo){
                case "selection":
                    sorting.selectionSort(data2,0,n1);
                    result=data2;
                    break;
                case "bubble":
                    sorting.bubbleSort(data2,0,n1);
                    result=data2;
                    break;
                case "insertion":
                    sorting.insertionSort(data2,0,n1);
                    result=data2;
                    break;
                case "quick":
                    sorting.quickSort(data2,0,n1);
                    result=data2;
                    break;
                case "merge":
                    sorting.mergeSort(data2,0,n1);
                    result=data2;
                    break;
                case "heap":
                    sorting.heapSort(data2,0,n1);
                    result=data2;
                    break;
                case "counting":
                    sorting.countingSort(data2,0,n1);
                    result=data2;
                    break;
                case "radix":
                    sorting.radixSort(data2,0,n1);
                    result=data2;
                    break;
                default:
                    sorting.selectionSort(data2,0,n1);
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
        //console.log(result);
        avgTime = avgTime.toFixed(4) / 10;
        console.log("avg time = " + avgTime.toFixed(4) + " ms");
        //document.getElementById("sortTime").innerHTML = 'Took average of '+ avgTime.toFixed(4) + ' milliseconds';
}

if(typeof require && require.main == module){
    var data=[];
    var n=1000000;
    var n1=1000000;
    console.log("generating million data sets...");
    var value=null;
    for(var i=0;i<n;i++){
        data[i]=parseInt(Math.random()*1000);
    }
    
    data1=data.slice();
    data1.sort();
    /*
        data1[0]=0;
        value=0;   
    */ 
    data2=data.slice(0,n1);
    console.log("million data sets generated.");
    
    console.log("select sorting algo (selection / bubble /insertion / "
                +"quick / merge / heap /counting / radix):");
    var stdin = process.openStdin();
    stdin.addListener("data", function(answer) {
        answer=answer.toString().trim();
        
        if(!answer || answer == null || answer == undefined){
            
            
        } else if(answer == "selection" || answer == "bubble" ||
                answer == "insertion" || answer == "quick" || answer == "merge" || 
                answer == "heap" || answer == "counting" || answer == "radix"){
            algo=answer;
            checkSortPerformance(data2,algo,n1,value);
            console.log("select sorting algo (selection / bubble /insertion / "
                        +"quick / merge / heap /counting / radix):");
        } else {
            console.log("please enter a valid input");
            console.log("select sorting algo (selection / bubble /insertion / "
                        +"quick / merge / heap /counting / radix):");
        }
    
    });
}