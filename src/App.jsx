import React from 'react';
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer"
import "./App.css"

const App = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <div className='flex flex-col justify-between items-center'>
      <h1 className='text-3xl text-white font-bold mt-[-3rem]'>Check Your Typing Speed</h1>
      </div>
      <main className="main-body">
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default App;
