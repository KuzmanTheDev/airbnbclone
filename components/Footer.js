import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="grid grid-cols-1 pl-10 gap-y-10  py-14 bg-gray-200 text-gray-600 md:px-32 md:grid-cols-3">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb Works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>Not a real site</p>
        <p>It's a neat clone</p>
        <p>Peep my other works</p>
        <div style={{ marginTop: "16px" }} className="hover:font-semibold">
          <Link href="https://kuzmanthedev.netlify.app">
            <a>Here</a>
          </Link>
        </div>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Centre</p>
        <p>Policy</p>
        <p>Terms & Safety</p>
        <p>COVID guidelines</p>
        <p>Built with Tailwind</p>
      </div>
    </div>
  );
}
