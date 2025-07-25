// src/components/common/AppNavbar.tsx

import { useState } from "react";
import { Button, Dropdown, Navbar } from "react-daisyui";
import { HiMenuAlt2 } from "react-icons/hi";
import { Link } from "react-router"; // make sure it's "react-router-dom", not just "react-router"
import { twMerge } from "tailwind-merge";

import Language from "@/components/common/Language";
import Megamenu from "@/components/common/MegaMenu";
import Theme from "@/components/common/Theme";

export default function AppNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navbar
        className={twMerge(
          "fixed z-20 bg-base-100",
          "border-b border-b-base-200",
        )}
      >
        <Navbar.Start>
          <Button
            aria-label="Open menu"
            color="ghost"
            onClick={() => setMenuOpen(true)}
            shape="circle"
          >
            <HiMenuAlt2 className="h-5 w-5" />
          </Button>

          <Link className="ml-2 text-2xl font-bold" to="/">
            {import.meta.env.VITE_APP_NAME}
          </Link>
        </Navbar.Start>

        <Navbar.End>
          <Language className="mr-1" />
          <Theme className="mr-1" />

          <Dropdown className="pr-3" end>
            <Dropdown.Toggle button={false}>
              <Button className="avatar" color="ghost" shape="circle">
                <div className="w-10 rounded-full">
                  <img
                    alt="Profile"
                    loading="lazy"
                    src="https://avatars.githubusercontent.com/u/21959017?s=400&u=1c2711bcd2713d682bf553835a6dce998c6fd49b&v=4"
                  />
                </div>
              </Button>
            </Dropdown.Toggle>

            <Dropdown.Menu className="menu-compact mt-3 w-52">
              <Dropdown.Item className="justify-between">
                Profile <span className="badge">New</span>
              </Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.End>
      </Navbar>
      <Megamenu onClose={() => setMenuOpen(false)} open={menuOpen} />
    </>
  );
}
