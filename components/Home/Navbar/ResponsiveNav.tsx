"use client";
import React, { useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);

  // Open & Close Handlers
  const handleNavShow = () => setShowNav(true);
  const handleCloseNav = () => setShowNav(false);

  return (
    <div>
      {/* Desktop Navigation */}
      <Nav openNav={handleNavShow} />

      {/* Mobile Navigation (Rendered Only When Needed) */}
      {showNav && <MobileNav showNav={showNav} closeNav={handleCloseNav} />}
    </div>
  );
};

export default ResponsiveNav;
