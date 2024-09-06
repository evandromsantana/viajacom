/* eslint-disable react/no-unknown-property */
import { useEffect } from "react";
import Search from "./Search";
import { BannerCarousel } from "./banner-carousel";

function Hero() {
  const titles = [
    ["Encontre o Carro", "  dos Seus Sonhos"],
    ["Descubra o Veículo", "  Perfeito para Você"],
    ["Alugue ou Compre", " Hoje Mesmo!"],
  ];

  let currentTitleIndex = 0;

  function createLetterCube(frontLetter, backLetter) {
    const letterCube = document.createElement("div");
    letterCube.className = "letter-cube";

    const spanFront = document.createElement("span");
    spanFront.className = "front";
    spanFront.textContent = frontLetter || " ";

    const spanBack = document.createElement("span");
    spanBack.className = "back";
    spanBack.textContent = backLetter || " ";

    letterCube.appendChild(spanFront);
    letterCube.appendChild(spanBack);

    return letterCube;
  }

  function updateHeroTitle() {
    titles[currentTitleIndex].forEach((title, index) => {
      const wordContainer = document.getElementById(`word${index + 1}`);
      const newTitle = title;
      const nextTitle = titles[(currentTitleIndex + 1) % titles.length][index];

      while (wordContainer.firstChild) {
        wordContainer.removeChild(wordContainer.firstChild);
      }

      const maxLength = Math.max(newTitle.length, nextTitle.length);

      for (let i = 0; i < maxLength; i++) {
        const letterCube = createLetterCube(newTitle[i], nextTitle[i]);
        wordContainer.appendChild(letterCube);

        // Suave transição
        setTimeout(() => {
          letterCube.style.transform = "rotateY(-180deg)";
          letterCube.style.transition = "transform 0.5s ease-in-out";
        }, i * 100);
      }
    });

    currentTitleIndex = (currentTitleIndex + 1) % titles.length;
  }

  useEffect(() => {
    const intervalId = setInterval(updateHeroTitle, 8000);
    updateHeroTitle();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center p-10 py-20 gap-6 h-[650px] w-full bg-[#eef0fc]">
        <h2 className="text-lg mb-4">
          Encontre carros para venda e aluguel perto de você
        </h2>

        <div className=" container">
          <h2 className=" text-[40px] text-center font-bold size-12 text-balance scale-y-150 scale-x-75 hero-title over:scale-105 transition-all cursor-pointer hover:text-primary">
            <span id="word1" className="word">
              {titles[0][0]}
            </span>
            <span id="word2" className="word">
              {titles[0][1]}
            </span>
            <span id="word3" className="word">
              {titles[0][2]}
            </span>
            <span id="word4" className="word">
              {titles[0][3]}
            </span>
            <span id="word5" className="word">
              {titles[0][4]}
            </span>
          </h2>
        </div>

        <Search />
        <BannerCarousel className="mt-10" />
      </div>

      <style jsx>{`
        .hero-title {
          display: flex;
          justify-content: space-around;
          perspective: 1000px;
        }

        .word {
          display: inline-flex;
          flex-direction: row;
        }

        .letter-cube {
          display: inline-block;
          transform-style: preserve-3d;
          width: 24px;
          height: 30px;
          position: relative;
          margin: 0 4px;
          transform-style: preserve-3d;
          transition: transform 0.5s ease-in-out;
        }

        .letter-cube span {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          backface-visibility: hidden;
        }

        .letter-cube span.front {
          transform: rotateY(0deg);
        }

        .letter-cube span.back {
          transform: rotateY(-180deg);
        }
      `}</style>
    </>
  );
}

export default Hero;
