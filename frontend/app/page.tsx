import { Search } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import RestaurantList from "@/components/restaurant-list";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center px-4 sm:px-6 mx-auto">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary">DineReview</span>
          </Link>
          <div className="ml-auto flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button size="sm">Sign Up</Button>
          </div>
        </div>
      </header>
      <main className="container px-4 py-6 sm:px-6 sm:py-8 mx-auto">
        <div className="mb-8 space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">
            Find the best restaurants near you
          </h1>
          <p className="text-muted-foreground">
            Discover top-rated restaurants, read reviews, and find your next
            favorite place to eat.
          </p>
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search restaurants by name, cuisine, or location..."
              className="pl-10"
            />
          </div>
        </div>
        <RestaurantList />
      </main>
    </div>
  );
}
