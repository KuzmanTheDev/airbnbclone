import { useRouter } from "next/router";
import React from "react";
import Footer from "../Footer";
import Header from "../Header";

export default function Layout({ children, location, range, numberOfGuests }) {
  const router = useRouter();
  let placeholder = "Start your search";
  if (router.pathname === "/search") {
    placeholder = `${location} | ${range} | ${numberOfGuests} guests`;
  }
  return (
    <div>
      <header>
        <Header placeholder={placeholder} />
      </header>
      {children}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
