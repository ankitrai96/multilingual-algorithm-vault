const searching = require('../searching/javascript/performanceMeasure');
const sorting = require('../sorting/javascript/performanceMeasure');

var algo="counting";

var data=[];
var n=1000000;
var n1=10000;
var value=Math.floor(Math.random()*1000);
for(var i=0;i<n;i++){
    data[i]=parseInt(Math.random()*1000);
}
data1=data.slice();
data1.sort();/*
data1[0]=0;
value=0;   */ 
data2=data.splice(0,n1);
function reset(){
    value=parseInt(Math.random()*1000-1);
}

function algorithm(name){
    algo=name;
}
//searching.checkSearchPerformance(data,data1,algo,n,value);
sorting.checkSortPerformance(data2,algo,n1,value);