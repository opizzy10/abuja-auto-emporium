import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-car.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-sm font-medium text-primary">Nigeria's Premier Luxury Dealership</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Luxury Vehicles for{" "}
            <span className="text-primary">Nigeria's Elite</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-xl">
            Certified pre-owned and brand new luxury vehicles. Professional inspection, flexible financing, and delivery across Nigeria.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="gap-2 text-base" asChild>
              <Link to="/inventory">
                Browse Inventory
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Book Inspection</Link>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border/50">
            <div>
              <div className="text-3xl font-serif font-bold text-primary mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Cars Sold</div>
            </div>
            <div>
              <div className="text-3xl font-serif font-bold text-primary mb-1">12+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-serif font-bold text-primary mb-1">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
