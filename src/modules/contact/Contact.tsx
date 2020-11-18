import React from 'react'

export default function Team() {
  return (
    <section className="text-gray-700 body-font relative" id="contacto">
      <div className="container px-5 pt-8 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contacto</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Puedes dejarnos tu consulta aquí o buscarnos por nuestras redes sociales.</p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                <input type="text" id="name" name="name" className="w-full bg-gray-100 rounded border border-gray-300 focus:border-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input type="email" id="email" name="email" className="w-full bg-gray-100 rounded border border-gray-300 focus:border-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                <textarea id="message" name="message" className="w-full bg-gray-100 rounded border border-gray-300 focus:border-blue-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" defaultValue={""} />
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Enviar</button>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <span className="inline-flex">
                <a href="https://www.linkedin.com/company/pairodevops/?originalSubdomain=ar" className="text-gray-500">
                  <svg className="fill-current text-gray-500" width="1.25rem" height="1.25rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333333 333333" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd">
                    <path d="M119066 107135h65865v33765l952 2c9173-16456 31602-33765 65046-33765 69550-2 82413 43280 82413 99584v114694l-68689 2V219745c0-24237-504-55437-35716-55437-35765 0-41245 26383-41245 53672v103438h-68626V107137zM71447 47613c0 19716-16000 35715-35716 35715S9 67328 9 47613c0-19716 16006-35716 35722-35716s35716 16000 35716 35716zM9 107135h71438v214281H9V107135z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/pairodevops/?hl=es-la" className="ml-4 text-gray-500">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                    <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                  </svg>
                </a>
                <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=info@pairodevops.com" className="ml-4 text-gray-500">
                  <svg version="1.1" width="1.25rem" height="1.25rem" className="fill-current text-gray-500" id="gmail" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 92.12" xmlSpace="preserve">
                    <path className="st4" d="M8.36,92.12h19.54V44.67L0,23.76v60.08C0,88.42,3.78,92.12,8.36,92.12L8.36,92.12z" />
                    <path className="st3" d="M94.97,92.12h19.54c4.67,0,8.36-3.78,8.36-8.36v-60L94.97,44.67V92.12L94.97,92.12z" />
                    <path className="st2" d="M94.97,8.4v36.27l27.91-20.91V12.58c0-10.37-11.82-16.25-20.11-10.05L94.97,8.4L94.97,8.4z" />
                    <polygon className="st0" points="27.9,44.67 27.9,8.4 61.44,33.57 94.97,8.4 94.97,44.67 61.44,69.76 27.9,44.67" />
                    <path className="st1" d="M0,12.58v11.18l27.91,20.91V8.4l-7.8-5.87C11.82-3.66,0,2.29,0,12.58L0,12.58z" />
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}