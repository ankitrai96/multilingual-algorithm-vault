# the function takes two arguments:
##   1) the list of elements
##   2) the element to be searched
# note that it returns position of the
## first element found in given list

def linearSearch(pool,item):
    for x in range(len(pool)):
        if pool[x] == item: return x+1
    return False

#when using this as a standalone module
if __name__ == "__main__":
    num = []
    n = int(input("Enter number of elements: "))
    for x in range(n):
        num.append(int(input()))
    find = int(input("Enter element to search: "))
    result = linearSearch(num, find)
    if result: print("Element found at ", result)
    else: print("Element not found")