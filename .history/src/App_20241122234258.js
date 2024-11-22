import React, { useState } from "react";

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

const App = () => {
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

  const getButtonStyle = (option) => {
    const baseStyle = "py-3 px-6 rounded font-semibold text-white transition-colors duration-200";
    
    if (selectedOption === null) {
      return `${baseStyle} bg-blue-500 hover:bg-blue-600`;
    }
    
    if (option === letters[currentCardIndex].name) {
      return `${baseStyle} bg-green-500`;
    }
    
    if (option === selectedOption && option !== letters[currentCardIndex].name) {
      return `${baseStyle} bg-red-500`;
    }
    
    return `${baseStyle} bg-gray-300`;
  };

  if (showResult) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4 text-center">Flashcards Completed!</h1>
          <p className="text-xl mb-4 text-center">Your score: {score} / {letters.length}</p>
          <button 
            onClick={() => window.location.reload()}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Restart
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-3xl font-bold mb-6">Arabic Flashcards</h1>
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md mb-4">
        <div className="text-center">
          <div className="text-8xl mb-8">{letters[currentCardIndex].arabic}</div>
          <div className="grid grid-cols-2 gap-4">
            {currentOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                className={getButtonStyle(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center w-full max-w-md">
        <p className="text-lg">Card {currentCardIndex + 1} of {letters.length}</p>
        <button 
          onClick={handleNext}
          disabled={!canProceed}
          className={`ml-4 py-2 px-4 rounded font-semibold ${
            canProceed 
              ? 'bg-blue-500 hover:bg-blue-600 text-white' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;