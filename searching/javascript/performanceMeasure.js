const main = require('../../driverPrograms/main');
const linear = require('./linear');
const binary = require('./binary');
const jump = require('./jump');
const exponential = require('./exponential');
const interpolation = require('./interpolation');

var avgTime=0;
module.exports = {
    checkSearchPerformance : checkSearchPerformance
}

function checkSearchPerformance(data,data1,algo,n,value){
    for(var index=0;index<10;index++){
        var t0 = Date.now();
            switch(algo){//searching algo
                case "linear":
                    result = linear.linearSearch(data,value);
                    main.reset();
                    break;
        
                case "binary":
                    result = binary.binarySearch(data1,0,n-1,value);
                    main.reset();
                    break;
                case "jump":
                    result = jump.jumpSearch(data1,n,value);
                    main.reset();
                    break;
                case "interpolation":
                    result = interpolation.interpolationSearch(data1,n,value);
                    main.reset();
                    break;
                case "exponential":
                    result = exponential.exponentialSearch(data1,n,value);
                    main.reset();
                    break;
                default:
                    result = linearSearch(data,value);
                    main.reset();
            }
            //console.log(result);
            var t1 = Date.now();
            avgTime += (t1 - t0);
            /*  TO-DO
            *   document.getElementById("time").innerHTML += 'Took '+ (t1 - t0).toFixed(4) + ' milliseconds<br> ';
            *   document.getElementById("result").innerHTML += result + "<br>";
            */
        }
        avgTime = avgTime.toFixed(4) / 10;
        console.log("avg time = " + avgTime.toFixed(4) + " ms");
        //document.getElementById("searchTime").innerHTML = 'Took average of '+ avgTime.toFixed(4) + ' milliseconds';
}