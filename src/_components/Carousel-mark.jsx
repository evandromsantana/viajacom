import { useState } from "react";

import * as React from "react";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const images = [
  { src: "/icons_mark/audi-13.svg", alt: "Audi" },
  { src: "/icons_mark/bmw-7.svg", alt: "bmw" },
  { src: "/icons_mark/chevrolet-10.svg", alt: "chevrolet" },
  { src: "/icons_mark/ferrari-ges.svg", alt: "ferrari" },
  { src: "/icons_mark/ford-6.svg", alt: "ford" },
  { src: "/icons_mark/honda-automobiles-1.svg", alt: "Honda" },
  { src: "/icons_mark/hyundai-automobiles-1.svg", alt: "Hyundai" },
  { src: "/icons_mark/jaguar-cars.svg", alt: "Jaguar" },
  { src: "/icons_mark/lamborghini.svg", alt: "Lamborghini" },
  { src: "/icons_mark/land-rover-2.svg", alt: "Land Rover" },
  { src: "/icons_mark/lexus.svg", alt: "Lexus" },
  { src: "/icons_mark/mazda-2.svg", alt: "Mazda" },
  { src: "/icons_mark/mercedes-benz-9.svg", alt: "Mercedes-Benz" },
  { src: "/icons_mark/nissan-6.svg", alt: "Nissan" },
  { src: "/icons_mark/porsche-6.svg", alt: "Porsche" },
  { src: "/icons_mark/subaru-12.svg", alt: "Subaru" },
  { src: "/icons_mark/tesla-motors.svg", alt: "Tesla" },
  { src: "/icons_mark/toyota-7.svg", alt: "Toyota" },
  { src: "/icons_mark/volvo.svg", alt: "Volvo" },
];

// eslint-disable-next-line react/prop-types
const PromoBanner = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    width={80}
    height={80}
    className="object-cover bg-transparent border-none "
  />
);

export function CarouselMark() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="flex justify-center items-center bg-[#eef0fc]">
      <Carousel
        className="flex w-full max-w-sm bg-red-500"
        onAfterChange={(currentSlide) => setActiveSlide(currentSlide)}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="p-2 lg:basis-1/6">
              <div className="">
                <Card className="bg-transparent border-none">
                  <CardContent className="flex aspect-square items-center justify-center p-1">
                    <PromoBanner
                      src={image.src}
                      alt={image.alt}
                      width={80}
                      height={80}
                      className="object-cover bg-transparent border-none"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
    </div>
  );
}
