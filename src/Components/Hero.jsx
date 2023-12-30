import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [totalTimeTaken, setTotalTimeTaken] = useState(null);
  const [sentence, setSentence] = useState('');
  const [typingText, setTypingText] = useState('');
  const [isTypingDisabled, setIsTypingDisabled] = useState(true);
  const [score, setScore] = useState('');

  const sentences = [
    "Discover the joy of learning and the thrill of achievement.",
"Embrace the journey, and success will follow.",
"In the dance of life, find your own rhythm.",
"Explore the possibilities and unlock your potential.",
"Dare to dream, and then make it happen.",
"Create, innovate, and leave a lasting legacy.",
"Every challenge is an opportunity in disguise.",
"Strive for progress, not perfection.",
"Find beauty in simplicity and purpose in every action.",
"Chase your passions, and let them shape your destiny."
  ];

  const checkUserInput = () => {
    const displayedWords = sentence.split(' ');
    const userInputWords = typingText.split(' ');
  
    const minLength = Math.min(displayedWords.length, userInputWords.length);
  
    let mistakes = 0;
    let errorMessages = [];
  
    for (let i = 0; i < minLength; i++) {
      if (displayedWords[i] !== userInputWords[i]) {
        mistakes++;
        errorMessages.push(`Word ${i + 1}: Expected "${displayedWords[i]}", but got "${userInputWords[i]}".`);
      }
    }
  
    if (displayedWords.length !== userInputWords.length) {
      const extraWords = Math.abs(displayedWords.length - userInputWords.length);
      const wordPlural = extraWords === 1 ? 'word' : 'words';
      errorMessages.push(`You have to write ${extraWords} extra ${wordPlural} in your input.`);
    }
  
    return { mistakes, errorMessages };
  };
  

  useEffect(() => {
    startTyping();
  }, []); // Run once on component mount

  const calculateTypingSpeed = (time_taken) => {
    let totalWords = typingText.trim();
    let actualWords = totalWords === '' ? 0 : totalWords.split(' ').length;

    if (actualWords !== 0) {
      let typing_speed = (actualWords / time_taken) * 60;
      typing_speed = Math.round(typing_speed);
      setScore(
        `Your typing speed is ${typing_speed} words per minute & you wrote ${actualWords} words & time taken ${time_taken} sec`
      );
    } else {
      setScore(`Your typing speed is 0 words per minute & time taken ${time_taken} sec`);
    }
  };

  const endTypingTest = () => {
    setIsTypingDisabled(true);
    // Use the functional form to get the latest state
  setEndTime((prevEndTime) => {
    const currentTime = new Date().getTime();
    const totalTime = (currentTime - startTime) / 1000;
    setTotalTimeTaken(totalTime);

    const { mistakes, errorMessages } = checkUserInput();

    if (mistakes === 0) {
      calculateTypingSpeed(totalTime);
    } else {
      setScore(`You made ${mistakes} mistake. ${errorMessages.join(' ')}`);
    }

    return currentTime;
  });

    setSentence('');
    setTypingText('');
  };

  const startTyping = () => {
    let randomNumber = Math.floor(Math.random() * sentences.length);
    setSentence(sentences[randomNumber]);

    let date = new Date();
    setStartTime(date.getTime());

    setIsTypingDisabled(false);
  };

  const handleButtonClick = () => {
    if (isTypingDisabled) {
      setIsTypingDisabled(false);
      startTyping();
    } else {
      setIsTypingDisabled(true);
      endTypingTest();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
  
      <div className="bg-white p-4 mb-4 rounded-md shadow-md max-w-md md:max-w-2xl w-full mt-[-6rem]">
        {sentence}
      </div>

      {/* Text area and button */}
      <div className="typing_section max-w-md md:max-w-6xl mx-auto p-4 bg-white shadow-md rounded-md">
        <label htmlFor="textarea"></label>
        <textarea
          className="w-full h-60 border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
          name="textarea"
          id="textarea"
          cols="30"
          rows="10"
          disabled={isTypingDisabled}
          value={typingText}
          onChange={(e) => setTypingText(e.target.value)}
          placeholder="Start typing here..."
        />
        <br />
        <button
          id="btn"
          onClick={handleButtonClick}
          className={`mt-4 px-4 py-2 ${
            isTypingDisabled ? 'bg-green-500' : 'bg-blue-500'
          } hover:bg-opacity-80 transition`}
        >
          {isTypingDisabled ? 'Start' : 'Done'}
        </button>
        <p id="score" className="mt-4 font-bold">
          {score}
        </p>
      </div>
    </div>
  );
};

export default Hero;
