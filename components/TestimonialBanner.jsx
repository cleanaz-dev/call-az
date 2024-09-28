"use client"

import { useEffect, useState, useRef } from "react"
import { Card, CardContent } from "./ui/card"
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    text: "This product has completely transformed our workflow. Highly recommended!",
    author: "Jane Doe",
    role: "CEO, TechCorp"
  },
  {
    id: 2,
    text: "The customer support is outstanding. They go above and beyond.",
    author: "John Smith",
    role: "CTO, InnovateNow"
  },
  {
    id: 3,
    text: "I've never seen such an intuitive and powerful tool. It's a game-changer!",
    author: "Emily Brown",
    role: "Product Manager, FutureTech"
  }
]

export default function TestimonialBanner() {
  
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000) // Change testimonial every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-white text-primary-foreground h-auto">
      <Carousel 
        className="w-full h-full" 
        selectedIndex={activeIndex} 
        setSelectedIndex={setActiveIndex}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        >
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id}>
              <Card className="border-none bg-transparent h-full">
                <CardContent className="flex flex-col justify-center items-center h-full p-6 text-center">
                  <blockquote className="text-lg mb-4">"{testimonial.text}"</blockquote>
                  <cite className="not-italic">
                    <div className="flex gap-2 text-transparent mb-2">
                      <Star fill="gold"/> <Star fill="gold"/> <Star fill="gold"/>  <Star fill="gold"/> <Star fill="gold"/>
                    </div>
                    <span className="font-semibold">{testimonial.author}</span>
                    <span className="block text-sm opacity-75">{testimonial.role}</span>
                  </cite>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}