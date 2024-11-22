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

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentOptions, setCurrentOptions] = useState(getRandomOptions(letters[0].name));
  const [canProceed, setCanProceed] = useState(false);

  function getRandomOptions(correctAnswer) {
    const options = new Set([correctAnswer]);
    while (options.size < 4) {
      const randomLetter = letters[Math.floor(Math.random() * letters.length)].name;
      options.add(randomLetter);
    }
    return Array.from(options).sort();
  }

  const handleOptionClick = (option) => {
    if (selectedOption !== null) return;
    
    setSelectedOption(option);
    setCanProceed(true);
    
    if (option === letters[currentCardIndex].name) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentCardIndex + 1 < letters.length) {
      setCurrentCardIndex(currentCardIndex + 1);
      setSelectedOption(null);
      setCanProceed(false);
      setCurrentOptions(getRandomOptions(letters[currentCardIndex + 1].name));
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <div className="App">
        <div className="result">
          <h1>Flashcards Completed!</h1>
          <p>Your score: {score} / {letters.length}</p>
          <button className="next-button" onClick={() => window.location.reload()}>
            Restart
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Arabic Flashcards</h1>
      <div className="flashcard">
        <div className="arabic-letter">{letters[currentCardIndex].arabic}</div>
        <div className="options">
          {currentOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              className={
                selectedOption !== null
                  ? option === letters[currentCardIndex].name
                    ? "correct"
                    : option === selectedOption
                    ? "incorrect"
                    : ""
                  : ""
              }
              disabled={selectedOption !== null}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <div className="progress">
        <p>Card {currentCardIndex + 1} of {letters.length}</p>
        {canProceed && (
          <button 
            className="next-button" 
            onClick={handleNext}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default App;