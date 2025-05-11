"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

import { Button } from "@/components/ui/button"

interface RestaurantGalleryProps {
  images: string[]
}

export default function RestaurantGallery({ images }: RestaurantGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="relative overflow-hidden rounded-lg">
      <div className="aspect-video overflow-hidden">
        <Image
          src={images[currentIndex] || "/placeholder.svg"}
          alt="Restaurant image"
          width={800}
          height={450}
          className="h-full w-full object-cover"
        />
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 hover:bg-background"
        onClick={prevImage}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous image</span>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 hover:bg-background"
        onClick={nextImage}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next image</span>
      </Button>

      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1">
        {images.map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            className={`h-2 w-2 rounded-full p-0 ${index === currentIndex ? "bg-primary" : "bg-background/80"}`}
            onClick={() => setCurrentIndex(index)}
          >
            <span className="sr-only">Go to image {index + 1}</span>
          </Button>
        ))}
      </div>
    </div>
  )
}
