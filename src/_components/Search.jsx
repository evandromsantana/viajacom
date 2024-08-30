import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/_components/ui/select";
import { Separator } from "@/_components/ui/separator";
import Data from "@/Shared/Data";

import { CiSearch } from "react-icons/ci";

function Search() {
  return (
    <div className="p-2 md:p-5 bg-white rounded-md md:rounded-full flex-col md:flex md:flex-row gap-10 px-5 items-center w-[60%]">
      <Select>
        <SelectTrigger className=" outline-none md:border-none w-full shadow-none text-lg">
          <SelectValue placeholder="Carros" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">New</SelectItem>
          <SelectItem value="dark">Old</SelectItem>
        </SelectContent>
      </Select>
      <Separator orientation="vertical" className="hidden md:block" />

      <Select>
        <SelectTrigger className=" outline-none md:border-none w-full shadow-none text-lg">
          <SelectValue placeholder="Marcas de Carros" />
        </SelectTrigger>
        <SelectContent>
          {Data.CarMakes.map((maker, index) => (
            <SelectItem value={maker.name}>
              <div className="flex items-center p-2  gap-4">
                <img
                  src={maker.icon}
                  width={30}
                  height={30}
                  alt={`${maker.name} marca`}
                />
                <h2>{maker.name}</h2>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Separator orientation="vertical" className="hidden md:block" />

      <Select>
        <SelectTrigger className=" outline-none md:border-none w-full shadow-none text-lg">
          <SelectValue placeholder="Por Preço" />
        </SelectTrigger>
        <SelectContent>
          {Data.Pricing.map((price, index) => (
            <SelectItem value={price.amount}>{price.amount}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div>
        <CiSearch className="bg-primary rounded-full p-3 text-white text-[45px] hover:scale-105 transition-all cursor-pointer" />
      </div>
    </div>
  );
}

export default Search;
