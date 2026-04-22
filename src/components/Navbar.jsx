import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 || isAuthPage) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isAuthPage]);

  const links = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Rooms", to: "/rooms" },
    { name: "Gallery", to: "/gallery" },
    { name: "Services", to: "/services" },
    { name: "Owner", to: "/owner" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/92 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.05)] py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex justify-between items-center px-6 md:px-12">
        <img src="/Hotel Al Riaz.jpeg" alt="Hotel Logo" className="h-8 md:h-10 rounded-xl" />
        <ul className="hidden lg:flex items-center gap-0.5">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                to={link.to}
                className={`relative px-4 py-2 text-[13px] font-medium tracking-[0.08em] uppercase transition-all duration-300 ${
                  scrolled
                    ? "text-[#0a0a0a] hover:text-[#0d9488]"
                    : "text-white/80 hover:text-white"
                }`}
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {link.name}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#0d9488] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          {user ? (
            <>
              {user.role === 'admin' && (
                <Link
                  to="/admin"
                  className={`px-4 py-2 text-[11px] font-semibold tracking-[0.12em] uppercase transition-all duration-300 ${
                    scrolled
                      ? "text-[#0a0a0a] hover:text-[#0d9488]"
                      : "text-white hover:text-[#0d9488]"
                  }`}
                >
                  Dashboard
                </Link>
              )}
              <span className={`text-[13px] font-medium ${scrolled ? "text-[#0a0a0a]" : "text-white"}`}>
                {user.name}
              </span>
              <button
                onClick={logout}
                className="px-5 py-2.5 text-[11px] font-semibold tracking-[0.12em] uppercase bg-[#0d9488] text-[#0a0a0a] hover:bg-[#b89b54] transition-all duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className={`px-4 py-2 text-[11px] font-semibold tracking-[0.12em] uppercase transition-all duration-300 ${
                  scrolled
                    ? "text-[#0a0a0a] hover:text-[#0d9488]"
                    : "text-white hover:text-[#0d9488]"
                }`}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-6 py-2.5 text-[11px] font-semibold tracking-[0.12em] uppercase bg-[#0d9488] text-[#0a0a0a] hover:bg-[#b89b54] transition-all duration-300"
              >
                Book Now
              </Link>
            </>
          )}
        </div>

        <button 
          className={`lg:hidden p-2 transition-colors ${scrolled ? "text-[#0a0a0a]" : "text-white"}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white shadow-2xl">
          <ul className="flex flex-col items-center py-8 space-y-1">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className="px-6 py-3 text-[13px] font-semibold tracking-[0.08em] uppercase text-[#0a0a0a] hover:text-[#0d9488] transition-colors"
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
                      className="px-6 py-3 text-[13px] font-semibold tracking-[0.08em] uppercase text-[#0a0a0a] hover:text-[#0d9488]"
                    >
                      Dashboard
                    </Link>
                  </li>
                )}
                <li>
                  <button 
                    onClick={() => { logout(); setMenuOpen(false); }} 
                    className="px-6 py-3 text-[13px] font-semibold tracking-[0.08em] uppercase text-[#0d9488]"
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
                    className="px-6 py-3 text-[13px] font-semibold tracking-[0.08em] uppercase text-[#0a0a0a] hover:text-[#0d9488]"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/register" 
                    onClick={() => setMenuOpen(false)} 
                    className="px-8 py-3 mt-2 text-[11px] font-semibold tracking-[0.12em] uppercase bg-[#0d9488] text-[#0a0a0a]"
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