import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-[-8rem] md:mt-[-8rem]">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <a
            href="https://github.com/your-username/your-typing-speed-app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 hover:underline text-2xl"
          >
            Source Code <i class="fa-brands fa-github"></i>
          </a>
        </div>
        <div>
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
      </div>
    </footer>
  );
};

export default Footer;
