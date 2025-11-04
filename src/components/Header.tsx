import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, User, Menu } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import logo from "@/assets/logo.jpg";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-14 w-auto object-contain" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-bold tracking-wide transition-colors hover:text-primary uppercase">
              Home
            </Link>
            <Link to="/inventory" className="text-sm font-bold tracking-wide transition-colors hover:text-primary uppercase">
              Inventory
            </Link>
            <Link to="/about" className="text-sm font-bold tracking-wide transition-colors hover:text-primary uppercase">
              About
            </Link>
            <Link to="/contact" className="text-sm font-bold tracking-wide transition-colors hover:text-primary uppercase">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button variant="outline" size="sm" className="gap-2 hidden sm:flex" asChild>
              <Link to="/auth">
                <User className="h-4 w-4" />
                <span>Login</span>
              </Link>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex gap-2"
              asChild
            >
              <a href="tel:+2347059710469">
                <Phone className="h-4 w-4" />
                <span>Call Us</span>
              </a>
            </Button>
            
            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="outline" size="sm">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link 
                    to="/" 
                    className="text-lg font-bold tracking-wide transition-colors hover:text-primary uppercase"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                  <Link 
                    to="/inventory" 
                    className="text-lg font-bold tracking-wide transition-colors hover:text-primary uppercase"
                    onClick={() => setIsOpen(false)}
                  >
                    Inventory
                  </Link>
                  <Link 
                    to="/about" 
                    className="text-lg font-bold tracking-wide transition-colors hover:text-primary uppercase"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                  <Link 
                    to="/contact" 
                    className="text-lg font-bold tracking-wide transition-colors hover:text-primary uppercase"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                  <div className="border-t pt-4 flex flex-col gap-2">
                    <Button variant="outline" className="w-full justify-start gap-2" asChild>
                      <Link to="/auth" onClick={() => setIsOpen(false)}>
                        <User className="h-4 w-4" />
                        Login
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-2" asChild>
                      <a href="tel:+2347059710469">
                        <Phone className="h-4 w-4" />
                        Call Us
                      </a>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
