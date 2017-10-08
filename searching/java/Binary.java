
import java.util.*;

public class Binary{
    public static int binarySearch(int a[],int search,int low,int high){
        while(low<=high){
            int mid=(low+high)/2;
            if(a[mid]<search){
                low=mid+1;
            }
            else if(a[mid]>search){
                high=mid-1;
            }
            else return mid;
        }
        return 0;
    }
    public static void main(String[]s){
        int p[]=new int [1000000];
        Scanner d=new Scanner(System.in);
        System.out.print("Enter the numer of element:: ");
        int n=d.nextInt();
        for(int i=0;i<n;i++){
            p[i]=d.nextInt();
        }
        System.out.print("Enten the element do you want to search:: ");
        int search=d.nextInt();
        int z=Binary.binarySearch(p,search,0,999999);
        if(z!=0)
        System.out.print("Element found at "+(z+1)+" position.");
        else {
            System.out.println("Not found");
        }
    }
}