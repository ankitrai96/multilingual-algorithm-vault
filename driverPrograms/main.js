module.exports = {
    reset : reset
}

const searching = require('../searching/javascript/performanceMeasure');
const sorting = require('../sorting/javascript/performanceMeasure');


var algo="counting";

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
data2=data.splice(0,n1);
console.log("million data sets generated.");

function reset(){
    value=parseInt(Math.random()*1000-1);
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
        searching.checkSearchPerformance(data,data1,algo,n,value);
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
        sorting.checkSortPerformance(data2,algo,n1,value);
        console.log("select an operation to perform (search / sort):");
        lastAnswer=undefined;
    } else {
        console.log("please enter a valid input");
        console.log("select an operation to perform (search / sort):");
        lastAnswer=undefined;
    }

});