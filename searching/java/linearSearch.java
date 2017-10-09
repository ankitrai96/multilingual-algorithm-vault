//call the method search after making object of the class
class LinearSearch{
    static int search(int data[], int n, int value){
        for (int i = 0; i < n; i++){
            if(data[i] == value){
                return i;
            } 
        }
        return -1;
    }
}