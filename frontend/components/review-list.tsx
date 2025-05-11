import { Star, ThumbsDown, ThumbsUp } from "lucide-react"
import Image from "next/image"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { Review } from "@/types"

interface ReviewListProps {
  reviews: Review[]
}

export default function ReviewList({ reviews }: ReviewListProps) {
  return (
    <div className="space-y-6">
      {reviews.map((review) => (
        <Card key={review.id}>
          <CardContent className="p-4">
            <div className="flex items-start gap-4">
              <Avatar>
                <AvatarImage src={review.user.avatar || "/placeholder.svg"} alt={review.user.name} />
                <AvatarFallback>{review.user.name.charAt(0)}</AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{review.user.name}</h3>
                  <span className="text-sm text-muted-foreground">{review.date}</span>
                </div>

                <div className="mt-1 flex items-center">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "fill-muted text-muted"}`}
                      />
                    ))}
                </div>

                <p className="mt-2 text-sm">{review.comment}</p>

                {review.images && review.images.length > 0 && (
                  <div className="mt-4 flex gap-2">
                    {review.images.map((image, index) => (
                      <div key={index} className="h-20 w-20 overflow-hidden rounded-md">
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`Review image ${index + 1}`}
                          width={80}
                          height={80}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-4 flex items-center gap-4">
                  <Button variant="ghost" size="sm" className="h-8 gap-1">
                    <ThumbsUp className="h-4 w-4" />
                    <span>Helpful ({review.helpfulCount})</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 gap-1">
                    <ThumbsDown className="h-4 w-4" />
                    <span>Not helpful</span>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
