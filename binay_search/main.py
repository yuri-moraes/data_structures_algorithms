def binary_search(ordened_array, target):
    low = 0
    high = len(ordened_array)
    steps = 0

    while low < high:
        steps+=1
        mid = int((low+high)/2)

        if ordened_array[mid] == target:
            print("steps ", steps)
            return mid
        elif ordened_array[mid] < target:
            low = mid + 1
        else:
            high = mid
    return -1

array1 = [1,2,3,4,5,6,7,8,9,10]
array2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
array3 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]

result = binary_search(array3, 3)
