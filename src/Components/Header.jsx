import React, { useState } from 'react';
import AboutModal from "../modal/AboutModal"

function Header() {
  const [isAboutModalOpen, setAboutModalOpen] = useState(false);

  const openAboutModal = () => {
    setAboutModalOpen(true);
  };

  const closeAboutModal = () => {
    setAboutModalOpen(false);
  };

  return (
    <>
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">Type-it <i class="fa-solid fa-keyboard"></i></div>
          <ul className="flex space-x-4">
            <li>
              <button onClick={openAboutModal} className="text-white font-bold hover:text-gray-300 text-2xl">
                About <i class="fa-solid fa-question"></i>
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <AboutModal isOpen={isAboutModalOpen} onClose={closeAboutModal} />
    </>
  );
}

export default Header;
