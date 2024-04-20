import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Logo from './logo';

export default function AboveNavbar() {
  return (
      <nav className="flex items-center justify-center sticky bg-gray-800 text-white rounded-lg shadow-inner shadow-lg m-auto p-4 w-full">
        <Logo/>
        <a href="#" className="inline-block">
          <FontAwesomeIcon icon={faGithub} size="2x" className="ml-4" />
        </a>
        <ul className="ml-16 inline-flex space-x-4 md:space-x-8 lg:space-x-12"> 
          <li>
            <a href="https://viewsphere.vercel.app/" className="hover:bg-yellow-300 hover:text-gray-800 transition-colors duration-300 rounded-lg p-2">Meeting Home</a>
          </li>
          <li>
            <a href="https://viewsphere.vercel.app/upcoming" className="hover:bg-yellow-300 hover:text-gray-800 transition-colors duration-300 rounded-lg p-2">Upcoming</a>
          </li>
          <li>
            <a href="https://viewsphere.vercel.app/previous" className="hover:bg-yellow-300 hover:text-gray-800 transition-colors duration-300 rounded-lg p-2">Previous</a>
          </li>
          <li>
            <a href="https://viewsphere.vercel.app/recordings" className="hover:bg-yellow-300 hover:text-gray-800 transition-colors duration-300 rounded-lg p-2">Recording</a>
          </li>
          <li>
            <a href="https://viewsphere.vercel.app/personal-room" className="hover:bg-yellow-300 hover:text-gray-800 transition-colors duration-300 rounded-lg p-2">Personal Room</a>
          </li>
        </ul>
      </nav>
  );
}
