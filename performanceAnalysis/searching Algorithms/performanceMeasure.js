module.exports = {
    checkSearchPerformance : checkSearchPerformance
}

const searching = require('../../importables/algoVault');
//console.log(linear.linear());
var avgTime=0;
var algo="linear";

function checkSearchPerformance(data,data1,algo,n,value){
    
    function reset(){
        value=parseInt(Math.random()*1000-1);
    }

    for(var index=0;index<10;index++){
        var t0 = Date.now();
            switch(algo){//searching algo
                case "linear":
                    result = searching.linearSearch(data,0,n,value);
                    break;
                case "binary":
                    result = searching.binarySearch(data1,0,n-1,value);
                    break;
                case "jump":
                    result = searching.jumpSearch(data1,0,n,value);
                    break;
                case "interpolation":
                    result = searching.interpolationSearch(data1,0,n,value);
                    break;
                case "exponential":
                    result = searching.exponentialSearch(data1,0,n,value);
                    break;
                default:
                    result = searching.linearSearch(data,0,n,value);
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
    var n=1000000;
    var n1=1000000;
    console.log("generating million data sets...");
    var value=parseInt(Math.random()*1000);
    for(var i=0;i<n;i++){
        data[i]=parseInt(Math.random()*1000);
    }
    
    data1=data.slice();
    data1.sort();
    /*
        data1[0]=0;
        value=0;   
    */ 
    //data2=data.slice(0,n1);
    console.log("million data sets generated.");
    
    console.log("select searching algo (linear / binary / jump / "
    +"exponential / interpolation):");
    var stdin = process.openStdin();
    stdin.addListener("data", function(answer) {
        answer=answer.toString().trim();
        
        if(!answer || answer == null || answer == undefined){
            
            
        } else if(answer == "linear" || answer == "binary" || answer == "jump" || 
            answer == "exponential" || answer == "interpolation"){
            algo=answer;
            checkSearchPerformance(data,data1,algo,n,value);
            console.log("select searching algo (linear / binary / jump / "
                        +"exponential / interpolation):");
        } else {
            console.log("please enter a valid input");
            console.log("select searching algo (linear / binary / jump / "
            +"exponential / interpolation):");
        }
    
    });
}