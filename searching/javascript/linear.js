function linear(data,value){
    for(var i=0;i<1000000;i++){
        if(data[i]==value){
            return "found first at index "+i;
        }
    }
    return "element does not exists";   
}