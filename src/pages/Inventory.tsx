import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VehicleCard from "@/components/VehicleCard";
import SearchFilters from "@/components/SearchFilters";
import { vehicles } from "@/data/vehicles";

const Inventory = () => {
  const [filteredVehicles, setFilteredVehicles] = useState(vehicles);

  const handleFilterChange = (filters: { make: string; minPrice: string; maxPrice: string }) => {
    let filtered = [...vehicles];

    if (filters.make && filters.make !== "all") {
      filtered = filtered.filter(v => 
        v.make.toLowerCase().includes(filters.make.toLowerCase())
      );
    }

    if (filters.minPrice) {
      filtered = filtered.filter(v => v.price >= parseInt(filters.minPrice));
    }

    if (filters.maxPrice) {
      filtered = filtered.filter(v => v.price <= parseInt(filters.maxPrice));
    }

    setFilteredVehicles(filtered);
  };

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-12 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
              Our <span className="text-primary">Inventory</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse our curated selection of luxury vehicles. Each car is carefully selected and inspected to meet our premium standards.
            </p>
          </div>
          <SearchFilters onFilterChange={handleFilterChange} />
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <p className="text-muted-foreground">
              Showing {filteredVehicles.length} vehicles
            </p>
          </div>

          {filteredVehicles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVehicles.map((vehicle) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No vehicles found matching your criteria</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Inventory;
