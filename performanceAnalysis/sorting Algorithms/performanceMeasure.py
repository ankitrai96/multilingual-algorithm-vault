import time
import random
import sys
sys.path.insert(0, '/home/ankitrai96/Documents/Work/multilingual-algorithm-vault')
from importables.algoVault import sortVault

# make a pool outta random numbers
size = int(input("Enter Size of Data set: "))
print("Generating data items...")
data = [random.randint(0,1000) for x in range(size)]
print("Data pool generated.")

algo = {"bubble":sortVault.bubble, "selection":sortVault.selection,
        "insertion":sortVault.insertion, "merge":sortVault.merge}

while True:
    algoChoice = input("Select Algorithm(or exit): ")
    if algoChoice == "exit": break
    try:
        avgTime = 0
        for x in range(5):
            t1 = time.clock()
            algo[algoChoice]()(data)
            t2 = time.clock()
            avgTime += t2-t1
        print("Time taken to sort: %f milliseconds" % (avgTime*1000/5))
    except KeyError:
        print("Error 404. Enter a valid sorting method!")