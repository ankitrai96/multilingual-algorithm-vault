function checkSearchPerformance(){
    for(var index=0;index<10;index++){
        var t0 = performance.now();
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
            console.log(result);
            var t1 = performance.now();
            avgTime += (t1 - t0);
            /*  TO-DO
            *   document.getElementById("time").innerHTML += 'Took '+ (t1 - t0).toFixed(4) + ' milliseconds<br> ';
            *   document.getElementById("result").innerHTML += result + "<br>";
            */
        }
        
        avgTime /= 10;
        document.getElementById("searchTime").innerHTML = 'Took average of '+ avgTime.toFixed(4) + ' milliseconds';
}