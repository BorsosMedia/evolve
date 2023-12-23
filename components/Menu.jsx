"use client";

import { useState } from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NextUIProvider,
} from "@nextui-org/react";
import Image from "next/image";

import RedButton from "./RedButton";
import logo from "../public/assets/logo.png";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <NextUIProvider>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        className="navbar"
        maxWidth="full"
      >
        <NavbarContent
          className="hidden w-full justify-evenly gap-4 md:flex"
          justify="evenly"
        >
          <NavbarItem>
            <NavbarBrand>
              <Link href="#">
                <Image src={logo} alt="logo" className="logo" />
              </Link>
            </NavbarBrand>
          </NavbarItem>
          <NavbarItem>
            <Link href="#coaching" className="nav-item">
              Coaching Plans
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#evolve" className="nav-item">
              Clients Evolve
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#about" className="nav-item">
              About Me
            </Link>
          </NavbarItem>
          <NavbarItem>
            <RedButton to="#inquiry" content="Start an inquiry" />
          </NavbarItem>
        </NavbarContent>
        <NavbarContent>
          <NavbarBrand>
            <Link href="#">
              <Image src={logo} alt="logo" className="logo md:hidden" />
            </Link>
          </NavbarBrand>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden"
          />
        </NavbarContent>
        <NavbarMenu className="h-full items-center justify-evenly bg-black/60">
          <NavbarMenuItem>
            <Link href="#coaching" className="nav-item" size="lg">
              Coaching Plans
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="#evolve" className="nav-item" size="lg">
              Clients Evolve
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="#about" className="nav-item" size="lg">
              About Me
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <RedButton to="#inquiry" content="Start an inquiry" />
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </NextUIProvider>
  );
};

export default Menu;
