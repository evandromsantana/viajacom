import FakeData from "@/Shared/FakeData";
import CarItem from "./CarItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/_components/ui/carousel";

function MostSearchdCar() {
  return (
    <div className="mx-24">
      <h2 className="font-bold text-3xl text-center mt-16 mb-7">
        Carro mais pesquisado
      </h2>

      <Carousel>
        <CarouselContent>
          {FakeData.carList.map((car, index) => (
            <CarouselItem className="basis-1/4">
              <CarItem car={car} key={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default MostSearchdCar;
