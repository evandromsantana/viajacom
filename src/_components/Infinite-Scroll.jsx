import { useRef, useEffect } from "react";

const Marquee = ({ images, speed = 50 }) => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    let startPosition = 0;

    const animateMarquee = () => {
      startPosition -= 1;
      if (Math.abs(startPosition) >= marquee.scrollWidth / 2) {
        startPosition = 0;
      }
      marquee.style.transform = `translateX(${startPosition}px)`;
      requestAnimationFrame(animateMarquee);
    };

    animateMarquee();

    return () => cancelAnimationFrame(animateMarquee);
  }, []);

  return (
    <div className="relative overflow-hidden w-full">
      <div
        ref={marqueeRef}
        className="flex space-x-4 w-35 h-35"
        style={{ whiteSpace: "nowrap" }}
      >
        {[...images, ...images].map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="object-contain w-20 h-20 rounded-ss-3xl rounded-ee-3xl p-4 bg-white border"
          />
        ))}
      </div>
    </div>
  );
};

const InfinityScroll = () => {
  const images = [
    { src: "/icons_mark/audi-13.svg", alt: "Audi" },
    { src: "/icons_mark/bmw-7.svg", alt: "bmw" },
    { src: "/icons_mark/chevrolet-4.svg", alt: "chevrolet" },
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

  return (
    <div className="flex items-center justify-center w-full h-fit flex-col">
      <div className="py-2 text-xl px-6 font-semibold mb-1 text-gray-400">
        Principais Marcas.
      </div>
      <Marquee images={images} />
    </div>
  );
};

export default InfinityScroll;
