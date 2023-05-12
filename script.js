
const inputElement = document.getElementById('textInput');
const outputElement = document.getElementById('output');

function handleClick() {

  const enteredText = inputElement.value;
  const words = enteredText.split(' ');

  const formattedWords = words.map(word => {
    const wordLength = word.length;
    const boldLength = Math.ceil(wordLength / 2);
    const boldPart = word.substring(0, boldLength);
    const remainingPart = word.substring(boldLength);
    return `<b>${boldPart}</b>${remainingPart}`;
  });

  const formattedText = formattedWords.join(' ');

  outputElement.innerHTML = formattedText;
}

const goButton = document.getElementById('goButton');
goButton.addEventListener('click', handleClick);