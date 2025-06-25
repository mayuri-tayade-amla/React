import React from "react";

const socialMediaLinks = [
  { name: "Youtube", icon: "/assets/youtube.png" },
  { name: "Instagram", icon: "/assets/instagram.png" },
  { name: "Twitch", icon: "/assets/twitch.png" },
  { name: "Facebook", icon: "/assets/facebook.png" },
  { name: "WhatsApp", icon: "/assets/whatsapp.png" },
  { name: "Tik Tok", icon: "/assets/tiktok.png" },
];

const SocialMediaSection = () => {
  return (
    <div className="relative flex justify-center items-center bg-black py-8 px-4">
      {/* Main Container with background */}
      <div className="relative bg-[#6b4e19] rounded-xl p-8 w-[90%] max-w-5xl transform -rotate-2 shadow-lg">
        {/* Social Media Tag (Top Left) */}
        <div className="absolute -top-6 left-6 bg-gradient-to-b from-teal-400 to-teal-600 text-black font-bold text-lg px-6 py-2 rounded-lg shadow-md transform -rotate-6">
          Social Media
        </div>

        {/* "Follow Us On" Text */}
        <h2 className="text-white font-bold text-2xl mb-6 text-left">
          FOLLOW US ON &gt;&gt;
        </h2>

        {/* Social Media Icons Grid */}
        <div className="grid grid-cols-3 gap-4">
          {socialMediaLinks.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-gray-700/50 px-6 py-3 rounded-lg shadow-md transition-all hover:scale-105"
            >
              <img src={item.icon} alt={item.name} className="w-8 h-8" />
              <span className="text-white font-medium">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialMediaSection;
