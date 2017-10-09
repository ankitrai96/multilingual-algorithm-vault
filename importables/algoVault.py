<<<<<<< HEAD
import sys
#To-Do: gotta make it independent of absolute path
sys.path.insert(0, '/home/ankitrai96/Documents/Work/multilingual-algorithm-vault')

from sorting.python3.bubbleSort import bubbleSort
from sorting.python3.selectionSort import selectionSort
from sorting.python3.mergeSort import mergeSort
from sorting.python3.insertionSort import insertionSort

from searching.python3.linearSearch import linearSearch
from searching.python3.binarySearch import binarySearch

class sortVault:
    def insertion(self = None): return insertionSort
    def selection(self = None): return selectionSort
    def merge(self = None): return mergeSort
    def bubble(self = None): return mergeSort

class searchVault:
    def binary(self = None) :return binarySearch    
    def linear(self = None) : return linearSearch
=======
""" 
    This file is inteded to be as modular as possible!
    Purpose: To import all the other algorithmic files
    so as to act as a ready-made library for others.
"""
>>>>>>> jaggaMess
