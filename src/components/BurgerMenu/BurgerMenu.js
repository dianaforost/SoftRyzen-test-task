"use client";

import { useEffect, useState } from "react";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <button className="menu-button sm:hidden uppercase" onClick={toggleMenu}>
        Menu
      </button>
      <div className={`class w-[100vw] h-[100vh] ${isOpen ? "isOpen" : ""}`}>
        <div className="container z-[1] max-w-[280px] flex flex-col relative mt-[36px] mx-[auto] mb-[0]">
          <button
            className="close-button uppercase pt-[10px]"
            onClick={toggleMenu}
          >
            Close
          </button>
          <nav className="flex justify-center items-center h-[100dvh]">
            <ul className="flex flex-col gap-14 items-center">
              <li>
                <a
                  href="#about"
                  className="link font-normal"
                  onClick={toggleMenu}
                >
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="link" onClick={toggleMenu}>
                  Services
                </a>
              </li>
              <li>
                <a href="#career" className="link" onClick={toggleMenu}>
                  Career
                </a>
              </li>
              <li>
                <a href="#gallery" className="link" onClick={toggleMenu}>
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contacts" className="link" onClick={toggleMenu}>
                  Contacts
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
