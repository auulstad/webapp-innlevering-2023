let wordCounter = 0;
let positionCounter = 0;
let wrongCounter = 0;

const words = ["Bringebær", "blåbær", "tyttebær", "dust", "kjæreste", "venn", "liv", "kjærlighetssorg", "jeg", "vil", "ha", "mat"];

const word = document.getElementById("word");
const wrongs = document.getElementById("wrongs");
const letter = document.getElementById("letter");
const buttons = document.querySelectorAll("button");

const setWord = () => {
  if (wordCounter < words.length) {
    word.innerHTML = words[wordCounter];
  } else {
    word.innerHTML = 'Ingen flere ord igjen';
    buttons.forEach(button => button.disabled = true); // Deaktiver alle knapper når det ikke er flere ord
  }
};

const changeWord = () => {
  positionCounter = 0;
  wordCounter++;
  setWord();
};

// TODO: Sjekk vi har skrevet riktig bokstav. Må ta hensyn til plassen i ordet vi skal skrive
const checkPosition = (word, position, letter) => {
  return word.charAt(position) === letter;
};

// TODO: Sjekk om posisjonen vi er på er lik lengden på ordet vi skal skrive. Det betyr at vi er ferdig med ordet og kan bytte ord
const wordIsCorrect = (word, position) => {
  return position === word.length;
};

const handleKeyUp = ({ key }) => {
  // TODO: Hent ut ordet vi skal skrive
  const currentWord = words[wordCounter];
  if (checkPosition(currentWord, positionCounter, key)) {
    // TODO: Øk posisjonstelleren
    positionCounter++;
    if (wordIsCorrect(currentWord, positionCounter)) {
      // TODO: Trigg funksjonen som bytter ord
      changeWord();
    }
  } else {
    // TODO: Oppdater telleren for "feil"
    wrongCounter++;
  }
  updateUI(key);
};

const updateUI = (key) => {
  if (wordCounter < words.length) {
    wrongs.innerHTML = `Feil: ${wrongCounter}`;
    letter.innerHTML = `Bokstav: ${key}`;
    word.innerHTML = `<span class="green">${words[wordCounter].slice(
      0,
      positionCounter
    )}</span>${words[wordCounter].slice(positionCounter)}`;
  }
};

window.addEventListener('keyup', handleKeyUp);

// Itererer gjennom knappene og legger til en hendelseslytter på hver
buttons.forEach(button => {
  button.addEventListener('click', () => {
    button.disabled = true;
    setWord();
  });
});

// Initialiser første ord
setWord();
