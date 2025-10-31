import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Gauge, Cog, Zap } from "lucide-react";
import type { Vehicle } from "@/data/vehicles";

interface VehicleCardProps {
  vehicle: Vehicle;
}

const VehicleCard = ({ vehicle }: VehicleCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const formatMileage = (mileage: number) => {
    return new Intl.NumberFormat('en-NG').format(mileage);
  };

  const originalPrice = vehicle.price * 1.1; // 10% markup for demo

  return (
    <Link to={`/vehicle/${vehicle.id}`}>
      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 h-full border-0">
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={vehicle.images[0]}
            alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {vehicle.featured && (
            <div className="absolute top-0 left-0 bg-primary text-primary-foreground px-6 py-3 font-bold text-sm tracking-wider">
              SPECIAL
            </div>
          )}
        </div>
        <CardContent className="p-6 bg-card">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-lg font-bold uppercase tracking-wide group-hover:text-primary transition-colors">
              {vehicle.make} {vehicle.model} {vehicle.year}
            </h3>
            <div className="flex flex-col items-end gap-1">
              {vehicle.featured && (
                <span className="text-sm text-muted-foreground line-through">
                  {formatPrice(originalPrice)}
                </span>
              )}
              <div className="bg-primary text-primary-foreground px-4 py-1.5 font-bold text-lg">
                {formatPrice(vehicle.price)}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground border-t border-border pt-4">
            <div className="flex items-center gap-1.5">
              <Gauge className="h-4 w-4" />
              <span>{formatMileage(vehicle.mileage)}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Cog className="h-4 w-4" />
              <span>{vehicle.transmission.split('-')[0]}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="h-4 w-4" />
              <span>400</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default VehicleCard;
