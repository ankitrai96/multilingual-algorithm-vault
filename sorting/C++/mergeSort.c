#include<stdio.h>

// void merge(){

// }

void mergeSort(int a[], int size){
    int c,i, l[50], r[50], mid = size/2;
    if(size < 1) return;
    for(c=i=0;c<mid;c++){
        l[i] = a[c];
        i++;
    } for(c=mid,i=0;c<size;c++){
        r[i] = a[c];
        i++;
    }
    mergeSort(l,mid);
    mergeSort(r,size-mid);
    merge(a,l,r);
}

void main(){
    int n,i;
    int a[100];
    scanf("%d",&n);//size of list
    for(i=0;i<n;i++) scanf("%d",&a[i]);
    mergeSort(a,n);
    printf("Sorted List -->\n");
    for(i=0;i<n;i++) printf("%d",a[i]);
}