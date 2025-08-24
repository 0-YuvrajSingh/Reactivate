import React from 'react';
import hashirasImage from '../assets/hashirasImage.webp';

function Card({
  username,
  Anime = "Anime",
  title = "Hashira",
  img = hashirasImage
}) {
  return (
    <div className="max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white transition-transform hover:scale-[1.02] duration-300">
      {/* Image */}
      <div className="w-full h-64 flex items-center justify-center bg-black">
        <img
          src={img}
          alt={title}
          className="h-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h2 className="text-3xl font-extrabold mb-2 text-center">{username}</h2>
        <h3 className="text-lg text-blue-400 text-center mb-4">{title}</h3>
        <p className="text-sm text-gray-300 text-center mb-5">{Anime}</p>
        <div className="flex justify-center">
          <a
            href="#"
            className="inline-block px-5 py-2 bg-orange-400 hover:bg-orange-500 text-black text-sm font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
          >
            Read More about {title}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
