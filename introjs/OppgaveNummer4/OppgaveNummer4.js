
// Bruk getElementById til å hente HTML med #id
const numbersUl = document.getElementById('numbers');
const guessUl = document.getElementById('guess');
// Bruk querySelector til å hente knappen
const button = document.querySelector('button');

// Lag en liste med tallene som skal sorteres
const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

const getGuess = () => {
  // Bruk querySelectorAll på guessUl for å hente ut alle input feltene
  const answers = guessUl.querySelectorAll('input');
  // Bruk .map for å hente ut verdiene i input feltene
  return Array.from(answers).map(answer => parseInt(answer.value));
};

const checkNumberSeq = () => {
  const guess = getGuess();
  let isCorrect = numbers.slice().sort().join('') === guess.join('');
  if (isCorrect) {
    alert('Du sorterte riktig');
  } else {
    alert('Du sorterte feil');
  }
};

const addInputUI = () => {
  // Bruk for-of (eller vanlig for-løkke) og guessUl til å lage li-elementer med input elementer for å kunne skrive inn hva som skal sorteres
  for (let number of numbers) {
    const li = document.createElement('li');
    const input = document.createElement('input');
    input.type = 'number';
    li.appendChild(input);
    guessUl.appendChild(li);
  }
};

const addNumbersUI = () => {
  // Bruk for-of (eller vanlig for-løkke) og numbersUl til å lage li-elementer med tallene som skal sorteres
  for (let number of numbers) {
    const li = document.createElement('li');
    li.textContent = number;
    numbersUl.appendChild(li);
  }
};

const createUI = () => {
  addNumbersUI();
  addInputUI();
};

createUI();

button.addEventListener('click', checkNumberSeq);
