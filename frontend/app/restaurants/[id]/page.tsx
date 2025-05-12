import { ArrowLeft, MapPin, Phone, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { restaurants } from "@/data/restaurants";
import { getRandomDate, getRandomImage } from "@/lib/utils";

export default function RestaurantPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch this data from an API
  const restaurant =
    restaurants.find((r) => r.id === Number(params.id)) || restaurants[0];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center px-4 sm:px-6 mx-auto">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary">RecomendAI</span>
          </Link>
          <div className="ml-auto flex items-center gap-4">
            {/* <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button size="sm">Sign Up</Button> */}
          </div>
        </div>
      </header>

      <div className="relative h-[300px] w-full">
        <Image
          src={getRandomImage() || "/placeholder.svg?height=450&width=800"}
          alt={restaurant.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="container px-4 pb-6 sm:px-6 mx-auto">
            <h1 className="text-3xl font-bold text-white">{restaurant.name}</h1>
          </div>
        </div>
      </div>

      <main className="container px-4 py-6 sm:px-6 mx-auto">
        <Link
          href="/"
          className="mb-6 flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to restaurants
        </Link>

        <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
          <div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-primary">Details</h2>
              <div className="mt-2 flex items-center gap-2">
                <div className="flex">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(restaurant.stars)
                            ? "fill-yellow-400 text-yellow-400"
                            : "fill-muted text-muted"
                        }`}
                      />
                    ))}
                </div>
                <span className="font-semibold">
                  {restaurant.stars.toFixed(1)}
                </span>
                {/* <span className="text-muted-foreground">
                  ({restaurant.reviewCount} reviews)
                </span> */}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <Badge variant="secondary">{restaurant.category}</Badge>

                <Badge variant="outline">{restaurant.price}</Badge>
              </div>

              <p className="mt-4 text-muted-foreground">
                {restaurant.description}
              </p>
            </div>

            <Separator className="my-6" />

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-primary">Menu</h2>
              <div className="mt-4 space-y-6">
                <div className="space-y-3">
                  {restaurant.menu.map((item) => (
                    <Card key={item.plato}>
                      <CardContent className="p-4">
                        <div className="flex justify-between">
                          <h4 className="font-medium">{item.plato}</h4>
                          <span className="font-medium">{item.precio}</span>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Omnis dolor fugiat alia.
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            <Separator className="my-6" />

            <div>
              <h2 className="text-xl font-semibold text-primary">
                Contact & Location
              </h2>
              <div className="mt-4 space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-muted-foreground" />
                  <div>
                    <p>{restaurant.address}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <span>{restaurant.phone}</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-primary">Reviews</h2>
            <div className="mt-4 space-y-4">
              {restaurant.reviews.map((review) => (
                <Card key={review.autor}>
                  <CardContent className="p-4">
                    <div className="flex justify-between">
                      <h3 className="font-semibold">{review.autor}</h3>
                      <div className="flex">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(Math.random() * (5 - 2 + 1)) + 2
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "fill-muted text-muted"
                              }`}
                            />
                          ))}
                      </div>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {getRandomDate()}
                    </p>
                    <p className="mt-2 text-sm">{review.texto}</p>
                  </CardContent>
                </Card>
              ))}
              {restaurant.reviews.length > 3 && (
                <Button variant="outline" className="w-full">
                  View all {restaurant.reviews.length} reviews
                </Button>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
