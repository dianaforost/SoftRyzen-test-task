"use client";
import Image from "next/image";
import { Link } from "react-scroll";

import data from "@/data/data.json";
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";

export default function Header() {
  const { header } = data;
  const { logo, links } = header;

  return (
    <header className="pt-[36px] text-white">
      <div className="container px-[20px] md:px-[15px] flex justify-between mx-[auto] my-[0] max-w-[480px] md:max-w-[1280px] sm:max-w-[704px]">
        <a href="#">
          <Image
            src="/img/Log.png"
            alt="Logo"
            width={59}
            height={21}
            priority={true}
          ></Image>
          <p className="logo">{logo}</p>
        </a>
        <nav className="sm:block hidden">
          <ul className="flex flex-row gap-14 sm:text-[14px] sm:leading-[17px] sm:tracking-[0.1em]">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  activeClass="active"
                  className="cursor-pointer hover:text-darkGrayColor focus:text-darkGrayColor transition duration-300"
                  href="/"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <BurgerMenu />
      </div>
    </header>
  );
}
