import React from "react";

function BitskyUI() {
  return (
    <div className="relative w-screen h-screen bg-gradient-to-b from-[#1E093D] to-[#511A6D] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/background.jpg")' }}
      ></div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        {/* "WIN BIG" Text */}
        <div className="text-white text-[72px] font-bold mb-4 tracking-tight">
          WIN BIG
        </div>

        {/* "In Bitsky" Text */}
        <div className="text-white text-[60px] font-pacifico mb-8">
          In Bitsky
        </div>

        {/* "Play Now" Button */}
        <button className="bg-[#E91E63] text-white py-3 px-8 rounded-full font-semibold text-lg">
          Play Now
        </button>

        {/* Slot Machine Image */}
        <img
          src="/images/slot-machine.png"
          alt="Slot Machine"
          className="mt-12 w-[384px]"
        />

        {/* Bitcoin Icons (using absolute positioning) */}
        <img
          src="/images/bitcoin.png"
          alt="Bitcoin"
          className="absolute top-[80px] left-[80px] w-[48px] animate-bounce"
        />
        <img
          src="/images/bitcoin.png"
          alt="Bitcoin"
          className="absolute top-[160px] right-[160px] w-[64px] animate-pulse"
        />
        <img
          src="/images/bitcoin.png"
          alt="Bitcoin"
          className="absolute bottom-[128px] left-[128px] w-[40px] animate-spin"
        />
      </div>
    </div>
  );
}

export default BitskyUI;
