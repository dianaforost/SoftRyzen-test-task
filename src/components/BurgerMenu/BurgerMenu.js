"use client";
import { useEffect, useState } from "react";

import data from "@/data/data.json";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { burgerMenu } = data;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenuOnEscape = (event) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
      window.addEventListener("keydown", closeMenuOnEscape);
    } else {
      document.body.classList.remove("no-scroll");
      window.removeEventListener("keydown", closeMenuOnEscape);
    }
    return () => {
      document.body.classList.remove("no-scroll");
      window.removeEventListener("keydown", closeMenuOnEscape);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className="menu-button sm:hidden uppercase"
        onClick={toggleMenu}
      >
        Menu
      </button>
      <div
        className={`mobile-menu bg-menuColor fixed w-[100vw] h-[100vh] z-[999] top-[0] left-[0] backdrop-blur-[15px] sm:hidden ${
          isOpen ? "isOpen" : ""
        }`}
      >
        <div className="container z-[1] max-w-[280px] flex flex-col relative mt-[36px] mx-[auto] mb-[0]">
          <button
            type="button"
            className="close-button uppercase pt-[10px] text-[14px] font-normal leading-[17px] tracking-[0.1em] absolute right-[20px]"
            onClick={toggleMenu}
          >
            Close
          </button>
          <nav className="flex justify-center items-center h-[100dvh]">
            <ul className="flex flex-col gap-14 items-center">
              {burgerMenu.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.to}
                    className="link text-[18px] font-normal leading-[22px] tracking-[0.1em]"
                    onClick={toggleMenu}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
