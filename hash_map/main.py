def fisrtUniqChar(s:str) -> int:
    d  = {}

    for idx, char in enumerate(s):
        if not d.get(char):
            d[char] = [idx, 1]
        else:
            d[char][1] +=1
    
    for char, val in d.items():
        if val[1] == 1:
            return val[0]
    
    return -1

word = "leetcode";
print(f"Letter = {fisrtUniqChar(word)}"); 

word2 = "loveleetcode";
print(f"Letter = {fisrtUniqChar(word2)}"); 

word3 = "aabb";
print(f"Letter = {fisrtUniqChar(word3)}");