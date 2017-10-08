import time
import random
import sys
sys.path.append('/home/')
from sorting.python3.linearSearch import linearSearch
from binarySearch import binarySearch

# make a pool outta random numbers
print("Generating data items...")
data = [random.randint(0,1000) for x in range(1000000)]
print("Data pool generated.")
sortedData = sorted(data)
search = int(input("enter the item to be searched: "))

while True:
    algo = input("Select Algorithm (binary/linear/exit): ")
    if algo == "exit": break
    t1 = time.clock()
    linearSearch(data, search) if algo == "linear" else binarySearch(sortedData, 0, 999999, search)
    t2 = time.clock()
    print("Running Time Taken = %f" % (t2-t1))