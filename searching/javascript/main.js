var algo="linear";
var data=[];
var avgTime=0;
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
    for(var index=0;index<10;index++){
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
                case "jump":
                    result = jump(data1,n,value);
                    reset();
                    break;
                default:
                    alert("please select an algorithm to continue!");
            }
            
            var t1 = performance.now();
            avgTime += (t1 - t0);
            /*  TO-DO
            *   document.getElementById("time").innerHTML += 'Took '+ (t1 - t0).toFixed(4) + ' milliseconds<br> ';
            *   document.getElementById("result").innerHTML += result + "<br>";
            */
        }
        avgTime /= 10;
        document.getElementById("time").innerHTML = 'Took avrage of '+ avgTime.toFixed(4) + ' milliseconds';
}