import java.time.Duration;
import java.time.Instant;
import java.util.*;
public class PerformanceMeasure {
     public static int a[]=new int[10000000];
     public static int b[]=new int[10000000];
     public static int search;
     public static void main(String[]s){
        Random randomGenerator=new Random();
        for(int i=0;i<10000000;i++){
            int random=randomGenerator.nextInt(100000);
            a[i]=random;
            b[i]=a[i];
        }
        Arrays.sort(b);
        Scanner x=new Scanner(System.in);
        System.out.print("Enter the number do you want to search(0-100000):: ");
        search=x.nextInt();
        while(true){
            System.out.print("Linear(L) or Binary(B) or Exit(E):: ");
             char p=x.next().charAt(0);
            if(p=='L'){
                 long time1=0;
                 long time2=0;
                 time1=System.nanoTime();
                 Linear.linearSearch(a,search);
                 time2=System.nanoTime();
                 System.out.println(time2-time1+" nanosec");
                }
            else if(p=='B'){
                long timeB1=0;
                long timeB2=0;
                timeB1=System.nanoTime();
                Binary.binarySearch(b,search,0,9999999);
                timeB2=System.nanoTime();
                System.out.println(timeB2-timeB1+" nanosec");
           }
            else{
                break;
            }
    }
    
    }
}
