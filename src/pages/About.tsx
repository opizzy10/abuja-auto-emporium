import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-serif font-bold mb-6 text-center">
              About <span className="text-primary">Abuja Cars</span>
            </h1>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-muted-foreground mb-8 text-center">
                Nigeria's most trusted luxury car dealership, serving discerning clients since 2012.
              </p>

              <div className="grid md:grid-cols-2 gap-8 my-12">
                <div className="bg-card p-8 rounded-xl border border-border">
                  <h3 className="text-2xl font-serif font-bold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To provide Nigeria's elite with access to the world's finest automobiles,
                    backed by uncompromising quality assurance, transparent dealings, and
                    exceptional after-sales service.
                  </p>
                </div>

                <div className="bg-card p-8 rounded-xl border border-border">
                  <h3 className="text-2xl font-serif font-bold mb-4">Our Promise</h3>
                  <p className="text-muted-foreground">
                    Every vehicle in our inventory undergoes rigorous inspection and certification.
                    We stand behind our cars with comprehensive warranties and ongoing support.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-serif font-bold mb-6 mt-12">Why Choose Us</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Certified Quality</h3>
                  <p className="text-muted-foreground">
                    Each vehicle undergoes a comprehensive 150-point inspection process covering
                    mechanical systems, interior and exterior condition, and complete vehicle history verification.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">Transparent Pricing</h3>
                  <p className="text-muted-foreground">
                    No hidden fees or surprise charges. Our pricing is competitive and transparent,
                    with detailed breakdowns of all costs including delivery and documentation.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">Professional Service</h3>
                  <p className="text-muted-foreground">
                    Our experienced team provides personalized service from initial inquiry through
                    delivery and beyond. We're committed to making your luxury car purchase seamless.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">Nationwide Delivery</h3>
                  <p className="text-muted-foreground">
                    Professional delivery service to any location in Nigeria, with full insurance
                    coverage and real-time tracking of your vehicle.
                  </p>
                </div>
              </div>

              <div className="mt-12 p-8 bg-primary/10 border border-primary/20 rounded-xl">
                <h3 className="text-2xl font-serif font-bold mb-4">Visit Our Showroom</h3>
                <p className="text-muted-foreground mb-4">
                  Experience luxury firsthand at our state-of-the-art showroom in Wuse 2, Abuja.
                  Schedule a private viewing of any vehicle in our inventory.
                </p>
                <p className="font-semibold">
                  Address: Wuse 2, Abuja FCT, Nigeria<br />
                  Phone: +234 801 234 5678<br />
                  Email: info@abujacars.ng
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
