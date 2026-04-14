import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Rooms", to: "/rooms" },
    { name: "Gallery", to: "/gallery" },
    { name: "Services", to: "/services" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12">
        <Link to="/" className="flex items-center gap-2">
          <div className={`text-2xl font-display font-bold tracking-wider transition-colors ${
            scrolled ? "text-[#1a1a1a]" : "text-white"
          }`}>
            AL<span className="text-[#b8860b]">RIAZ</span>
          </div>
          <div className={`text-xs tracking-[0.3em] uppercase transition-colors ${
            scrolled ? "text-[#666]" : "text-white/70"
          }`}>
            Hotel
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                to={link.to}
                className={`px-4 py-2 text-sm font-medium tracking-wider uppercase transition-all duration-300 relative group ${
                  scrolled
                    ? "text-[#1a1a1a] hover:text-[#b8860b]"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#b8860b] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          {user ? (
            <>
              {user.role === 'admin' && (
                <Link
                  to="/admin"
                  className={`px-5 py-2.5 text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
                    scrolled
                      ? "text-[#1a1a1a] hover:text-[#b8860b]"
                      : "text-white hover:text-[#b8860b]"
                  }`}
                >
                  Dashboard
                </Link>
              )}
              <span className={`text-sm font-medium ${scrolled ? "text-[#1a1a1a]" : "text-white"}`}>
                {user.name}
              </span>
              <button
                onClick={logout}
                className="px-5 py-2.5 text-xs font-medium tracking-wider uppercase bg-[#b8860b] text-[#1a1a1a] hover:bg-[#9a7b3f] transition-all duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className={`px-5 py-2.5 text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
                  scrolled
                    ? "text-[#1a1a1a] hover:text-[#b8860b]"
                    : "text-white hover:text-[#b8860b]"
                }`}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-6 py-2.5 text-xs font-medium tracking-wider uppercase bg-[#b8860b] text-[#1a1a1a] hover:bg-[#9a7b3f] transition-all duration-300"
              >
                Book Now
              </Link>
            </>
          )}
        </div>

        <button 
          className={`lg:hidden p-2 transition-colors ${scrolled ? "text-[#1a1a1a]" : "text-white"}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white shadow-2xl">
          <ul className="flex flex-col items-center py-8 space-y-4">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className="px-6 py-3 text-sm font-medium tracking-wider uppercase text-[#1a1a1a] hover:text-[#b8860b] transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            {user ? (
              <>
                {user.role === 'admin' && (
                  <li>
                    <Link
                      to="/admin"
                      onClick={() => setMenuOpen(false)}
                      className="px-6 py-3 text-sm font-medium tracking-wider uppercase text-[#1a1a1a] hover:text-[#b8860b]"
                    >
                      Dashboard
                    </Link>
                  </li>
                )}
                <li>
                  <button 
                    onClick={() => { logout(); setMenuOpen(false); }} 
                    className="px-6 py-3 text-sm font-medium tracking-wider uppercase text-[#b8860b]"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link 
                    to="/login" 
                    onClick={() => setMenuOpen(false)} 
                    className="px-6 py-3 text-sm font-medium tracking-wider uppercase text-[#1a1a1a] hover:text-[#b8860b]"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/register" 
                    onClick={() => setMenuOpen(false)} 
                    className="px-8 py-3 text-xs font-medium tracking-wider uppercase bg-[#b8860b] text-[#1a1a1a]"
                  >
                    Book Now
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;