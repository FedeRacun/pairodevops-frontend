import React from 'react';
import './App.css';

import Navbar from './components/navbar/Navbar';
import Presentation from './modules/presentation/Presentation';
import Planes from './modules/plans/Planes';
import Services from './modules/services/Services';
import Contact from './modules/contact/Contact';
import Benefits from './modules/benefits/Benefits';
import Footer from './components/footer/Footer';

function App() {

  let navBar = document.getElementById('navbar');
  let internalNav = document.getElementById('internalNav');

  // Navbar Scroll efect
  window.addEventListener('scroll', () => {


    if (window.scrollY > 50) {
      // REMOVE
      navBar?.classList.remove('gradient');
      internalNav?.classList.remove('gradient');
      internalNav?.classList.remove('text-white')

      // ADD
      navBar?.classList.add('bg-white')
      internalNav?.classList.add('bg-white')
      internalNav?.classList.add('text-gray-600')
      internalNav?.classList.add('border-b')
      internalNav?.classList.add('border-gray-200')
    } else {
      // REMOVE
      internalNav?.classList.remove('text-gray-600')
      internalNav?.classList.remove('border-b')
      internalNav?.classList.remove('border-gray-200')

      // ADD
      navBar?.classList.add('gradient')
      internalNav?.classList.add('gradient')
      internalNav?.classList.add('text-white')

    }
  })

  return (
    <>
      <Navbar/>
      <Presentation />
      <Services />
      <Planes />
      <Benefits />
      <Contact />
      <Footer />

    </>
  );
}

export default App;
