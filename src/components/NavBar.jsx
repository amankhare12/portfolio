import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import cn from "@/lib/utils";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItem = [
  { name: "Home", href: "/", isHash: false },
  { name: "About", href: "#about", isHash: true },
  { name: "Skills", href: "#skills", isHash: true },
  { name: "Projects", href: "#projects", isHash: true },
  { name: "Git Workflow", href: "/git-workflow", isHash: false },
  { name: "Contact", href: "#contact", isHash: true },
]
const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle hash navigation when route changes
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location])

  const handleHashClick = (e, hash) => {
    e.preventDefault();
    
    if (location.pathname === '/') {
      // Already on home page, just scroll
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page first
      navigate('/');
      // Then scroll to the section after navigation completes
      // Use multiple attempts to ensure element is available (max 10 retries)
      let attempts = 0;
      const maxAttempts = 10;
      const scrollToSection = () => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else if (attempts < maxAttempts) {
          attempts++;
          setTimeout(scrollToSection, 50);
        }
      };
      setTimeout(scrollToSection, 150);
    }
    setIsMenuOpen(false);
  }

  const handleHomeClick = (e) => {
    if (location.pathname === '/') {
      // Already on home page, scroll to top
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // If on different page, Link will handle navigation
    setIsMenuOpen(false);
  }

  return (
    <nav className={cn("fixed w-full z-40 transition-all duration-300",
      isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
    )}>
      <div className="container flex items-center justify-between">
        <Link
          to="/"
          onClick={handleHomeClick}
          className="text-xl font-bold text-primary flex items-center gap-3"
        >
          <span className="relative z-10">
            <img className="w-9 h-9 rounded-sm" src="/logo/Logo6.png" alt="" srcset="" />
          </span>
          <span className="relative z-10">
            <span className="text-glow text-foreground">Aman</span>Khare
          </span>
        </Link>

        {/*desktop nav */}

        <div className="hidden md:flex space-x-8 items-center">
          {navItem.map((item, key) => (
            item.isHash ? (
              <a
                key={key}
                href={item.href}
                onClick={(e) => handleHashClick(e, item.href)}
                className="text-foreground/80 hover:text-primary transition-colors duration-200 cursor-pointer"
              >
                {item.name}
              </a>
            ) : item.href === '/' ? (
              <Link
                key={key}
                to={item.href}
                onClick={handleHomeClick}
                className="text-foreground/80 hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </Link>
            ) : (
              <Link
                key={key}
                to={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </Link>
            )
          ))}
          
          {/* <div className="flex items-center justify-center hover:bg-primary/50 p-1 rounded-full transition-all duration-300 cursor-pointer">
            <ThemeToggle />
          </div> */}
        </div>
        {/*mobile nav */}

        <div className="flex md:hidden gap-2">
          {/* <div className="flex md:hidden hover:bg-primary/50 px-2 rounded-full transition-all duration-300">
            <ThemeToggle />
          </div> */}

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground z-50"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

        <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
          "transition-all duration-300 md:hidden",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}>
          <div className="flex flex-col space-y-8 text-xl">
            {navItem.map((item, key) => (
              item.isHash ? (
                <a
                  key={key}
                  href={item.href}
                  onClick={(e) => handleHashClick(e, item.href)}
                  className="text-foreground/80 hover:text-primary transition-colors duration-200 cursor-pointer"
                >
                  {item.name}
                </a>
              ) : item.href === '/' ? (
                <Link
                  key={key}
                  to={item.href}
                  onClick={(e) => {
                    handleHomeClick(e);
                    setIsMenuOpen(false);
                  }}
                  className="text-foreground/80 hover:text-primary transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ) : (
                <Link
                  key={key}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-foreground/80 hover:text-primary transition-colors duration-200"
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
