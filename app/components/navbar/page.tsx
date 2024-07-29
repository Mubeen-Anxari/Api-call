import React from "react";
import Link from "next/link";
export default function Navbar() {
  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg font-bold">
            <Link href="/"> My-LOgo</Link>
          </div>
          <div className="space-x-4">
            <Link
              className="text-white font-bold hover:text-white"
              href="/cart"
            >
              Cart
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
