import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-car.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Full-screen clear background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />

      <div className="container mx-auto px-4 py-16 md:py-32 relative z-10">
        <div className="flex items-center justify-center md:justify-end">
          {/* Circular promo badge - visible on larger screens only */}
          <div className="relative hidden md:block">
            <div className="w-[350px] h-[350px] lg:w-[400px] lg:h-[400px] rounded-full bg-primary/90 backdrop-blur-sm flex flex-col items-center justify-center text-center p-12 shadow-2xl">
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-primary-foreground tracking-wider">
                  NEW 2024
                </h2>
                <h1 className="text-3xl font-serif font-bold text-primary-foreground leading-tight">
                  MERCEDES-BENZ<br />G63 AMG
                </h1>
                <div className="space-y-2">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-bold text-primary-foreground">₦</span>
                    <span className="text-7xl font-bold text-primary-foreground">185M</span>
                    <div className="flex flex-col items-start">
                      <span className="text-2xl font-bold text-primary-foreground">/MO</span>
                      <span className="text-sm text-primary-foreground/80">FOR 36 MONTH</span>
                    </div>
                  </div>
                </div>
                <Button 
                  size="lg" 
                  className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-bold"
                  asChild
                >
                  <Link to="/inventory">LEARN MORE</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stats - hidden on mobile, visible on larger screens */}
        <div className="absolute bottom-16 left-4 right-4 hidden md:block">
          <div className="container mx-auto">
            <div className="grid grid-cols-3 gap-8 max-w-2xl">
              <div className="text-center md:text-left bg-background/80 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">500+</div>
                <div className="text-sm md:text-base text-foreground font-medium">Cars Sold</div>
              </div>
              <div className="text-center md:text-left bg-background/80 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">12+</div>
                <div className="text-sm md:text-base text-foreground font-medium">Years Experience</div>
              </div>
              <div className="text-center md:text-left bg-background/80 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">98%</div>
                <div className="text-sm md:text-base text-foreground font-medium">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
