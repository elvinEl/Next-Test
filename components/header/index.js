import React from "react";
import Link from "next/link";
import { FaPlayCircle } from "react-icons/fa";
import "./styles.css";
function Header() {
  return (
    <header className="header container fluid">
      <div className="headerWrapper">
        <Link className="logo" href="/">
          <FaPlayCircle /> NETFILMS
        </Link>
        <nav className="navigationMenu">
          <Link href="/">Movies</Link>
          <Link href="/">Series</Link>
          <Link href="/">Kids</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
