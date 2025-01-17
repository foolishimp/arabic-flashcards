# Arabic Flashcards

A simple React application to help learn Arabic letters through interactive flashcards. Features include:
- Multiple choice questions
- Adjustable number of options (4, 8, or all letters)
- Audio pronunciation
- Visual feedback for correct/incorrect answers
- Progress tracking
- Score keeping

## Prerequisites

Before you begin, ensure you have installed:
- [Node.js](https://nodejs.org/) (version 14 or higher)
- npm (comes with Node.js) or [Yarn](https://yarnpkg.com/)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/arabic-flashcards.git
cd arabic-flashcards
```

2. Install dependencies:
```bash
npm install
# or if using Yarn
yarn install
```

## Project Structure

The main files you need to be aware of:
```
arabic-flashcards/
  ├── public/
  │   └── index.html
  ├── src/
  │   ├── App.js        # Main application component
  │   ├── App.css       # Styles
  │   └── index.js      # Entry point
  └── package.json
```

## Running the Application

1. Start the development server:
```bash
npm start
# or if using Yarn
yarn start
```

2. Open your browser and navigate to:
```
http://localhost:3000
```

## Features

### Text-to-Speech
The application uses the browser's built-in Speech Synthesis API for pronunciation. It attempts to use an Arabic voice if available in the browser.

### Multiple Choice Options
You can adjust the number of options shown:
- 4 options (default)
- 8 options
- All letters

### Keyboard Shortcuts
- Press 'S' to play the sound for the current letter

## Browser Support

The application should work in all modern browsers. For the best experience, use:
- Chrome (recommended for better Arabic text-to-speech)
- Firefox
- Safari
- Edge

Note: Text-to-speech quality may vary depending on the browser and available system voices.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Future Improvements

- [ ] Add recorded audio files for better pronunciation
- [ ] Add writing practice
- [ ] Include letter variations based on position in word
- [ ] Add different learning modes (beginner, intermediate, advanced)
- [ ] Add progress saving
- [ ] Include more detailed statistics
- [ ] Add support for mobile devices

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Your Name - [@yourusername](https://github.com/yourusername)

Project Link: [https://github.com/yourusername/arabic-flashcards](https://github.com/yourusername/arabic-flashcards)