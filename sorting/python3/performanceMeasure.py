import time
import random
from bubbleSort import bubbltSort
from insertionSort import insertionSort
from selectionSort import selectionSort

# make a pool outta random numbers
algo = {"bubble":bubbltSort, "selection":selectionSort, "insertion":insertionSort}

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