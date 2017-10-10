def insertionSort(data,garbage1=None,garbage2=None,garbage3=None):
    l = len(data)
    for x in range(1,l):
        i = x
        temp = data[i]
        while i > 0 and temp < data[i-1]:
            data[i] = data[i-1]
            i -= 1
        data[i] = temp  
    return data
if __name__ == "__main__":
    n = int(input("Enter number of data: "))
    data = [int(input()) for x in range(n)]
    insertionSort(data)
    print(data)