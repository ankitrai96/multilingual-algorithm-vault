<!-- Document IMPORTING PROCESS FOR VARIOUS LANGUAGES -->
## Importables
since we're already assembling algorithmic horsepower in this repository, then let's put it all together here so that one can tap in to all of it if and when required.

Because as Albert Einstein once (sorta) said:
> ...there's no point of doing the same thing again and again!

###### Assuming that this repository has already been [download](https://github.com/ankitrai96/multilingual-algorithm-vault/archive/master.zip)ed, the remaining process is as simple as following the steps mentioned under the programming language of your choice.

#### Python
1. navigate to /path/of/this/repository/clone
2. make your own pythonic file in your favorite code editor (say, abc.py)
    `nano abc.py`
3. now, import this algoVault in abc.py
    `import importables.algoVault as algos`
4. And finally, use it however you like. For example, let's say you would like to get the first position of a particular element in a list

    ```python
    data = [9,8,1,8,1]
    searchMethod = algos.searchVault.linear()
    result = searchMethod(data,0,len(data)-1,1)
    print(result)
    ```
In general, we have the following syntax:-
- for other **searching algorithms**
    1. binary
       
       ```python
       searchMethod = algos.searchVault.binary()
       result = searchMethod(dataList, 0, len(dataList)-1,elementToSearch)
       ```

- simlarly, for **Sorting algorithms**
    1. merge

       ```python
       sortMethod = algos.sortVault.merge()
       result = sortMethod(dataList)
       ```
    
    2. bubble

       ```python
       sortMethod = algos.sortVault.bubble()
       result = sortMethod(dataList)
       ```