import sys
import os
sys.path.insert(0,os.getcwd())

from sorting.python3.bubbleSort import bubbleSort
from sorting.python3.selectionSort import selectionSort
from sorting.python3.mergeSort import mergeSort
from sorting.python3.quickSort import quickSort
from sorting.python3.insertionSort import insertionSort

from searching.python3.linearSearch import linearSearch
from searching.python3.binarySearch import binarySearch

class sortVault:
    def insertion(self = None): return insertionSort
    def selection(self = None): return selectionSort
    def merge(self = None): return mergeSort
    def bubble(self = None): return bubbleSort
    def quick(self = None) : return quickSort

class searchVault:
    def binary(self = None) :return binarySearch    
    def linear(self = None) : return linearSearch
