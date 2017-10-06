import java.util.Random;
import java.util.Scanner;
class Linear{
    static int a[]=new int[1000000];
    static int search;
    public static void main(String s[]){
        Scanner p=new Scanner(System.in);
        search =p.nextInt();
        Random randomGenerator=new Random();
        for (int i=0;i<1000000;i++){
            int random=randomGenerator.nextInt(10000);
            a[i]=random;
        }
        float time1=System.nanoTime();
        Linear.linearSearch();
        float time2=System.nanoTime();
        System.out.print(time2-time1+" nanasec");
    }
    static int linearSearch(){
        for(int i=0;i<a.length;i++){
            if(a[i]==search){
                return i;
            }
        }
        return 0;
    }
}