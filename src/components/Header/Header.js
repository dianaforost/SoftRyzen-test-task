"use client";
import Image from "next/image";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

export default function Header() {
  return (
    <header className="header pt-[36px] md:bg-headerBg">
      <div className="container flex justify-between mx-[auto] my-[0]">
        <a href="#">
          <Image src="/img/Log.png" alt="Logo" width={59} height={21}></Image>
          <p className="logo">CarpTravel</p>
        </a>
        <nav className="sm:block hidden">
          <ul className="flex flex-row gap-14">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#career">Career</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="#contacts">Contacts</a>
            </li>
          </ul>
        </nav>
        <BurgerMenu />
      </div>
    </header>
  );
}
