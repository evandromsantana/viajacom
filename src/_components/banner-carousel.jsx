import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const images = [
  { src: "/carousel/tesla.png", alt: "Tesla Model S" },
  { src: "/carousel/Audi A3.svg", alt: "Audi A3" },
  { src: "/carousel/Car.svg", alt: "BMW M3" },
  { src: "/carousel/2024 Lexus LC@2x.svg", alt: "Ferrari 488 GTB" },
];

// eslint-disable-next-line react/prop-types
const PromoBanner = ({ src, alt }) => (
  <img src={src} alt={alt} className="object-cover bg-transparent" />
);

export function BannerCarousel() {
  return (
    <Carousel className="flex items-center p-10 py-25 h-[650px] w-full ">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="">
              <Card className="bg-transparent border-none">
                <CardContent className="flex items-center justify-center p-4">
                  <PromoBanner
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={1200}
                    className="object-cover bg-transparent border-none"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
