import React from 'react'

export default function Footer() {

    return (

        <footer className="text-gray-700 body-font">
            <div className="container px-5 pt-8 pb-2 mx-auto flex items-center sm:flex-row flex-col">
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                    By: ©Federico Knispel —
                    <a href="/servicios" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">
                        <i>El sabor del encuentro...</i>
                    </a>
                </p>
            </div>
        </footer>
    )
}