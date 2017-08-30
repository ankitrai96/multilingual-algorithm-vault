# A Recursive Algorithm
## The function binarySearch take four arguments:
### 1) data pool - an array of numbers
### 2) low - beginning index of current recursive call
### 3) high - last index of current recursive call
### 4) item - the element to be searched in data pool

def binarySearch(stock,low,high,item):
    if low > high:
        return -1
    mid = int((low+high)/2)
    if stock[mid] == item:
        return mid+1
    elif item > stock[mid]:
        return binarySearch(stock, mid+1, high, item)
    else:
        return binarySearch(stock, 0, mid-1, item)

#when using this as a standalone module
if __name__ == "__main__":
    num = []
    n = int(input("Enter number of elements: "))
    #print("Now enter elements in SORTED ORDER ONLY")
    for x in range(n):
        num.append(int(input()))
    find = int(input("Enter element to search: "))
    num.sort()
    if binarySearch(num, 0, n-1, find) != -1:
        print("Element found at ", binarySearch(num, 0, n-1, find))
    else:
        print("Search failed! Error 404: not found")