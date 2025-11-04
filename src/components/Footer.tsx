import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube, Rss } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-luxury-charcoal text-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-sm font-bold mb-4 tracking-wider text-primary">
              ABUJA CARS DEALERSHIP
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              As the leading dealer in Abuja, we are confident that we will save you time and money. 
              Abuja Cars is ultimate Automotive Car Dealer.
            </p>
          </div>

          {/* Photo Gallery */}
          <div>
            <h3 className="text-sm font-bold mb-4 tracking-wider text-primary">
              PHOTO GALLERY
            </h3>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-muted rounded overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=100&h=100&fit=crop&q=80`}
                    alt={`Gallery ${i}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Latest Blog Posts */}
          <div>
            <h3 className="text-sm font-bold mb-4 tracking-wider text-primary">
              LATEST BLOG POSTS
            </h3>
            <div className="space-y-3">
              <div>
                <Link to="/blog" className="text-sm text-foreground hover:text-primary transition-colors line-clamp-2">
                  The Tesla Model S isn't the first truly autonomous car on the road...
                </Link>
                <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                  <span>💬</span> NO COMMENTS
                </p>
              </div>
            </div>
          </div>

          {/* Social Network */}
          <div>
            <h3 className="text-sm font-bold mb-4 tracking-wider text-primary">
              SOCIAL NETWORK
            </h3>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-4">
              <a
                href="https://wa.me/2347059710469"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                WhatsApp: +234 705 971 0469
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-8 border-t border-border">
          {/* Subscribe */}
          <div>
            <h3 className="text-sm font-bold mb-4 tracking-wider">SUBSCRIBE</h3>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email..." 
                className="bg-muted/50 border-none h-12 text-sm"
              />
              <Button size="icon" className="h-12 w-12 bg-primary hover:bg-primary/90 flex-shrink-0">
                <Rss className="h-5 w-5" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              Get latest updates and offers.
            </p>
          </div>

          {/* Sales Hours */}
          <div>
            <h3 className="text-sm font-bold mb-4 tracking-wider">SALES HOURS</h3>
            <div className="text-sm space-y-1 text-muted-foreground">
              <p><span className="text-foreground">Monday - Friday:</span> 09:00AM - 09:00PM</p>
              <p><span className="text-foreground">Saturday:</span> 09:00AM - 07:00PM</p>
              <p><span className="text-foreground">Sunday:</span> Closed</p>
            </div>
          </div>

          {/* Service Hours */}
          <div>
            <h3 className="text-sm font-bold mb-4 tracking-wider">SERVICE HOURS</h3>
            <div className="text-sm space-y-1 text-muted-foreground">
              <p><span className="text-foreground">Monday - Friday:</span> 09:00AM - 09:00PM</p>
              <p><span className="text-foreground">Saturday:</span> 09:00AM - 07:00PM</p>
              <p><span className="text-foreground">Sunday:</span> Closed</p>
            </div>
          </div>

          {/* Parts Hours */}
          <div>
            <h3 className="text-sm font-bold mb-4 tracking-wider">PARTS HOURS</h3>
            <div className="text-sm space-y-1 text-muted-foreground">
              <p><span className="text-foreground">Monday - Friday:</span> 09:00AM - 09:00PM</p>
              <p><span className="text-foreground">Saturday:</span> 09:00AM - 07:00PM</p>
              <p><span className="text-foreground">Sunday:</span> Closed</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>Copyright © {currentYear}. Abuja Cars – Premium Car Dealership</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
