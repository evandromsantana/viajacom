// src/ImageGallery.tsx
import React from "react";

type Image = {
  src: string;
  alt: string;
};

interface ImageGalleryProps {
  images: Image[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => (
  <>
    {images.map((image, index) => (
      <img
        key={index}
        src={image.src}
        alt={image.alt}
        className="rounded-md object-cover"
        width={300}
        height={200}
      />
    ))}
  </>
);

export default ImageGallery;
