import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

interface SearchFiltersProps {
  onFilterChange: (filters: {
    make: string;
    minPrice: string;
    maxPrice: string;
  }) => void;
}

const SearchFilters = ({ onFilterChange }: SearchFiltersProps) => {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    onFilterChange({
      make: formData.get('make') as string || "",
      minPrice: formData.get('minPrice') as string || "",
      maxPrice: formData.get('maxPrice') as string || "",
    });
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
      <form onSubmit={handleSearch}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Select name="make">
            <SelectTrigger>
              <SelectValue placeholder="Make" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Makes</SelectItem>
              <SelectItem value="mercedes-benz">Mercedes-Benz</SelectItem>
              <SelectItem value="bmw">BMW</SelectItem>
              <SelectItem value="lexus">Lexus</SelectItem>
              <SelectItem value="toyota">Toyota</SelectItem>
              <SelectItem value="porsche">Porsche</SelectItem>
              <SelectItem value="range rover">Range Rover</SelectItem>
              <SelectItem value="cadillac">Cadillac</SelectItem>
              <SelectItem value="audi">Audi</SelectItem>
              <SelectItem value="bentley">Bentley</SelectItem>
              <SelectItem value="rolls-royce">Rolls-Royce</SelectItem>
              <SelectItem value="lamborghini">Lamborghini</SelectItem>
              <SelectItem value="ferrari">Ferrari</SelectItem>
            </SelectContent>
          </Select>

          <Input
            type="number"
            name="minPrice"
            placeholder="Min Price (₦)"
          />

          <Input
            type="number"
            name="maxPrice"
            placeholder="Max Price (₦)"
          />

          <Button type="submit" className="gap-2">
            <Search className="h-4 w-4" />
            Search
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SearchFilters;
