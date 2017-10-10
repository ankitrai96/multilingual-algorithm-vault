def partition(myList, start, end):
    pivot = myList[start]
    left = start+1
    right = end
    done = False
    while not done:
        while left <= right and myList[left] <= pivot:
            left = left + 1
        while myList[right] >= pivot and right >=left:
            right = right -1
        if right < left:
            done= True
        else:
            temp=myList[left]
            myList[left]=myList[right]
            myList[right]=temp
    temp=myList[start]
    myList[start]=myList[right]
    myList[right]=temp
    return right


def quickSort(myList,start,end,junk=None):
    if start < end:
        split = partition(myList, start, end)
        quickSort(myList, start, split-1)
        quickSort(myList, split+1, end)
    return myList

if __name__ == "__main__":
    n = int(input("Enter number of data: "))
    data = [int(input()) for x in range(n)]
    quickSort(data,0,n-1)
    print(data)