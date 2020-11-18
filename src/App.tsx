import React from 'react';

import './App.css';
import Navbar from './components/navbar/Navbar';
import Presentation from './modules/presentation/Presentation';
import Planes from './modules/plans/Planes';
import Services from './modules/services/Services';
import Contact from './modules/contact/Contact';
import Benefits from './modules/benefits/Benefits';

function App() {


  const accion = () => {
    console.log('test')
  }



  return (

    <>
      <Navbar />
      <Presentation />
      <Services />
      <Planes />
      <Benefits />
      <Contact />

      <footer className="text-gray-700 body-font">
        <div className="container px-5 pt-8 pb-2 mx-auto flex items-center sm:flex-row flex-col">
          <a href="/servicios" onClick={accion} className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="ml-3 text-xl">Pairo-Devops</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">By: ©Federico Knispel —
            <a href="/servicios" onClick={accion} className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank"> <i>robando desde 1995</i></a>
          </p>
        </div>
      </footer>

    </>
  );
}

export default App;
