def shellSort(data,garbage1=None,garbage2=None,garbage3=None):
    n = len(data)
    gap = int(n/2)
    while gap > 0:
        for i in range(gap,n):
            temp = data[i]
            j = i
            while(j >= gap and data[j-gap] > temp):
                data[j] = data[j-gap]
                j = j-gap
            data[j] = temp
        gap = int(gap/2)
    return data    

if __name__ == "__main__":
    n = int(input("Enter number of data: "))
    data = [int(input()) for x in range(n)]
    shellSort(data)
    print(data)
