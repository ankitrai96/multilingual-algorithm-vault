/*
*Time Complexity= O(n)
*starts from one end and search till the last element untill the desired element is found
*/

module.exports = {
    linearSearch : linearSearch
}

function linearSearch(data,l,n,value){
    for(var i=0;i<1000000;i++){
        if(data[i]==value){
            return "find first at index "+i;
        }
    }
    return "element does not exists";   
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
            console.log("enter key value to search:");
        }else{
            value = answer;
            console.log(data);
            console.log(value);
            result = linearSearch(data,0,n,value);
            console.log(result);
            n=undefined;
            console.log("enter the number of elements:");
            i=0;
            data=[];
        }
    });
}