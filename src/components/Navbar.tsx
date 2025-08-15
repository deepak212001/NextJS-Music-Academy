"use client";
// now they client component
//ye navbar ka ui ->  Aceternity UI se

import React, { useState } from "react";
import Link from "next/link";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"} className="text-black dark:text-white">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/#">Basic Music Theory</HoveredLink>
            <HoveredLink href="/#">Advanced Composition</HoveredLink>
            <HoveredLink href="/#">Softsong</HoveredLink>
            <HoveredLink href="/#">Music Production</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contact"} className="text-black dark:text-white">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
