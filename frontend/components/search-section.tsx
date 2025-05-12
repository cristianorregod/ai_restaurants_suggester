"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import RestaurantList from "@/components/restaurant-list";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useSearch } from "@/app/search-context";

interface Restaurant {
  id: string;
  name: string;
  description: string;
  category: string;
  price: string;
  stars: number;
  address: string;
  phone: string;
}

interface SearchSectionProps {
  initialRestaurants: Restaurant[];
}

export default function SearchSection({ initialRestaurants }: SearchSectionProps) {
  const {
    searchTerm,
    setSearchTerm,
    filteredRestaurants,
    setFilteredRestaurants,
    searchMessage,
    setSearchMessage
  } = useSearch();
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    if (searchTerm.trim() === "") {
      setFilteredRestaurants(initialRestaurants);
      setSearchMessage("");
      return;
    }

    try {
      setIsLoading(true);
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const response = await fetch(`${apiUrl}/restaurants/recommend`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({ query: searchTerm }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      setFilteredRestaurants(data.restaurants);
      setSearchMessage(data.message);
    } catch (error) {
      console.error("Error fetching recommendations:", error);
      setFilteredRestaurants(initialRestaurants);
      setSearchMessage("Ocurrió un error al buscar recomendaciones. Mostrando todos los restaurantes.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchTerm.trim() !== "") {
      handleSearch();
    }
  };

  return (
    <>
      <div className="mb-8 space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">
          Encuentra el mejor restaurante según tu preferencia
        </h1>
        <p className="text-muted-foreground">
          Descubre restaurantes mejor posicionados, lee reviews, y encuentra
          tu próximo lugar favorito para comer.
          <br />
          Todo asistido por tu amiga la Inteligencia Artificial.
        </p>
        <div className="flex gap-2 max-w-md">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Escribe aquí lo que quieres buscar..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
          <Button 
            onClick={handleSearch}
            disabled={isLoading || !searchTerm.trim()}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Buscando...
              </>
            ) : (
              'Buscar'
            )}
          </Button>
        </div>
        {searchMessage && (
          <div className="mt-4 p-4 rounded-lg bg-muted">
            <p className="text-sm">{searchMessage}</p>
          </div>
        )}
      </div>
      <div className="relative">
        {isLoading && (
          <div className="absolute inset-0 bg-background/50 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <p className="text-lg font-medium">Buscando recomendaciones...</p>
            </div>
          </div>
        )}
        <RestaurantList restaurants={filteredRestaurants.length > 0 ? filteredRestaurants : initialRestaurants} />
      </div>
    </>
  );
}