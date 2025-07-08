def binary_search(array, target, low, high):
    while low < high:
        mid = int((low + high)/2)

        if array[mid] == target:
            return mid
        elif array[mid] < target:
            low = mid+1
        else:
            high = mid
    return -1

def exponential_search(array, target):
    if array[0] == target:
        return 0
    
    array_length = len(array)
    indice = 1

    while indice < array_length and array[indice] < target:
        indice*=2
    
    if array[indice] == target:
        return indice
    
    return binary_search(array, target, indice//2, min(indice,array_length-1))

array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,20,30,31,32,33,34,35,36,37,38,39,40]
target = 32
print(exponential_search(array, target))