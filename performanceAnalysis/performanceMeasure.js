module.exports = {
    checkPerformance : checkPerformance
}

const algoVault = require('../importables/algoVault');
//console.log(linear.linear());
var avgTime=0;
var algo="linear";

function checkPerformance(data,data1,data2,algo,typeAlgo,n,value){
    avgTime=0;
    var result;
    function reset(){
        value=parseInt(Math.random()*1000-1);
    }

    for(var index = 0;index < 10;index++){
        var t0 = Date.now();
        if(typeAlgo == "searching"){
            switch(algo){//searching algo
                case "linear":
                    result = algoVault.linearSearch(data,0,n,value);
                    break;
                case "binary":
                    result = algoVault.binarySearch(data1,0,n-1,value);
                    break;
                case "jump":
                    result = algoVault.jumpSearch(data1,0,n,value);
                    break;
                case "interpolation":
                    result = algoVault.interpolationSearch(data1,0,n,value);
                    break;
                case "exponential":
                    result = algoVault.exponentialSearch(data1,0,n,value);
                    break;
                default:
                    console.log("err");
            }    
        } else if(typeAlgo == "sorting"){
            switch(algo){
                case "selection":
                    algoVault.selectionSort(data2,0,n1);
                    result=data2;
                    break;
                case "bubble":
                    algoVault.bubbleSort(data2,0,n1);
                    result=data2;
                    break;
                case "insertion":
                    algoVault.insertionSort(data2,0,n1);
                    result=data2;
                    break;
                case "quick":
                    algoVault.quickSort(data2,0,n1);
                    result=data2;
                    break;
                case "merge":
                    algoVault.mergeSort(data2,0,n1);
                    result=data2;
                    break;
                case "heap":
                    algoVault.heapSort(data2,0,n1);
                    result=data2;
                    break;
                case "counting":
                    algoVault.countingSort(data2,0,n1);
                    result=data2;
                    break;
                case "radix":
                    algoVault.radixSort(data2,0,n1);
                    result=data2;
                    break;
                default:
                    console.log("err");  
            }    
        } else {
            console.log("error");
        }
        if(typeof require && require.main == module){
            reset();
        }
        var t1 = Date.now();
        avgTime += (t1 - t0);
        /*  TO-DO
        *   document.getElementById("time").innerHTML += 'Took '+ (t1 - t0).toFixed(4) + ' milliseconds<br> ';
        *   document.getElementById("result").innerHTML += result + "<br>";
        */
        //console.log(result);
    }
    avgTime = avgTime.toFixed(4) / 10;
    console.log("avg time = " + avgTime.toFixed(4) + " ms");
    //document.getElementById("searchTime").innerHTML = 'Took average of '+ avgTime.toFixed(4) + ' milliseconds';
}

if(typeof require && require.main == module){
    var data=[];
    var value;
    var n=1000000;
    var n1=1000000;
    function generateDatasets(){
        console.log("generating million data sets...");
        value=parseInt(Math.random()*1000);
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
        console.log("Processing data, Please wait...");
    }
    
    var lastAnswer=undefined;
    console.log("select an operation to perform (search / sort):");
    var stdin = process.openStdin();
    stdin.addListener("data", function(answer) {
        answer=answer.toString().trim();
        
        if(!answer || answer == null || answer == undefined){
            
        }else if(answer == "search"){
            console.log("select searching algo (linear / binary / jump / "
                        +"exponential / interpolation):");
            lastAnswer=answer;
            
        }else if((lastAnswer == "search") && (answer == "linear" || answer == "binary" || answer == "jump" || 
            answer == "exponential" || answer == "interpolation")){
            algo=answer;
            typeAlgo="searching";
            generateDatasets();
            checkPerformance(data,data1,data2,algo,typeAlgo,n,value);
            console.log("select an operation to perform (search / sort):");
            lastAnswer=undefined;
        }else if(answer == "sort"){
            console.log("select sorting algo (selection / bubble /insertion / "
                        +"quick / merge / heap /counting / radix):");
            lastAnswer=answer;
        }else if((lastAnswer == "sort") && (answer == "selection" || answer == "bubble" || answer == "insertion" ||
            answer == "quick" || answer == "merge" || answer == "heap" ||
            answer == "counting" || answer == "radix")){
            algo=answer;
            typeAlgo="sorting";
            generateDatasets();
            checkPerformance(data,data1,data2,algo,typeAlgo,n,value);
            console.log("select an operation to perform (search / sort):");
            lastAnswer=undefined;
        } else {
            console.log("please enter a valid input");
            console.log("select an operation to perform (search / sort):");
            lastAnswer=undefined;
        }
    
    });
}
