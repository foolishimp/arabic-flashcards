import React, { useState } from "react";
import "./App.css";

const letters = [
  { arabic: "ا", name: "Alif" },
  { arabic: "ب", name: "Ba" },
  { arabic: "ت", name: "Ta" },
  { arabic: "ث", name: "Tha" },
  { arabic: "ج", name: "Jeem" },
  { arabic: "ح", name: "Ha" },
  { arabic: "خ", name: "Kha" },
  { arabic: "د", name: "Dal" },
  { arabic: "ذ", name: "Dhal" },
  { arabic: "ر", name: "Ra" },
  { arabic: "ز", name: "Zay" },
  { arabic: "س", name: "Seen" },
  { arabic: "ش", name: "Sheen" },
  { arabic: "ص", name: "Saad" },
  { arabic: "ض", name: "Daad" },
  { arabic: "ط", name: "Taa" },
  { arabic: "ظ", name: "Zaa" },
  { arabic: "ع", name: "Ayn" },
  { arabic: "غ", name: "Ghayn" },
  { arabic: "ف", name: "Fa" },
  { arabic: "ق", name: "Qaf" },
  { arabic: "ك", name: "Kaf" },
  { arabic: "ل", name: "Lam" },
  { arabic: "م", name: "Meem" },
  { arabic: "ن", name: "Noon" },
  { arabic: "ه", name: "Ha" },
  { arabic: "و", name: "Waw" },
  { arabic: "ي", name: "Ya" },
];

const getRandomOptions = (correctAnswer) => {
  const options = new Set();
  options.add(correctAnswer);

  while (options.size < 4) {
    const randomLetter = letters[Math.floor(Math.random() * letters.length)].name;
    options.add(randomLetter);
  }

  return Array.from(options).sort(() => Math.random() - 0.5);
};

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  const currentLetter = letters[currentCardIndex];
  const options = getRandomOptions(currentLetter.name);

  const handleOptionClick = (option) => {
    setSelectedOption(option);

    if (option === currentLetter.name) {
      setScore(score + 1);
    }

    setShowCorrectAnswer(true);

    setTimeout(() => {
      setShowCorrectAnswer(false);
      setSelectedOption(null);
      if (currentCardIndex + 1 < letters.length) {
        setCurrentCardIndex(currentCardIndex + 1);
      } else {
        setShowResult(true);
      }
    }, 2000); // Show the correct answer for 2 seconds
  };

  if (showResult) {
    return (
      <div className="App">
        <h1>Flashcards Completed!</h1>
        <p>Your score: {score} / {letters.length}</p>
        <button onClick={() => window.location.reload()}>Restart</button>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Arabic Flashcards</h1>
      <div className="flashcard">
        <h2>{currentLetter.arabic}</h2>
        <div className="options">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              className={
                showCorrectAnswer && option === currentLetter.name
                  ? "correct"
                  : selectedOption === option
                  ? option === currentLetter.name
                    ? "correct"
                    : "incorrect"
                  : ""
              }
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <p>
        Card {currentCardIndex + 1} of {letters.length}
      </p>
    </div>
  );
}

export default App;
