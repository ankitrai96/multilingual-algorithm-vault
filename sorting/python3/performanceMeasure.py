import time
import random
from bubbleSort import bubbleSort
from insertionSort import insertionSort
from selectionSort import selectionSort
from mergeSort import mergeSort
from quickSort import quickSort

algo = {
        "bubble":bubbleSort, "selection":selectionSort,
        "insertion":insertionSort, "merge":mergeSort,
        "quick":quickSort
        }

print("Generating a MILLION data items...")
data = [random.randint(0,1000) for x in range(1000000)]
print("Data pool generated.")

while True:
    algoChoice = input("Select Algorithm(or exit): ")
    if algoChoice == "exit": break
    t1 = time.clock()
    algo[algoChoice](data)
    t2 = time.clock()
    print("Time taken to sort: %f milliseconds" % ((t2-t1)*1000))