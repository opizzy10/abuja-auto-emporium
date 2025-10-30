import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Gauge, Fuel, Settings, MapPin, ArrowRight } from "lucide-react";
import type { Vehicle } from "@/data/vehicles";

interface VehicleCardProps {
  vehicle: Vehicle;
}

const VehicleCard = ({ vehicle }: VehicleCardProps) => {
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
    <Card className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_8px_30px_rgb(201,168,77,0.2)]">
      <Link to={`/vehicle/${vehicle.id}`}>
        <div className="aspect-[4/3] overflow-hidden bg-muted">
          <img
            src={vehicle.images[0]}
            alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <Badge variant="secondary" className="mb-2">
                {vehicle.condition}
              </Badge>
              <h3 className="text-xl font-serif font-bold group-hover:text-primary transition-colors">
                {vehicle.year} {vehicle.make} {vehicle.model}
              </h3>
              <p className="text-sm text-muted-foreground">{vehicle.variant}</p>
            </div>
          </div>

          <div className="text-2xl font-serif font-bold text-primary mb-4">
            {formatPrice(vehicle.price)}
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Gauge className="h-4 w-4" />
              <span>{formatMileage(vehicle.mileage)} km</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Settings className="h-4 w-4" />
              <span>{vehicle.transmission}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Fuel className="h-4 w-4" />
              <span>{vehicle.fuelType}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{vehicle.location}</span>
            </div>
          </div>

          <Button className="w-full gap-2 group/btn" variant="outline">
            View Details
            <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </div>
      </Link>
    </Card>
  );
};

export default VehicleCard;
