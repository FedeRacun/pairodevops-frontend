import React from 'react'

export default function Footer() {

    return (

        <footer className="text-gray-700 body-font">
            <div className="container px-5 pt-6 pb-1 mx-auto flex items-center sm:flex-row flex-col">
                <a href="https://www.linkedin.com/in/knispelfederico/" className="hidden md:flex">
                    <img id="developer-logo" className="h-10 w-10" src="/images/knispelLogo.png" alt="Frontend Developer" width={40} height={40}/>
                </a>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                    By: ©Federico Knispel —
                    <a href="https://www.linkedin.com/in/knispelfederico/" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">
                        <i>Frontend Dev</i>
                    </a>
                </p>
            </div>
        </footer>
    )
}