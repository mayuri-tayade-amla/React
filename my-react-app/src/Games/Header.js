import React from "react";

const PromoCards = () => {
  return (
    <div className="relative w-full flex justify-center bg-[#1a0130] py-10">
      <img
        src="/assets/text-backimage.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="flex gap-6 max-w-7xl">
        {/* Left Card */}
        <div className="relative w-[400px] h-[250px] bg-gradient-to-b from-purple-600 to-purple-800 rounded-2xl p-6 shadow-lg">
          <img
            src="/assets/man.png"
            alt="Man"
            className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 w-40"
          />
          <div className="relative z-10 text-white text-center">
            <h2 className="text-xl font-bold">
              Refer Your Friend and Earn Rewards!
            </h2>
            <p className="text-sm mt-2">
              Refer your friends and enjoy exclusive bonuses and discounts
            </p>
            <button className="mt-4 px-4 py-2 bg-pink-500 rounded-lg shadow-md">
              Play Now
            </button>
          </div>
        </div>

        {/* Right Card */}
        <div className="relative w-[400px] h-[250px] bg-gradient-to-b from-purple-600 to-purple-800 rounded-2xl p-6 shadow-lg">
          <img
            src="/assets/wome.png"
            alt="Woman"
            className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 w-40"
          />
          <div className="relative z-10 text-white text-center">
            <h2 className="text-xl font-bold">
              Where the excitement knows no bounds
            </h2>
            <p className="text-sm mt-2">
              Experience unparalleled joy with our exclusive perks
            </p>
            <button className="mt-4 px-4 py-2 bg-pink-500 rounded-lg shadow-md">
              Play Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoCards;
