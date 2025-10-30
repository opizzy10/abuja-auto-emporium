import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { vehicles } from "@/data/vehicles";
import {
  ArrowLeft,
  Phone,
  MessageCircle,
  Calendar,
  Gauge,
  Fuel,
  Settings,
  MapPin,
  Palette,
  Car,
  Share2,
} from "lucide-react";

const VehicleDetail = () => {
  const { id } = useParams();
  const vehicle = vehicles.find((v) => v.id === id);

  if (!vehicle) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">Vehicle Not Found</h1>
          <Link to="/inventory">
            <Button>Back to Inventory</Button>
          </Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatMileage = (mileage: number) => {
    return new Intl.NumberFormat('en-NG').format(mileage);
  };

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4">
          <Link to="/inventory">
            <Button variant="ghost" className="mb-6 gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Inventory
            </Button>
          </Link>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div>
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-muted mb-4">
                <img
                  src={vehicle.images[0]}
                  alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <Badge className="mb-4">{vehicle.condition}</Badge>
              <h1 className="text-4xl font-serif font-bold mb-2">
                {vehicle.year} {vehicle.make} {vehicle.model}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">{vehicle.variant}</p>

              <div className="text-4xl font-serif font-bold text-primary mb-6">
                {formatPrice(vehicle.price)}
              </div>

              <p className="text-muted-foreground mb-8">{vehicle.description}</p>

              <div className="flex gap-3 mb-8">
                <Button size="lg" className="flex-1 gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Reserve via WhatsApp
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Phone className="h-5 w-5" />
                  Call
                </Button>
                <Button size="lg" variant="outline">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              <Card className="p-6">
                <h3 className="font-serif font-bold text-xl mb-4">Quick Specs</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">Year</div>
                      <div className="font-semibold">{vehicle.year}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Gauge className="h-5 w-5 text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">Mileage</div>
                      <div className="font-semibold">{formatMileage(vehicle.mileage)} km</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Settings className="h-5 w-5 text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">Transmission</div>
                      <div className="font-semibold">{vehicle.transmission}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Fuel className="h-5 w-5 text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">Fuel Type</div>
                      <div className="font-semibold">{vehicle.fuelType}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Car className="h-5 w-5 text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">Drivetrain</div>
                      <div className="font-semibold">{vehicle.drivetrain}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">Location</div>
                      <div className="font-semibold">{vehicle.location}</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <Card className="p-8">
            <h2 className="text-3xl font-serif font-bold mb-6">Full Specifications</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-4">Performance</h3>
                <dl className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-border">
                    <dt className="text-muted-foreground">Engine</dt>
                    <dd className="font-semibold">{vehicle.engine}</dd>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <dt className="text-muted-foreground">Transmission</dt>
                    <dd className="font-semibold">{vehicle.transmission}</dd>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <dt className="text-muted-foreground">Drivetrain</dt>
                    <dd className="font-semibold">{vehicle.drivetrain}</dd>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <dt className="text-muted-foreground">Fuel Type</dt>
                    <dd className="font-semibold">{vehicle.fuelType}</dd>
                  </div>
                </dl>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">Details</h3>
                <dl className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-border">
                    <dt className="text-muted-foreground">Stock Number</dt>
                    <dd className="font-semibold">{vehicle.stockNumber}</dd>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <dt className="text-muted-foreground">Exterior Color</dt>
                    <dd className="font-semibold">{vehicle.exteriorColor}</dd>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <dt className="text-muted-foreground">Interior Color</dt>
                    <dd className="font-semibold">{vehicle.interiorColor}</dd>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <dt className="text-muted-foreground">Condition</dt>
                    <dd className="font-semibold">{vehicle.condition}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VehicleDetail;
