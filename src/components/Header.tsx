import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, User } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import logo from "@/assets/logo.jpg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Abuja Cars Logo" className="h-12 w-12 rounded-full object-cover" />
            <div className="text-2xl font-serif font-bold">
              <span className="text-primary">ABUJA</span>
              <span className="text-foreground"> CARS</span>
            </div>
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
            <Button variant="outline" size="sm" className="gap-2" asChild>
              <Link to="/auth">
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">Login</span>
              </Link>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex gap-2"
              asChild
            >
              <a href="tel:+2348012345678">
                <Phone className="h-4 w-4" />
                <span>Call Us</span>
              </a>
            </Button>
            <Button
              size="sm"
              className="gap-2 bg-primary hover:bg-primary/90"
              asChild
            >
              <a
                href="https://wa.me/2348012345678"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
