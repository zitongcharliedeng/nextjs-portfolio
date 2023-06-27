import React from "react";
import Link from "next/link";
import { Button } from "@nextui-org/button";

export default function Header() {
  return (
    <header>
      <p> This is a header. </p>
      <nav className="flex flex-row align-middle justify-between bg-gray-800 text-white px-4 py-2">
        <a className="">My Website</a>
        <ul className="flex flex-row space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
        </ul>
        <Button>🌞/🌑</Button>;
      </nav>
    </header>
  );
}
