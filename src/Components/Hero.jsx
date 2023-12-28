import React, { useState } from 'react';

const Hero = () => {
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [totalTimeTaken, setTotalTimeTaken] = useState(null);
  const [sentence, setSentence] = useState('');
  const [typingText, setTypingText] = useState('');
  const [isTypingDisabled, setIsTypingDisabled] = useState(false);
  const [score, setScore] = useState('');

  const sentences = [
    'The quick brown fox jumps over the lazy dog 1',
    'The quick brown fox jumps over the lazy dog 2',
    'The quick brown fox jumps over the lazy dog 3'
  ];

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
    setEndTime(new Date().getTime());

    const totalTime = (endTime - startTime) / 1000;
    setTotalTimeTaken(totalTime);

    calculateTypingSpeed(totalTime);

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
     
    <>
    <div id="showSentence" className=" container mt-4 text-gray-600 text-bold">
      
        {sentence}
      </div>

      <div className="typing_section max-w-3xl  mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
        <label htmlFor="textarea"></label>
        <textarea
        className='w-full h-40 border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500'
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
        <p id="score" className='mt-4 font-bold'>{score}</p>
      </div>

    </>
  );
};

export default Hero;
