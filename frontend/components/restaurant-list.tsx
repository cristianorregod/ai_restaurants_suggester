import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { restaurants } from "@/data/restaurants";
import { getRandomImage } from "@/lib/utils";

export default function RestaurantList() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {restaurants.map((restaurant) => (
        <Link key={restaurant.id} href={`/restaurants/${restaurant.id}`}>
          <Card className="overflow-hidden transition-all hover:shadow-md">
            <div className="aspect-video overflow-hidden">
              <Image
                src={getRandomImage() || "/placeholder.svg"}
                alt={restaurant.name}
                width={500}
                height={300}
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <h2 className="font-semibold">{restaurant.name}</h2>
                <div className="flex items-center">
                  <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>{restaurant.stars.toFixed(1)}</span>
                </div>
              </div>
              <div className="mt-1 flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">
                  {restaurant.category}
                </Badge>

                <Badge variant="outline" className="text-xs">
                  {restaurant.price}
                </Badge>
              </div>
              <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                {restaurant.description}
              </p>
              <div className="mt-2 text-sm text-muted-foreground">
                {restaurant.address}, {restaurant.phone}
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
