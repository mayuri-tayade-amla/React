import React from "react";

const games = [
  {
    id: 1,
    title: "HIT THE ROUTE",
    image: "/assets/game1.png",
    color: "bg-pink-500",
  },
  {
    id: 2,
    title: "LUCKY DAMA MUERTA",
    image: "/assets/game2.png",
    color: "bg-pink-500",
  },
  {
    id: 3,
    title: "LUCKY DAMA MUERTA",
    image: "/assets/game3.png",
    color: "bg-pink-500",
  },
  {
    id: 4,
    title: "LUCKY BLUE",
    image: "/assets/game4.png",
    color: "bg-blue-500",
  },
  {
    id: 5,
    title: "LUCK & MAGIC",
    image: "/assets/game5.png",
    color: "bg-pink-500",
  },
  {
    id: 6,
    title: "HELLO EASTER",
    image: "/assets/game6.png",
    color: "bg-orange-500",
  },
  {
    id: 7,
    title: "JOGO DO BICHO",
    image: "/assets/game7.png",
    color: "bg-green-500",
  },
  {
    id: 8,
    title: "JOKER QUEEN",
    image: "/assets/game8.png",
    color: "bg-pink-500",
  },
  {
    id: 9,
    title: "JOURNEY FLIRT",
    image: "/assets/game9.png",
    color: "bg-orange-500",
  },
  {
    id: 10,
    title: "LADY WOLF MOON",
    image: "/assets/game10.png",
    color: "bg-pink-500",
  },
];

const PopularGames = () => {
  return (
    <div className="bg-black text-white py-10">
      <h2 className="text-center text-3xl font-bold mb-6">Popular Games</h2>

      {/* Grid Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-5 gap-6 px-4">
        {games.map((game) => (
          <div
            key={game.id}
            className="relative bg-gray-900 rounded-xl p-3 shadow-lg"
          >
            {/* Game Image */}
            <img
              src={game.image}
              alt={game.title}
              className="w-full rounded-lg"
            />

            {/* Favorite Icon */}
            <div className="absolute top-3 left-3 bg-white/20 p-2 rounded-full">
              ❤️
            </div>

            {/* Game Title */}
            <div
              className={`text-center font-bold mt-3 text-lg ${game.color} py-2 rounded-md`}
            >
              {game.title}
            </div>

            {/* Play Now Button */}
            <button className="w-full mt-2 py-2 bg-pink-500 rounded-lg shadow-md">
              Play Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularGames;
