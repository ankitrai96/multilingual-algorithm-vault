#include<stdio.h>
#include<conio.h>

int bubblesort(int a[],int n)
{
    int i,round,temp;
    for(round=1;round<=n-1;round++)
        for(i=0;i<=n-1-round;i++)
            if(a[i]>a[i+1]){
                temp=a[i];
                a[i]=a[i+1];
                a[i+1]=temp;
            }
    return 1;     
}