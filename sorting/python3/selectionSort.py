def selectionSort(data,garbage1=None,garbage2=None,garbage3=None):
    l = len(data)
    for x in range(l):
        least = x
        for y in range(x+1,l):
            if data[y] < data[least]:
                temp = data[y]
                data[y] = data[least]
                data[least] = temp

if __name__ == "__main__":
    n = int(input("Enter number of data: "))
    data = [int(input()) for x in range(n)]
    selectionSort(data)
    print(data)