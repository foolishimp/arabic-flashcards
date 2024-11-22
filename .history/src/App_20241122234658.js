import React, { useState } from "react";
import "./App.css";

const letters = [
  { arabic: "ا", name: "Alif", sound: "aa" },
  { arabic: "ب", name: "Ba", sound: "b" },
  { arabic: "ت", name: "Ta", sound: "t" },
  { arabic: "ث", name: "Tha", sound: "th" },
  { arabic: "ج", name: "Jeem", sound: "j" },
  { arabic: "ح", name: "Ha", sound: "ḥ" },
  { arabic: "خ", name: "Kha", sound: "kh" },
  { arabic: "د", name: "Dal", sound: "d" },
  { arabic: "ذ", name: "Dhal", sound: "dh" },
  { arabic: "ر", name: "Ra", sound: "r" },
  { arabic: "ز", name: "Zay", sound: "z" },
  { arabic: "س", name: "Seen", sound: "s" },
  { arabic: "ش", name: "Sheen", sound: "sh" },
  { arabic: "ص", name: "Saad", sound: "ṣ" },
  { arabic: "ض", name: "Daad", sound: "ḍ" },
  { arabic: "ط", name: "Taa", sound: "ṭ" },
  { arabic: "ظ", name: "Zaa", sound: "ẓ" },
  { arabic: "ع", name: "Ayn", sound: "ʿ" },
  { arabic: "غ", name: "Ghayn", sound: "gh" },
  { arabic: "ف", name: "Fa", sound: "f" },
  { arabic: "ق", name: "Qaf", sound: "q" },
  { arabic: "ك", name: "Kaf", sound: "k" },
  { arabic: "ل", name: "Lam", sound: "l" },
  { arabic: "م", name: "Meem", sound: "m" },
  { arabic: "ن", name: "Noon", sound: "n" },
  { arabic: "ه", name: "Ha", sound: "h" },
  { arabic: "و", name: "Waw", sound: "w/oo" },
  { arabic: "ي", name: "Ya", sound: "y/ee" },
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
        <div className="arabic-letter">
          {letters[currentCardIndex].arabic}
          <div className="sound-hint">({letters[currentCardIndex].sound})</div>
        </div>
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