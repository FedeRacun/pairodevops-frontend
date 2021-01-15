import React from 'react';

export default function Navbar() {

  // Navbar Scroll efect
  window.addEventListener('scroll', () => {
    const navBar = document.getElementById('navbar');
    const internalNav = document.getElementById('internalNav');
    const mobileMenu = document.getElementById('nav-content');
    const BtnMenu = document.getElementById('nav-toggle');
    const isHidden = mobileMenu?.classList.contains('hidden');
    const pairoColor = document.getElementById('pairoColor');
    const pairoWhite = document.getElementById('pairoWhite');

    if (!isHidden) {
      mobileMenu?.classList.add('hidden');
    }

    if (window.scrollY > 50) {
      // REMOVE
      navBar?.classList.remove('gradient');
      internalNav?.classList.remove('gradient');
      internalNav?.classList.remove('text-white')
      BtnMenu?.classList.remove('border-white')
      pairoColor?.classList.remove('hidden')
      pairoWhite?.classList.remove('show')

      // ADD
      BtnMenu?.classList.add('border-gray-600')
      navBar?.classList.add('bg-white')
      internalNav?.classList.add('bg-white')
      internalNav?.classList.add('text-gray-600')
      internalNav?.classList.add('border-b')
      internalNav?.classList.add('border-gray-200')
      pairoColor?.classList.add('show')
      pairoWhite?.classList.add('hidden')
    } else {
      // REMOVE
      internalNav?.classList.remove('text-gray-600')
      internalNav?.classList.remove('border-b')
      internalNav?.classList.remove('border-gray-200')
      BtnMenu?.classList.remove('border-gray-600')
      pairoColor?.classList.remove('show');
      pairoWhite?.classList.remove('hidden')

      // ADD
      navBar?.classList.add('gradient')
      internalNav?.classList.add('gradient')
      internalNav?.classList.add('text-white')
      BtnMenu?.classList.add('border-white')
      pairoWhite?.classList.add('show')
      pairoColor?.classList.add('hidden')

    }
  })

  const toggleMenu = () => {
    const mobileMenu = document.getElementById('nav-content');
    const isHidden = mobileMenu?.classList.contains('hidden');
    isHidden ? mobileMenu?.classList.add('bg-white'): mobileMenu?.classList.remove('bg-white');
    isHidden ? mobileMenu?.classList.add('text-gray-600'): mobileMenu?.classList.remove('text-gray-600');
    isHidden ? mobileMenu?.classList.add('text-gray-600'): mobileMenu?.classList.remove('text-gray-600');
    isHidden ? mobileMenu?.classList.remove('hidden') : mobileMenu?.classList.add('hidden');

  }

  return (
    <header className="text-white body-font fixed w-full z-50 gradient" id="navbar">
      <nav className="flex items-center justify-between flex-wrap gradient py-6 px-2 fixed w-full z-10 top-0" id="internalNav">
        {/* Title */}
        <div className="flex items-center flex-shrink-0 ">
          <a className=" no-underline hover: hover:no-underline" href="#home">

            <img id="pairoWhite" className="object-fill h-20 w-54 pl-2 show" src="/images/pairoLogoBlanco.png"  alt="pairoDevops"/>
            <img id="pairoColor" className="object-fill h-20 w-54 pl-2 hidden" src="/images/pairoLogoColor.png"  alt="pairoDevops"/>

            {/* <span className="text-2xl pl-2"><i className="em em-grinning" /> PairoDevops</span> */}
          </a>
        </div>
        {/* END Title */}

        {/* Contacto */}
        <div className="inline-flex md:ml-40">
        <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=info@pairodevops.com">
            <svg version="1.1" width={25} height={25} className="fill-current" id="gmail" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 92.12" xmlSpace="preserve">
              <path className="st4" d="M8.36,92.12h19.54V44.67L0,23.76v60.08C0,88.42,3.78,92.12,8.36,92.12L8.36,92.12z" />
              <path className="st3" d="M94.97,92.12h19.54c4.67,0,8.36-3.78,8.36-8.36v-60L94.97,44.67V92.12L94.97,92.12z" />
              <path className="st2" d="M94.97,8.4v36.27l27.91-20.91V12.58c0-10.37-11.82-16.25-20.11-10.05L94.97,8.4L94.97,8.4z" />
              <polygon className="st0" points="27.9,44.67 27.9,8.4 61.44,33.57 94.97,8.4 94.97,44.67 61.44,69.76 27.9,44.67" />
              <path className="st1" d="M0,12.58v11.18l27.91,20.91V8.4l-7.8-5.87C11.82-3.66,0,2.29,0,12.58L0,12.58z" />
            </svg>
          </a>
          <a href="https://api.whatsapp.com/send?phone=+541168513530" className="ml-6">
            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width={25} height={25} shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" viewBox="0 0 640 640">
              <path d="M546.704 91.89C486.526 31.584 406.482-1.582 321.229-1.582 145.609-1.583 2.67 141.368 2.67 317.118c0 56.139 14.705 111.05 42.567 159.297L.001 641.595l168.959-44.34c46.595 25.382 99.013 38.835 152.222 38.835h.13C496.944 636.09 640 493.14 640 317.401c0-85.182-33.166-165.179-93.344-225.463l.047-.047zM321.323 582.315c-47.599 0-94.218-12.827-134.895-36.957l-9.697-5.788-100.265 26.257 26.776-97.726-6.272-10.04C70.312 415.965 56.4 367.244 56.4 317.13c0-146.082 118.832-264.96 265.066-264.96 70.713 0 137.328 27.65 187.302 77.622 49.996 50.127 77.493 116.588 77.493 187.42-.118 146.187-118.95 265.066-264.96 265.066l.024.036zM466.541 383.85c-7.913-4.028-47.115-23.233-54.39-25.89-7.276-2.658-12.58-4.028-17.977 4.027-5.268 7.914-20.587 25.89-25.252 31.265-4.666 5.28-9.284 6.035-17.197 2.008-7.914-4.028-33.674-12.426-64.064-39.568-23.634-21.095-39.662-47.221-44.328-55.134-4.665-7.914-.52-12.308 3.532-16.193 3.661-3.544 7.925-9.284 11.941-13.95 4.028-4.665 5.28-7.925 7.925-13.31 2.658-5.28 1.359-9.946-.637-13.95-2.008-4.015-17.977-43.217-24.485-59.185-6.39-15.603-13.063-13.43-17.965-13.701-4.665-.237-9.945-.237-15.2-.237-5.257 0-13.95 1.996-21.225 9.933-7.276 7.914-27.898 27.26-27.898 66.45 0 39.201 28.512 77.009 32.516 82.407 4.027 5.267 56.162 85.784 136.029 120.238 18.98 8.161 33.803 13.063 45.355 16.854 19.098 6.024 36.425 5.15 50.126 3.13 15.32-2.256 47.115-19.229 53.788-37.831 6.662-18.615 6.662-34.536 4.666-37.831-1.89-3.544-7.158-5.504-15.201-9.58l-.06.048z" />
            </svg>
          </a>
          </div>
        {/* END Contacto */}


        {/* Button */}
        <div className="block lg:hidden">
          <button id="nav-toggle" className="flex items-center px-3 py-2 border rounded border-gray-600 hover:border-white" onClick={toggleMenu}>
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        {/* END Button */}

        <div className="w-full lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0" id="nav-content">
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <a className="inline-block no-underline focus:text-white hover:text-underline py-2 px-4" href="#services">Servicios</a>
            </li>
            <li className="mr-3">
              <a className="inline-block no-underline focus:text-white hover:text-underline py-2 px-4" href="#planes">Planes</a>
            </li>
            <li className="mr-3">
              <a className="inline-block no-underline focus:text-white hover:text-underline py-2 px-4" href="#beneficios">Beneficios</a>
            </li>
            <li className="mr-3">
              <a className="inline-block no-underline focus:text-white hover:text-underline py-2 px-4" href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>

  );

}
