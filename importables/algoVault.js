//exporting all the algorithms
module.exports = {
    //exporting searching algorithms
    linearSearch : function (data, l , n, value) {
        return linear.linearSearch(data, l , n, value);
    },
    binarySearch : function (data, l , n, value) {
        return binary.binarySearch(data, l , n, value);
    },
    jumpSearch : function (data, l , n, value) {
        return jump.jumpSearch(data, l , n, value);
    },
    exponentialSearch : function (data, l , n, value) {
        return exponential.exponentialSearch(data, l , n, value);
    },
    interpolationSearch : function (data, l , n, value) {
        return interpolation.interpolationSearch(data, l , n, value);
    },

    //exporting sorting algorithms
    selectionSort : function (data,l,n) {
        return selection.selectionSort(data,l,n);
    },
    bubbleSort : function (data,l,n) {
        return bubble.bubbleSort(data,l,n);
    },
    insertionSort : function (data,l,n) {
        return insertion.insertionSort(data,l,n);
    },
    quickSort : function (data,l,n) {
        return quick.quickSort(data,l,n);
    },
    mergeSort : function (data,l,n) {
        return merge.mergeSort(data,l,n);
    },
    heapSort : function (data,l,n) {
        return heap.heapSort(data,l,n);
    },
    countingSort : function (data,l,n) {
        return counting.countingSort(data,l,n);
    },
    radixSort : function (data,l,n) {
        return radix.radixSort(data,l,n);
    }
}


//importing searching algorithms
const linear = require('../searching/javascript/linear');
const binary = require('../searching/javascript/binary');
const jump = require('../searching/javascript/jump');
const exponential = require('../searching/javascript/exponential');
const interpolation = require('../searching/javascript/interpolation');

//importing sorting algorithms
const selection = require('../sorting/javascript/selection');
const bubble = require('../sorting/javascript/bubble');
const insertion = require('../sorting/javascript/insertion');
const quick = require('../sorting/javascript/quick');
const merge = require('../sorting/javascript/merge');
const heap = require('../sorting/javascript/heap');
const counting = require('../sorting/javascript/counting');
const radix = require('../sorting/javascript/radix');