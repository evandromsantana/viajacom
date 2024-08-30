import Data from "@/Shared/Data";

import { CarouselMark } from "./Carousel-mark";

function Category() {
  return (
    <div className="mt-40">
      <h2 className="font-bold text-3xl text-center mb-6">
        Escolher por Categoria
      </h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 px-20">
        {Data.Category.map((category, index) => (
          <div className="border rounded-xl p-1 flex flex-col hover:shadow-md cursor-pointer place-content-center justify-end ">
            <img
              src={category.icon}
              widh={35}
              height={35}
              alt={`${category.name} categoria`}
              className="rounded-md"
            />
            <h2 className="inline-flex items-center justify-center rounded-md text-sm font-medium  mt-6 h-8  bg-[#E6EBEE] ">
              {category.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
