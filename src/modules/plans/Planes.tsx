import React from 'react';

export default function Price() {

  return (
    <section className="text-gray-700 body-font overflow-hidden" id="planes">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-col text-center w-full mb-16">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Planes</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base mb-6">Elja el nivel de plan mas conveniente para su empresa.</p>
          <small>
            *Se cobrará un mínimo de 5 horas de contratación
              </small>
          <small>
            *Una vez finalizado el abono se cobrará la hora pura
              </small>
        </div>
        <div className="flex flex-wrap m-4 justify-center">
          {/* Bronce */}
          <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium">Bronce</h2>
              <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                <span>$1300</span>
                <span className="text-lg ml-1 font-normal text-gray-500">x hs</span>
              </h1>
              <p className="flex items-start text-gray-600 mb-2">
                <span className="w-4 h-4 mt-1 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>Relevamiento e instalación de las herramientas necesarias para tu mejora continua.
                </p>
              <p className="flex items-start text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 mt-1 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>Evaluación sobre la metodología de trabajo.
                </p>
              <p className="flex items-start text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 mt-1 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>Devolución con mejoras a implementar.
                </p>
              <p className="flex items-start text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 mt-1 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>Creación de entornos locales/nube.
                </p>
              <div className="flex items-start text-gray-600 mb-1">
                <p>
                  <span className="w-4 h-4 mr-2 mt-1 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  <span>Instalación de servicios/herramientas necesarias : </span>
                </p>
              </div>
              <ul className="ml-10 list-disc mb-2 text-gray-600">
                <li>Microservicios</li>
                <li>Repositorios</li>
                <li>CI/CD</li>
                <li>Monitoreo</li>
                <li>Gestion</li>
              </ul>
              <p className="flex items-start text-gray-600 mb-6">
                <span className="w-4 h-4 mr-2 mt-1 inline-flex items-center justify-center text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" className="w-5 h-5 text-gray-500" viewBox="0 0 24 24">
                    <path d="M18 6L6 18M6 6l12 12"></path>
                  </svg>
                </span>Administración nivel infraestructura
                </p>
              <p className="flex items-start text-gray-600 mb-6">
                <span className="w-4 h-4 mr-2 mt-1 inline-flex items-center justify-center text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" className="w-5 h-5 text-gray-500" viewBox="0 0 24 24">
                    <path d="M18 6L6 18M6 6l12 12"></path>
                  </svg>
                </span>Soporte de herramientas y servicios
                </p>
              <p className="flex items-start text-gray-600 mb-6">
                <span className="w-4 h-4 mr-2 mt-1 inline-flex items-center justify-center text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" className="w-5 h-5 text-gray-500" viewBox="0 0 24 24">
                    <path d="M18 6L6 18M6 6l12 12"></path>
                  </svg>
                </span>Monitoreo y alerta 24/7
                </p>
              <p className="flex items-start text-gray-600 mb-6">
                <span className="w-4 h-4 mr-2 mt-1 inline-flex items-center justify-center text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" className="w-5 h-5 text-gray-500" viewBox="0 0 24 24">
                    <path d="M18 6L6 18M6 6l12 12"></path>
                  </svg>
                </span>Soporte Prioritario
                </p>
              <p className="flex items-start text-gray-600 mb-6">
                <span className="w-4 h-4 mr-2 mt-1 inline-flex items-center justify-center text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" className="w-5 h-5 text-gray-500" viewBox="0 0 24 24">
                    <path d="M18 6L6 18M6 6l12 12"></path>
                  </svg>
                </span>Seguridad
                </p>
              <p className="flex items-start text-gray-600 mb-6">
                <span className="w-4 h-4 mr-2 mt-1 inline-flex items-center justify-center text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" className="w-5 h-5 text-gray-500" viewBox="0 0 24 24">
                    <path d="M18 6L6 18M6 6l12 12"></path>
                  </svg>
                </span>Tareas preventivas
                </p>
              <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=info@pairodevops.com&su=Plan:%20Bronce&body=Quisiera%20m%C3%A1s%20informaci%C3%B3n%20acerca%20del%20plan%20bronce...">
                <button className="flex items-center mt-auto text-white bg-gray-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-600 rounded">Consultar
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </a>
            </div>
          </div>
          {/* Plata */}
          <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-blue-500 flex flex-col relative overflow-hidden">
              <span className="bg-blue-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium">Plata</h2>
              <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                <span>$1750</span>
                <span className="text-lg ml-1 font-normal text-gray-500">x hs</span>
              </h1>
              <p className="flex items-start text-gray-600 mb-2">
                <span className="w-4 h-4 mt-1 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>Relevamiento e instalación de las herramientas necesarias para tu mejora continua.
                </p>
              {/* Item 2 */}
              <p className="flex items-start text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 mt-1 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>Evaluación sobre la metodología de trabajo.
                </p>
              <p className="flex items-start text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 mt-1 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>Devolución con mejoras a implementar.
                </p>
              <p className="flex items-start text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 mt-1 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>Creación de entornos locales/nube.
                </p>
              <div className="flex items-start text-gray-600 mb-1">
                <p>
                  <span className="w-4 h-4 mr-2 mt-1 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  <span>Instalación de servicios/herramientas necesarias : </span>
                </p>
              </div>
              <ul className="ml-10 list-disc mb-2 text-gray-600">
                <li>Microservicios</li>
                <li>Repositorios</li>
                <li>CI/CD</li>
                <li>Monitoreo</li>
                <li>Gestion</li>
              </ul>
              <p className="flex items-start text-gray-600 mb-6">
                <span className="w-4 h-4 mr-2 mt-1 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>Administración nivel infraestructura
                </p>
              <p className="flex items-start text-gray-600 mb-6">
                <span className="w-4 h-4 mr-2 mt-1 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>Soporte de herramientas y servicios
                </p>

              <p className="flex items-start text-gray-600 mb-6">
                <span className="w-4 h-4 mr-2 mt-1 inline-flex items-center justify-center text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" className="w-5 h-5 text-gray-500" viewBox="0 0 24 24">
                    <path d="M18 6L6 18M6 6l12 12"></path>
                  </svg>
                </span>Monitoreo y alerta 24/7
                </p>
              <p className="flex items-start text-gray-600 mb-6">
                <span className="w-4 h-4 mr-2 mt-1 inline-flex items-center justify-center text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" className="w-5 h-5 text-gray-500" viewBox="0 0 24 24">
                    <path d="M18 6L6 18M6 6l12 12"></path>
                  </svg>
                </span>Soporte Prioritario
                </p>
              <p className="flex items-start text-gray-600 mb-6">
                <span className="w-4 h-4 mr-2 mt-1 inline-flex items-center justify-center text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" className="w-5 h-5 text-gray-500" viewBox="0 0 24 24">
                    <path d="M18 6L6 18M6 6l12 12"></path>
                  </svg>
                </span>Seguridad
                </p>
              <p className="flex items-start text-gray-600 mb-6">
                <span className="w-4 h-4 mr-2 mt-1 inline-flex items-center justify-center text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" className="w-5 h-5 text-gray-500" viewBox="0 0 24 24">
                    <path d="M18 6L6 18M6 6l12 12"></path>
                  </svg>
                </span>Tareas preventivas
                </p>
              <a className="pb-6 border-b border-gray-200" href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=info@pairodevops.com&su=Plan:%20plata&body=Quisiera%20m%C3%A1s%20informaci%C3%B3n%20acerca%20del%20plan%20plata...">
                <button className="flex items-center mt-auto text-white bg-blue-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-blue-600 rounded">Consultar
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </a>
              <span>
                <p>Promoción 10% off</p>
                <p>Abono 20 horas x mes: $31.500</p>
                <p>Abono 40 horas x mes: $63.000</p>
                <p>Consultar por mas abonos...</p>
              </span>
            </div>
          </div>
          {/* Oro */}
          <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium">Oro</h2>
              <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                <span>$2250</span>
                <span className="text-lg ml-1 font-normal text-gray-500">x hs</span>
              </h1>
              <p className="flex items-start text-gray-600 mb-2">
                <span className="w-4 h-4 mt-1 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>Relevamiento e instalación de las herramientas necesarias para tu mejora continua.
                </p>
              {/* Item 2 */}
              <p className="flex items-start text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 mt-1 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>Evaluación sobre la metodología de trabajo.
                </p>
              <p className="flex items-start text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 mt-1 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>Devolución con mejoras a implementar.
                </p>
              <p className="flex items-start text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 mt-1 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>Creación de entornos locales/nube.
                </p>
              <div className="flex items-start text-gray-600 mb-1">
                <p>
                  <span className="w-4 h-4 mr-2 mt-1 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  <span>Instalación de servicios/herramientas necesarias : </span>
                </p>
              </div>
              <ul className="ml-10 list-disc mb-2 text-gray-600 mb-">
                <li>Microservicios</li>
                <li>Repositorios</li>
                <li>CI/CD</li>
                <li>Monitoreo</li>
                <li>Gestion</li>
              </ul>
              <p className="flex items-start text-gray-600 mb-6">
                <span className="w-4 h-4 mr-2 mt-1 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>Administración nivel infraestructura
                </p>
              <p className="flex items-start text-gray-600 mb-6">
                <span className="w-4 h-4 mr-2 mt-1 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>Soporte de herramientas y servicios
                </p>

              <p className="flex items-start text-gray-600 mb-6">
                <span className="w-4 h-4 mr-2 mt-1 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>Monitoreo y alerta 24/7
                </p>
              <p className="flex items-start text-gray-600 mb-6">
                <span className="w-4 h-4 mr-2 mt-1 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>Soporte Prioritario
                </p>
              <p className="flex items-start text-gray-600 mb-6">
                <span className="w-4 h-4 mr-2 mt-1 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>Seguridad
                </p>
              <p className="flex items-start text-gray-600 mb-6">
                <span className="w-4 h-4 mr-2 mt-1 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>Tareas preventivas
                </p>
              <a className="pb-6 border-b border-gray-200" href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=info@pairodevops.com&su=Plan:%20oro&body=Quisiera%20m%C3%A1s%20informaci%C3%B3n%20acerca%20del%20plan%20oro... ">
                <button className="flex items-center mt-auto text-white bg-gray-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-600 rounded">Consultar
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </a>
              <span>
                <p>Promoción 10% off</p>
                <p>Abono 20 horas x mes: $40.500</p>
                <p>Abono 40 horas x mes: $81.000</p>
                <p>Consultar por mas abonos...</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}