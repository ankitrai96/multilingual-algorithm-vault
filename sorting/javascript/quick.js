module.exports = {
    quickSort : quickSort
}

function quickSort(){
    console.log("we will update it soon...");
}

//standalone

if(typeof require && require.main == module){
    var data=[];
    var value;
    var i=0;
    var n;
    
    console.log("enter number of elements:");
    var stdin = process.openStdin();
    stdin.addListener("data", function(answer) {
        answer = parseInt(answer.toString().trim());
        if(n === undefined){
            n = answer;
            console.log("enter elements:");
        }else if(i < n-1){
            //console.log("i "+i);
            data[i] = answer;
            i++;
        }else if(n-1 == i){
            data[i] = answer;
            i++;
            console.log("sorted array is:");
            quickSort(data,0,n);
            console.log(data);
            n=undefined;
            console.log("enter the number of elements:");
            i=0;
            data=[];
        }else{
            
        }
    });
}
