import time
import random
import linearSearch
import binarySearch

# make a pool outta random numbers
data = []
print("Generating a MILLION data items...")
for x in range(1000000):
    data.append(random.randint(0,1000))
print("Data pool generated.")

search = int(input("enter the item to be searched: "))
t1 = time.clock()
linearSearch.linearSearch(data, search)
t2 = time.clock()
data.sort() #because sorting is an overhead for binarySearch
t3 = time.clock()
binarySearch.binarySearch(data, 0, 999999, search)
t4 = time.clock()
print("<~~:: Running Time Taken ::~~>\n1)LinearSearch: %f seconds\n2)BinarySearch: %f seconnds" % ((t2-t1),(t4-t3)))