import java.util.Random;
import java.util.Scanner;
class Linear{
    static int a[]=new int[1000000];
    static int search;
    public static void main(String s[]){
        System.out.print("Enter the number do you want to search(0-1000000):: ");
        Scanner p=new Scanner(System.in);
        search =p.nextInt();
        Random randomGenerator=new Random();
        for (int i=0;i<1000000;i++){
            int random=randomGenerator.nextInt(1000000);
            a[i]=random;
        }
        float time1=System.nanoTime();
        int z=Linear.linearSearch();
        float time2=System.nanoTime();
        if(z==1){
            System.out.println("Found:: "+(time2-time1)+" nano sec");
        }
        else{
            System.out.println("Not Found:: "+(time2-time1)+" nano sec");
        }
    }
    static int linearSearch(){
        for(int i=0;i<a.length;i++){
            if(a[i]==search){
                return 1;
            }
        }
        return 0;
    }
}