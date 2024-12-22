import React, { useContext } from "react";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="contact"
      className={
        theme.state.darkMode ? "pb-10 pt-5 bg-fixed bg-gray-100" : "pb-10 pt-5 bg-fixed bg-black"
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
        {/* <h2 className="text-3xl font-bold">Contact</h2> */}
        <h2 className={theme.state.darkMode ? "text-3xl font-bold" : "text-3xl font-bold text-white"} >
          Contact
        </h2>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        {/* Email Section */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className={theme.state.darkMode ? "text-xl font-bold": "text-xl font-bold text-white"}>Email</h1>
          <a
            href="mailto:adilansari488@gmail.com"
            className="font-semibold text-blue-700 block"
          >
            adilansari488@gmail.com
          </a>
        </div>

        {/* Address Section */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className={theme.state.darkMode ? "text-xl font-bold": "text-xl font-bold text-white"}>Location</h1>
          <p className="font-semibold text-blue-700">
            Agra, India
          </p>
        </div>

        {/* Social Links */}
        <div className="text-center md:text-left">
          <h1 className={theme.state.darkMode ? "text-xl font-bold": "text-xl font-bold text-white"}>Social</h1>
          <ul className="flex justify-center md:justify-start space-x-6 mt-2">
            {contactLinks.map((el, index) => (
              <li key={index}>
                <a
                  href={el.link}
                  className="cursor-pointer hover:scale-110 transition-transform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={theme.state.darkMode ? el.url: el.darkUrl}  alt={el.name} className="w-6 h-6" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
