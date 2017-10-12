import time
import random
import sys
import os
sys.setrecursionlimit(2**30)
sys.path.insert(0,os.getcwd())
from importables.algoVault import sortVault
from importables.algoVault import searchVault

# make a pool outta random numbers
size = int(input("Enter Size of Data set: "))
print("Generating data items...")
data = [random.randint(0,1000) for x in range(size)]
print("Data pool generated.")
search = random.randint(0,1000)

algo = {"bubble":sortVault.bubble(), "selection":sortVault.selection(),
        "insertion":sortVault.insertion(), "merge":sortVault.merge(),
        "linear":searchVault.linear(), "binary":searchVault.binary(),
        "quick":sortVault.quick()}

while True:
    algoChoice = input("\nSelect Algorithm(or exit): ")
    if algoChoice == "exit": break
    try:
        avgTime = 0
        for x in range(5):
            t1 = time.clock()
            ans = algo[algoChoice](data,0,size-1,search)
            t2 = time.clock()
            avgTime += t2-t1
        print("Time taken: %f milliseconds" % (avgTime*1000/5))
        #print(ans) if ans else print("Search done! Element NOT found.")
    except KeyError:
        print("Error 404. Enter a valid Algorithm")
        for x,y in algo.items(): print(x,end=', ')