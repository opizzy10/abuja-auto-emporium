import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

const SearchFilters = () => {
  const [filters, setFilters] = useState({
    make: "",
    minPrice: "",
    maxPrice: "",
    year: "",
  });

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Select
          value={filters.make}
          onValueChange={(value) => setFilters({ ...filters, make: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Make" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="mercedes">Mercedes-Benz</SelectItem>
            <SelectItem value="bmw">BMW</SelectItem>
            <SelectItem value="lexus">Lexus</SelectItem>
            <SelectItem value="toyota">Toyota</SelectItem>
            <SelectItem value="porsche">Porsche</SelectItem>
          </SelectContent>
        </Select>

        <Input
          type="number"
          placeholder="Min Price (₦)"
          value={filters.minPrice}
          onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
        />

        <Input
          type="number"
          placeholder="Max Price (₦)"
          value={filters.maxPrice}
          onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
        />

        <Button className="gap-2">
          <Search className="h-4 w-4" />
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchFilters;
