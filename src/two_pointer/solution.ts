function reverseWordsPure(phrase: string): string {
    phrase += " ";
    let currentWord = "";
    let reversePhrase = "";

    for (let i = 0; i < phrase.length; i++) {
        let char = phrase[i];
        if (char !== " ") {
            currentWord += char;
        }
        else {
            let reverseWord: string = "";
            for (let j = currentWord.length - 1; j >= 0; j--) {
                reverseWord += currentWord[j];
            }
            if (reversePhrase.length > 0) {
                reversePhrase += " " + reverseWord;
            }
            else {
                reversePhrase = reverseWord;
            }
            currentWord = "";
        }
    }
    return reversePhrase;
}

const word = reverseWordsPure("Olá mundo!")
console.log(word);