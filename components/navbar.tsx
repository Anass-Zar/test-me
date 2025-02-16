import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="w-full flex justify-between items-center p-4">
      <h1>Navbar</h1>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/pricing">Pricing</Link>
          </li>
          <li>
            <Link href="/why">Why</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
    </div>
  );
}
