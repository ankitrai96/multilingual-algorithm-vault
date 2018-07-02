package searching.java;
import java.util.Scanner;
public class LinearSearch{
    final static int search(int data[], int n, int value){
        for (int i = 0; i < n; i++){
            if(data[i] == value){
                return i;
            } 
        }
        return -1;
    }
    
    //when using this as a standalone module
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        int data[] = new int[1000000];
        System.out.print("enter number of elements in array:");
        int n = sc.nextInt();
        System.out.println("enter elements:");
        for(int i = 0;i < n;i++){
            data[i] = sc.nextInt();
        }
        System.out.print("enter value to search:");
        int value = sc.nextInt();
        sc.close();
        int index = LinearSearch.search(data,n,value);
        if(index == -1){
            System.out.println("element does not exist");
        }else{
            System.out.println("element first found at index "+index);
        }
    }
}
