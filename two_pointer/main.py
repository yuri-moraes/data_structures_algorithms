class solution:
    """
    This is a method to show the reverse word applying the Two Pointer solution
    """
    def reverse_words_manual(self, phrase):
        result = ''
        left, right = 0, 0
        while right < len(phrase):
            if phrase[right] != '':
                right += 1
            else:
                result += phrase[left:right + 1][::-1]
                right+=1
                left = right
        result += ''
        result += phrase[left:right + 2][::-1]
        return result[1:]

sol = solution()
word = sol.reverse_words_manual(phrase="Olá mundo!")
print(word)