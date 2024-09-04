import { useRef, useEffect } from "react";
import Data from "@/Shared/Data";

import { Separator } from "@/_components/ui/separator";

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
    <div className="relative overflow-hidden w-full py-2">
      <div
        ref={marqueeRef}
        className="flex space-x-6 px-1 "
        style={{ whiteSpace: "nowrap" }}
      >
        {[...images, ...images].map((image, index) => (
          <div
            key={index}
            className="flex flex-col  w-40 h-24 size-auto py-2 px-2 rounded-xl rounded-ss-3xl rounded-ee-3xl shadow-lg items-center justify-center  border border-gray-200 bg-white"
          >
            <img
              src={image.icon}
              alt={`${image.name} nome`}
              className="w-10 m-2"
            />
            <Separator
              orientation="horizontal"
              className="hidden md:block w-20"
            />
            <h2 className="text-xs font-medium text-gray-400 text-button ">
              {image.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

const LogoScroll = () => {
  const images = Data.CarMakes;

  return (
    <div className="flex items-center justify-center w-full h-fit flex-col">
      <div className="py-2 text-xl px-6 font-semibold mb-1 text-gray-600">
        Principais Marcas.
      </div>
      <Marquee images={images} />
    </div>
  );
};

export default LogoScroll;
