var algo="linear";
var data=[];
var n=1000000;
var value=data[Math.random()*1000-1];
for(var i=0;i<n;i++){
    data[i]=parseInt(Math.random()*1000);
}
data1=data.slice();
data1.sort();

function reset(){
    value=parseInt(Math.random()*1000-1);
}

function algorithm(name){
    algo=name;
}

function checkPerformance(){
    var t0 = performance.now();

    switch(algo){
        case "linear":
            result = linear(data,value);
            reset();
            break;

        case "binary":
            result = binary(data1,0,n-1,value);
            reset();
            break;
        default:
            alert("please select an algorithm to continue!");
    }
    
    var t1 = performance.now();
    document.getElementById("time").innerHTML = 'Took '+ (t1 - t0).toFixed(4) + ' milliseconds';
    document.getElementById("result").innerHTML = result;
}