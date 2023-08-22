"use client";
import Image from "next/image";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <header className="pt-[36px] text-white">
      <div className="container md:px-[15px] flex justify-between mx-[auto] my-[0] max-w-[280px] md:max-w-[1280px] sm:max-w-[704px]">
        <a href="#">
          <Image src="/img/Log.png" alt="Logo" width={59} height={21}></Image>
          <p className="logo">CarpTravel</p>
        </a>
        <nav className="sm:block hidden">
          <ul className="flex flex-row gap-14 sm:text-[14px] sm:leading-[17px] sm:tracking-[0.1em]">
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                activeClass="active"
                className="cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="services"
                spy={true}
                smooth={true}
                duration={500}
                activeClass="active"
                className="cursor-pointer"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="career"
                spy={true}
                smooth={true}
                duration={700}
                activeClass="active"
                className="cursor-pointer"
              >
                Career
              </Link>
            </li>
            <li>
              <Link
                to="gallery"
                spy={true}
                smooth={true}
                duration={700}
                activeClass="active"
                className="cursor-pointer"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="contacts"
                spy={true}
                smooth={true}
                duration={700}
                activeClass="active"
                className="cursor-pointer"
              >
                Contacts
              </Link>
            </li>
          </ul>
        </nav>
        <BurgerMenu />
      </div>
    </header>
  );
}
