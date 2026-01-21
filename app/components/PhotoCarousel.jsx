"use client";

import * as React from "react"

import {Card, CardContent} from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


const photos = [
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
]

export function PhotoCarousel() {
    const [activePhoto, setActivePhoto] = React.useState(null)

    return (
        <div className="w-full">

            <div className="text-white p-4 rounded-xl relative">

                {activePhoto && (
                    <div
                        className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50"
                        onClick={() => setActivePhoto(null)}
                    >
                        <img
                            src={activePhoto}
                            className="max-w-[90%] max-h-[90%] rounded-xl object-contain shadow-2xl"
                        />
                    </div>
                )}

                <Carousel className="w-full max-w-3xl">
                    <CarouselContent className="-ml-1">
                        {photos.map((url, index) => (
                            <CarouselItem key={index} className="pl-1 md:basis-1/3 lg:basis-1/3">
                                <div className="p-2">
                                    <Card className="bg-neutral-900 border-neutral-700 shadow-xl cursor-pointer"
                                          onClick={() => setActivePhoto(url)}>
                                        <CardContent className="flex items-center justify-center p-2">
                                            <img
                                                src={url}
                                                alt={`Photo ${index + 1}`}
                                                className="w-full h-60 object-cover rounded-xl"
                                            />
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="bg-black/80 "/>
                    <CarouselNext className="bg-black/80"/>
                </Carousel>
            </div>
        </div>
    )
}
