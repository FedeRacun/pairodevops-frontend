import React, {useState} from 'react';
import Swal from 'sweetalert2';

const Team = () => {

  const [datos, setDatos] = useState({
    name: '',
    email: '',
    message: '',
    isLoading: false

  })

  const handleInputChange = (event: any) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    })
  }

  const enviarDatos = (event: any) => {
    event.preventDefault();
    setDatos({
      ...datos,
      isLoading: true
    })

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datos)
    };
    // fetch('https://pairodevops-backend.herokuapp.com/send-email', requestOptions)
    fetch('http://localhost:3600/send-email', requestOptions)
        .then(response => response.json())
        .then(() => {
          setDatos({
            name: '',
            email: '',
            message: '',
            isLoading: false
          });
          Swal.fire({
            title: 'Mensaje Enviado!',
            showConfirmButton: false,
            type: 'success',
            timer: 1600
          });
        })
        .catch( err => {
          console.error('Error al enviar formulario: ', err)
          Swal.fire({
            title: 'Error!',
            text: 'Lo sentimos, ocurrio un error al enviar el mensaje, prueba comunicarte por alguna de nuestras redes sociales',
            showConfirmButton: false,
            type: 'error',
            timer: 1600
          });
        });
  }


  return (
    <section className="text-white body-font relative gradient" id="contacto">
      <svg className="wave-top" viewBox="0 0 1439 147" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
          <g transform="translate(-1.000000, -14.000000)" fillRule="nonzero">
            <g className="wave" fill="#f8fafc">
              <path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z" />
            </g>
            <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
              <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001" />
                <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001" />
                <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" opacity="0.200000003" />
              </g>
            </g>
          </g>
        </g>
      </svg>
      <div className="container px-5 pt-8 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Contacto</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Puedes dejarnos tu consulta aquí o buscarnos por nuestras redes sociales.</p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form className="flex flex-wrap -m-2" onSubmit={enviarDatos} id="contact-form">
            <div className="w-full md:w-1/2 p-2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-white">Nombre</label>
                <input onChange={handleInputChange} type="text" id="name" name="name" value={datos.name} className="w-full bg-gray-100 rounded border border-gray-300 focus:border-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-2">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm text-white">Email</label>
                <input onChange={handleInputChange} type="email" id="email" name="email" value={datos.email} className="w-full bg-gray-100 rounded border border-gray-300 focus:border-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="message" className="leading-7 text-sm text-white">Mensaje</label>
                <textarea onChange={handleInputChange}  id="message" name="message" value={datos.message} className="w-full bg-gray-100 rounded border border-gray-300 focus:border-blue-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" defaultValue={""} />
              </div>
            </div>
            <div className="p-2 w-full">
              {datos.isLoading ?
              <button
              disabled={true}
              className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
              <svg className="fill-current text-white ml-2 mt-1 animate-spin" width="1.25rem" height="1.25rem" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.315 122.88" enableBackground="new 0 0 122.315 122.88" xmlSpace="preserve">
                  <g>
                    <path d="M94.754,14.534c8.844,0,16.014,7.17,16.014,16.012 c0,8.844-7.17,16.015-16.014,16.015c-8.843,0-16.013-7.17-16.013-16.015C78.741,21.704,85.911,14.534,94.754,14.534L94.754,14.534z M109.265,52.121c-7.205,0-13.049,5.844-13.049,13.048c0,7.207,5.844,13.049,13.049,13.051c7.207,0,13.051-5.844,13.051-13.051 C122.315,57.965,116.472,52.121,109.265,52.121L109.265,52.121z M94.135,89.903c-5.032,0-9.114,4.082-9.114,9.113 c0,5.032,4.082,9.114,9.114,9.114c5.031,0,9.113-4.082,9.113-9.114C103.248,93.985,99.166,89.903,94.135,89.903L94.135,89.903z M59.275,104.65c-5.032,0-9.114,4.081-9.114,9.113c0,5.034,4.082,9.116,9.114,9.116s9.113-4.082,9.113-9.116 C68.389,108.731,64.308,104.65,59.275,104.65L59.275,104.65z M23.652,90.86c-4.717,0-8.54,3.823-8.54,8.54 c0,4.715,3.823,8.54,8.54,8.54c4.714,0,8.538-3.825,8.538-8.54C32.19,94.684,28.366,90.86,23.652,90.86L23.652,90.86z M9.096,54.872C4.072,54.872,0,58.944,0,63.968c0,5.021,4.072,9.093,9.096,9.093c5.021,0,9.093-4.072,9.093-9.093 C18.189,58.944,14.116,54.872,9.096,54.872L9.096,54.872z M23.652,17.026c-6.354,0-11.508,5.155-11.508,11.509 s5.154,11.506,11.508,11.506s11.506-5.152,11.506-11.506S30.006,17.026,23.652,17.026L23.652,17.026z M59.341,0 c-7.651,0-13.858,6.205-13.858,13.855c0,7.651,6.207,13.856,13.858,13.856s13.856-6.205,13.856-13.856 C73.197,6.205,66.992,0,59.341,0L59.341,0z" />
                  </g>
                </svg>
              </button>
                : <button
                className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
                  Enviar
                </button>}
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <span className="inline-flex">
                <a href="https://www.linkedin.com/company/pairodevops/?originalSubdomain=ar" className="text-white">
                  <svg className="fill-current text-white" width="1.25rem" height="1.25rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333333 333333" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd">
                    <path d="M119066 107135h65865v33765l952 2c9173-16456 31602-33765 65046-33765 69550-2 82413 43280 82413 99584v114694l-68689 2V219745c0-24237-504-55437-35716-55437-35765 0-41245 26383-41245 53672v103438h-68626V107137zM71447 47613c0 19716-16000 35715-35716 35715S9 67328 9 47613c0-19716 16006-35716 35722-35716s35716 16000 35716 35716zM9 107135h71438v214281H9V107135z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/pairodevops/?hl=es-la" className="ml-4 text-white">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                    <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                  </svg>
                </a>
                <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=info@pairodevops.com" className="ml-4 text-white">
                  <svg version="1.1" width="1.25rem" height="1.25rem" className="fill-current text-white" id="gmail" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 92.12" xmlSpace="preserve">
                    <path className="st4" d="M8.36,92.12h19.54V44.67L0,23.76v60.08C0,88.42,3.78,92.12,8.36,92.12L8.36,92.12z" />
                    <path className="st3" d="M94.97,92.12h19.54c4.67,0,8.36-3.78,8.36-8.36v-60L94.97,44.67V92.12L94.97,92.12z" />
                    <path className="st2" d="M94.97,8.4v36.27l27.91-20.91V12.58c0-10.37-11.82-16.25-20.11-10.05L94.97,8.4L94.97,8.4z" />
                    <polygon className="st0" points="27.9,44.67 27.9,8.4 61.44,33.57 94.97,8.4 94.97,44.67 61.44,69.76 27.9,44.67" />
                    <path className="st1" d="M0,12.58v11.18l27.91,20.91V8.4l-7.8-5.87C11.82-3.66,0,2.29,0,12.58L0,12.58z" />
                  </svg>
                </a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Team;