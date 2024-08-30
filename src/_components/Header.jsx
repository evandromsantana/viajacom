import { UserButton, useUser } from "@clerk/clerk-react";
import { Button } from "./ui/button";

import { MapPinned, Clock4, Phone } from "lucide-react";

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <>
      <div className="flex justify-between items-center shadow-sm p-2 bg-[#eef0fc] text-gray-400 text-[10px]">
        <div className="flex justify-start gap-10">
          <div className="flex gap-4  ">
            <MapPinned className="h-[16px]" />
            <div className="flex flex-wrap grid">
              <span className="">Nosso endereço:</span>
              <span>Av. Naçoes Unidas | Teresina</span>
            </div>
          </div>

          <div className="w-[0.05rem] h-8 bg-gray-200" />

          <div className="flex gap-4 ">
            <Clock4 className="h-[16px]" />
            <div className="flex flex-wrap grid">
              <span className=" ">Horario de trabalho:</span>
              <span>Das 8:00 ás 22:00, sete dias por semana</span>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <Phone className="h-[16px]" />
          <div className="flex-wrap grid">
            <span>+ 55 (89)9999 999999</span>
            <span>+ 55 (89)9999 999999</span>
          </div>
        </div>
      </div>

      {/* Navigator */}
      <div className="flex justify-between items-center shadow-sm p-4">
        <img src="/logo.svg" width={207} height={41} />

        <ul className="hidden md:flex gap-16">
          <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
            Home
          </li>
          <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
            Search
          </li>
          <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
            New
          </li>
          <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
            Preowned
          </li>
        </ul>

        {isSignedIn ? (
          <div className="flex items-center gap-5">
            <UserButton />
            <Button className="bg-[#4762FF]">Submit</Button>
          </div>
        ) : (
          <Button>Submit</Button>
        )}
      </div>
    </>
  );
}

export default Header;
