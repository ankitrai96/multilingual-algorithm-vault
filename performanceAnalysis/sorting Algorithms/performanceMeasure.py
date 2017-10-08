import time
import random
import os
os.path.realpath(os.path.abspath(os.path.split(inspect.‌​getfile( inspect.currentframe() ))[0]) + "/subfolder")
from bubbleSort import bubbleSort
from insertionSort import insertionSort
from selectionSort import selectionSort
from mergeSort import mergeSort

# make a pool outta random numbers
algo = {"bubble":bubbleSort, "selection":selectionSort, "insertion":insertionSort, "merge":mergeSort}

print("Generating a MILLION data items...")
data = [random.randint(0,1000) for x in range(1000000)]
print("Data pool generated.")

while True:
    algoChoice = input("Select Algorithm(or exit): ")
    if algoChoice == "exit": break
    t1 = time.clock()
    algo[algoChoice](data)
    t2 = time.clock()
    print("Time taken to sort: %f" % (t2-t1))