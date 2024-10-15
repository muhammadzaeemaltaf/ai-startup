"use client";

import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import Link from "next/link";
import { useState } from "react";
import Button from "@/components/Button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10 backdrop-blur md:backdrop-blur-none">
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto md:backdrop-blur">
          <div>
            <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15">
              <LogoIcon className="h-8 w-8" />
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              <Link
                className="text-white/70 hover:text-white transition"
                href={"#"}
              >
                Feature
              </Link>
              <Link
                className="text-white/70 hover:text-white transition"
                href={"#"}
              >
                Developer
              </Link>
              <Link
                className="text-white/70 hover:text-white transition"
                href={"#"}
              >
                Pricing
              </Link>
              <Link
                className="text-white/70 hover:text-white transition"
                href={"#"}
              >
                Changelog
              </Link>
            </nav>
          </div>
          <div className="flex gap-4 items-center">
            <Button>Join waitlist</Button>
            <MenuIcon className="md:hidden cursor-pointer" onClick={toggleMenu} />
          </div>
        </div>
      </div>
      <div
          className={`md:hidden w-full absolute mt-4 bg-black/50 transition-all  duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {/* <div className="absolute inset-0 -z-10"></div> */}
          <nav className="container  flex flex-col justify-start gap-1 text-sm p-2 ">
            <Link className="text-white/70 hover:text-white transition py-2 pl-1 rounded-md cursor-pointer hover:bg-white/10" href={"#"}>Feature</Link>
            <Link className="text-white/70 hover:text-white transition py-2 pl-1 rounded-md cursor-pointer hover:bg-white/10" href={"#"}>Developer</Link>
            <Link className="text-white/70 hover:text-white transition py-2 pl-1 rounded-md cursor-pointer hover:bg-white/10" href={"#"}>Pricing</Link>
            <Link className="text-white/70 hover:text-white transition py-2 pl-1 rounded-md cursor-pointer hover:bg-white/10" href={"#"}>Changelog</Link>
          </nav>
        </div>
    </header>
  );
};
