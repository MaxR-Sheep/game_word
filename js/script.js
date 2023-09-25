/*----------------------MOTS-----------------------------------*/

let words = [
  {
    word: "skywalker",
    hint: "Nom trés célébre dans Star Wars",
  },
  {
    word: "playstation",
    hint: "Nom d'une console de Jeux Video ",
  },
  {
    word: "smartphone",
    hint: "Outil utiliser plusieurs fois par jour",
  },
  {
    word: "manga",
    hint: "Bande dessinée japonnais",
  },
  {
    word: "pikachu",
    hint: "Célébre petit compagnon jaune",
  },
  {
    word: "javascript",
    hint: "Langage de programmation",
  },
  {
    word: "tarot",
    hint: "Jeux de carte pouvant se joué à 5",
  },
  {
    word: "peinture",
    hint: "Utiliser pour de l'art ou des batiments",
  },
  {
    word: "luffy",
    hint: "Célèbre capitaine des chapeaux de paille",
  },
  {
    word: "yhwh",
    hint: "Nom de Dieu",
  },
  {
    word: "voiture",
    hint: "Moyen de transport",
  },
  {
    word: "matela",
    hint: "Permet de dormir dessus",
  },
  {
    word: "labyrinthe",
    hint: "Lieu ou l'on peut facilement se perdre",
  },
  {
    word: "chaussette",
    hint: "Permet de ne pas avoir froid au pied",
  },
  {
    word: "camera",
    hint: "Objet pour transmettre une image video",
  },
];

/*----------------JS avec fonction---------------------------*/

const wordText = document.querySelector(".word");
const hintText = document.querySelector(".hint span");
const timeText = document.querySelector(".time b");
const inputField = document.querySelector("input");
const refreshBtn = document.querySelector(".refresh-word");
const checkBtn = document.querySelector(".check-word");

let correctWord, timer;

const initTimer = (maxTime) => {
  clearInterval(timer);
  timer = setInterval(() => {
    if (maxTime > 0) {
      maxTime--;
      return (timeText.innerText = maxTime);
    }
    alert(`Temps écouler!${correctWord.toUpperCase()} était le bon mot`);
    initGame();
  }, 1000);
};

const initGame = () => {
  initTimer(45);
  let randomObj = words[Math.floor(Math.random() * words.length)];
  let wordArray = randomObj.word.split("");

  for (let i = wordArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
  }

  wordText.innerText = wordArray.join("");
  hintText.innerText = randomObj.hint;
  correctWord = randomObj.word.toLowerCase();
  inputField.value = "";
  inputField.setAttribute("maxlength", correctWord.length);
};
initGame();

// btn validation

const checkWord = () => {
  let userWord = inputField.value.toLowerCase();
  if (!userWord) {
    return alert("Merci de renter un mot pour valider!");
  }
  if (userWord !== correctWord) {
    return alert(`OOOOHHHH!!!! ${userWord} n'est pas le bon mot`);
  } else {
    alert(`Félicitation! ${correctWord.toUpperCase()} est le bon mot`);
  }
  initGame();
};

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);
