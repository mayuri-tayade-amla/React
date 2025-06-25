import React from "react";

const Features = () => {
  return (
    <section className="bg-black text-white py-10">
      <div className="grid grid-cols-3 gap-6 text-center">
        <div>
          <h3 className="text-xl font-bold text-pink-500">
            Refer Your Friends
          </h3>
          <p>Get rewarded for every friend you invite!</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-pink-500">Exciting Bonuses</h3>
          <p>Claim exclusive rewards on deposits!</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-pink-500">Play All Games</h3>
          <p>Explore thrilling slot games with massive wins.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
