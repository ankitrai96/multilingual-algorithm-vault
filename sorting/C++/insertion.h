#include<stdio.h>

int insert_sort(int a[],int n)
{
int i,j,key;
for(i=1;i<=n;i++)
{
    key=a[i];
    for(j=i-1;j>=0&&key<a[j];j--)
    {
     a[j+1]=a[j];
    }
    a[j+1]=key;
}
}