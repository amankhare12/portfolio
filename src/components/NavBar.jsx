import { useState, useEffect } from "react";
import cn from "@/lib/utils";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItem = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]
const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={cn("fixed w-full z-40 transition-all duration-300",
      isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
    )}>
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center gap-3"
          href="#hero"
        >
          <span className="relative z-10">
            <img className="w-9 h-9 rounded-sm" src="/logo/Logo6.png" alt="" srcset="" />
          </span>
          <span className="relative z-10">
            <span className="text-glow text-foreground">Aman</span>Khare
          </span>
        </a>

        {/*desktop nav */}

        <div className="hidden md:flex space-x-8 items-center">
          {navItem.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
          
          <div className="flex items-center justify-center hover:bg-primary/50 p-1 rounded-full transition-all duration-300 cursor-pointer">
            <ThemeToggle />
          </div>
        </div>
        {/*mobile nav */}

        <div className="flex md:hidden gap-2">
          <div className="flex md:hidden hover:bg-primary/50 px-2 rounded-full transition-all duration-300">
            <ThemeToggle />
          </div>

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
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
