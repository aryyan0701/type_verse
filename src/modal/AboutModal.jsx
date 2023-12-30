import React from "react";

const AboutModal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="z-10 bg-white p-4 md:p-8 max-w-md md:max-w-3xl mx-auto rounded-md shadow-md">
            <h2 className="text-3xl font-bold mb-2 text-blue-500">About Type-it</h2>
            <p className="text-gray-700">
              Type-it is a minimalistic typing speed testing app built with
              React and TailwindCSS that is highly inspired by other platform. The app
              allows users to test and improve their typing speed and accuracy.
              The app provides a user-friendly interface and intuitive feedback
              on typing performance.
            </p>
            <h3 className="text-2xl font-bold mt-2 text-blue-500">Current Features</h3>
            <p className="text-gray-700">
            Typing Test: Users can take a typing test to measure their typing speed and accuracy. The test includes random sentences/paragraphs, and the user's typing speed is calculated in words per minute (WPM).
            </p>
            <h3 className="text-2xl font-bold mt-2 text-blue-500"> Responsive Design</h3>
            <p className="text-gray-700">
            The user interface is designed to be responsive and adapt to different screen sizes, making it accessible on various laptops or PCs.
            </p>
           <div className="container">
              <h3 className="text-2xl font-bold mt-4 text-blue-500"> Contect</h3>
          <a
            href="https://twitter.com/your-twitter-handle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300  mr-4 text-2xl"
          >
             <i class="fa-brands fa-square-x-twitter"></i>
          </a>
          <a
            href="https://www.hackerrank.com/profile/aryankadam071"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300  mr-4 text-2xl"
          >
             <i class="fa-brands fa-hackerrank"></i>
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300  text-2xl"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <div>
          <h3 className="text-2xl font-bold mt-4 text-blue-500">Source code:</h3>
          <a
            href="https://github.com/your-username/your-typing-speed-app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 hover:underline text-2xl"
          >
            Repo <i class="fa-brands fa-github"></i>
          </a>
        </div>
            
            <button
              className="mt-8 bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutModal;
