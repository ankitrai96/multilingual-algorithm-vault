function linear(data,value){
    //alert("hi");
    for(var i=0;i<1000000;i++){
        if(data[i]==value){
            return "find at first index "+i;
        }
    }
    return "element does not exists";   
}