def insertionSort(data):
    l = len(data)
    for x in range(1,l):
        i = x
        temp = data[i]
        while i > 0 and temp < data[i-1]:
            data[i] = data[i-1]
            i -= 1
        data[i] = temp  

if __name__ == "__main__":
    n = int(input("Enter number of data: "))
    data = [int(input()) for x in range(n)]
    insertionSort(data)
    print(data)