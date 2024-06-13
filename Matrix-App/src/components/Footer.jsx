import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWhatsapp,
  faTwitter,
  faInstagram,
  faLinkedin,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="text-white bg-transparent bg-opacity-20 backdrop-filter backdrop-blur-md">
      <hr className="my-8 border-gray-800" />
      <div className="container mx-auto py-8 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-green-500">Infinite Void.</h2>
            <p className="text-gray-400">
            विज्ञानकल्पनाभ्यां पूरितं च साक्षरम् ज्ञानम्।
            पुराणे संस्कृते युक्तम्, शिवभक्त्या सह सदा॥
            </p>
            <div className="flex mt-4">
              <a
                href="https://wa.me/+919216778386"
                className="mr-4 text-gray-400 hover:text-green-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faWhatsapp} size="lg" />
              </a>
              <a
                href="https://t.me/Rudram2"
                className="mr-4 text-gray-400 hover:text-green-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTelegram} size="lg" />
              </a>
              <a
                href="https://twitter.com/sakshamHKRM2"
                className="mr-4 text-gray-400 hover:text-green-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a
                href="https://www.instagram.com/saksham.hkrm/"
                className="mr-4 text-gray-400 hover:text-green-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a
                href="https://www.linkedin.com/in/saksham-agarwal-rudra-jaivishvnath/"
                className="mr-4 text-gray-400 hover:text-green-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-500">Useful Links</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <Link
                  to="home"
                  className="hover:text-green-500 cursor-pointer"
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="features"
                  className="hover:text-green-500 cursor-pointer"
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  Features
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="pricing"
                  className="hover:text-green-500 cursor-pointer"
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  Pricing
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="testimonials"
                  className="hover:text-green-500"
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-500">Contact Us</h3>
            <p className="text-gray-400 mb-2">
              Saksham.HKRM
            </p>
            <p className="text-gray-400 mb-2">Email: saksham.hkrm@example.com</p>
            <p className="text-gray-400">Phone: +91 9216778386</p>
          </div>
        </div>
        <hr className="my-8 border-gray-800" />
        <p className="text-center text-gray-400">
          &copy; {new Date().getFullYear()} HKRM. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
