import React from 'react';

const AboutModal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="z-10 bg-white p-8 max-w-md mx-auto rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">About Typing Speed App</h2>
            <p>
              This is a typing speed test application. ...
              {/* Add your about information here */}
            </p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutModal;
