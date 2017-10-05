var algo="linear";
var data=[];
var avgTime=0;
var n=1000000;
var n1=10000;
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
