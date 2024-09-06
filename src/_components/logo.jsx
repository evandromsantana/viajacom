const AnimatedLogo = () => {
  return (
    <div className="relative w-[307px] h-[50px] m-1">
      {/* Estrutura básica do logo */}
      <div className="absolute inset-0 z-10">
        <div className="flex gap-2 skew-x-[-50deg] animated-rectangles">
          <div className="bg-[#820009] w-[50px] h-[20px] rounded-sm shadow-sm skew-x-[25deg] rectangle" />
          <div className="bg-[#0A267C] w-[50px] h-[20px] rounded-sm shadow-sm skew-x-[25deg] rectangle" />
        </div>
        <div className="h-[40px]">
          <h2 className="font-black text-2xl italic skew-x-[-25deg] gradient-text">
            VIAJA COM
          </h2>
          <p className="font-medium text-xs font-sans">
            SMART TRANSPORT SHARING
          </p>
        </div>

        <style jsx>{`
          .gradient-text {
            position: relative;
            text-transform: uppercase;
            font-size: 2em;
            overflow: hidden;
            background: linear-gradient(90deg, #000, #fff, #000);
            background-repeat: no-repeat;
            background-size: 80%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: rgba(255, 255, 255, 0);
            animation: animate 4s linear infinite;
          }

          .animated-rectangles .rectangle {
            animation: slide 7s linear infinite;
          }

          @keyframes animate {
            0% {
              background-position: -500%;
            }
            100% {
              background-position: 500%;
            }
          }

          @keyframes slide {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(70px);
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default AnimatedLogo;
