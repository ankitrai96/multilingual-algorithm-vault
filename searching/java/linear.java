import java.util.Scanner;
public class Linear {
    public static void main(String[] args) {
        int a[]=new int[1000000];
        System.out.print("Enter the number of Elements:: ");
        Scanner d=new Scanner(System.in);
        int n=d.nextInt();
        System.out.print("Enter the arrey:: ");
        for(int i=0;i<n;i++){
            a[i]=d.nextInt();
        }
        System.out.print("Enter the element do you went to search::  ");
        int p=d.nextInt();
        int z=Linear.linearSearch(a,p);
        if(z!=0)
        System.out.println("Element fount at "+ (z+1) + " position.");
        else{
            System.out.print("Not Found.");
        }
    }
   public static int linearSearch(int a[],int search){
        for(int i=0;i<a.length;i++){
            if(a[i]==search){
                return i;
            }
        }
        return 0;
    }

}
    

