class Solution {
    /**
     * Inverte cada palavra de uma frase sem usar métodos built-in da linguagem.
     * @param {string} phrase - A frase de entrada.
     * @returns {string} A frase com cada palavra invertida.
     */
    reverseWordsPure(phrase) {
        phrase += " ";
        let finalResult = "";
        let currentWord = "";
        for (let i = 0; i < phrase.length; i++) {
            const char = phrase[i];
            if (char !== " ") {
                currentWord += char;
            }
            else {
                let reversedWord = "";
                for (let j = currentWord.length - 1; j >= 0; j--) {
                    reversedWord += currentWord[j];
                }
                if (finalResult.length > 0) {
                    finalResult += " " + reversedWord;
                } else {
                    finalResult = reversedWord;
                }
                currentWord = "";
            }
        }
        return finalResult;
    }
}
const sol = new Solution();

const resultado = sol.reverseWordsPure("Olá mundo");
console.log(resultado);
