import React from 'react';

export default function Navbar() {


  return (
    <header className="text-gray-500 bg-gray-900 body-font fixed w-full z-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
          href="#home">
          <img src="./images/devopsdayslogo.png" alt="" className="w-12 h-12 text-white p-2 rounded-full" />
          <span className="ml-3 text-xl">Pairo-DevOps</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-white"
            href="#services">
            Servicios
            </a>
          <a className="mr-5 hover:text-white" href="#planes">
            Planes
            </a>
          <a className="mr-5 hover:text-white" href="#beneficios">
            Beneficios
            </a>

        </nav>
        <a href="#contacto">
          <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-blue-500 rounded hover:text-white text-base mt-4 md:mt-0">
            Contacto
          </button>
        </a>
      </div>
    </header>

  );

}
