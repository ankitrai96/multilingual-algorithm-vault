def mergeSort(data):
    if len(data) > 1:
        mid = len(data) //2
        leftPart = data[:mid]
        rightPart = data[mid:]
        mergeSort(leftPart)
        mergeSort(rightPart)
        i = j = k = 0
        while i<len(leftPart) and j <len(rightPart):
            if leftPart[i] < rightPart[j]:
                data[k] = leftPart[i]
                i += 1
            else:
                data[k] = rightPart[j]
                j += 1
            k += 1
        while i < len(leftPart):
            data[k] = leftPart[i]
            i += 1
            k += 1
        while j < len(rightPart):
            data[k] = rightPart[j]
            j += 1
            k += 1
if __name__ == "__main__":
    n = int(input("Enter number of data: "))
    data = [int(input()) for x in range(n)]
    mergeSort(data)
    print(data)