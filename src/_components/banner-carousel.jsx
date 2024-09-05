import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const images = [
  { src: "/carousel/tesla.png", alt: "Tesla Model S" },
  { src: "/carousel/Mask group.png", alt: "Ferrari 488 GTB" },
  { src: "/carousel/SUV.png", alt: "SUV" },
  { src: "/carousel/car 2 1.png", alt: "Porche" },
  { src: "/carousel/mercedes.png", alt: "Mercedes" },
];

// eslint-disable-next-line react/prop-types
const PromoBanner = ({ src, alt }) => (
  <img src={src} alt={alt} className="object-cover bg-transparent" />
);

export function BannerCarousel() {
  const autoplay = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[autoplay.current]}
      className="flex items-center py-10 h-[470px] w-full"
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="  object-contain ">
              <Card className="bg-transparent border-none object-contain  h-[430px]">
                <CardContent className="flex items-center justify-center p-4">
                  <PromoBanner
                    src={image.src}
                    alt={image.alt}
                    className="object-cover bg-transparent border-none "
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
