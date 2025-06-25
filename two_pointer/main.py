class solution:
    """
    This is a method to show the reverse word aplying the Two Pointer solution
    """
    def reverseWords_manual(self, s):
        res = ''
        l, r = 0, 0
        while r < len(s):
            if s[r] != '':
                r += 1
            else:
                res += s[l:r + 1][::-1]
                r+=1
                l = r
        res += ''
        res += s[l:r + 2][::-1]
        return res[1:]

sol = solution()
word = sol.reverseWords_manual(s="Olá mundo!")
print(word)