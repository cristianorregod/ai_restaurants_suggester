"use client";

import { createContext, useContext, useState, ReactNode } from "react";

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

interface SearchContextType {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filteredRestaurants: Restaurant[];
  setFilteredRestaurants: (restaurants: Restaurant[]) => void;
  searchMessage: string;
  setSearchMessage: (message: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>([]);
  const [searchMessage, setSearchMessage] = useState("");

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        filteredRestaurants,
        setFilteredRestaurants,
        searchMessage,
        setSearchMessage,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  return context;
} 