import Search from "./Search";
import { BannerCarousel } from "./banner-carousel";

function Hero() {
  return (
    <div>
      <div className="flex flex-col items-center p-10 py-20 gap-6 h-[650px] w-full bg-[#eef0fc]">
        <h2 className="text-lg">
          Encontre carros para venda e aluguel perto de você
        </h2>
        <h2 className="text-[50px] font-bold">
          Encontre o Carro dos seus Sonhos
        </h2>

        <Search />

        {/* <img src="/tesla.png" className="mt-10" /> */}
        <BannerCarousel className="mt-10" />
      </div>
    </div>
  );
}

export default Hero;
