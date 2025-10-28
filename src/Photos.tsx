import React, { useState } from "react";
import kaytranada from "./photos/kaytranada.png";
import paris from "./photos/paris.png";
import iceland from "./photos/iceland.png";
import newport from "./photos/newport.png";
import ny from "./photos/ny.png"
import sorrento from "./photos/sorrento.png"
import nepal from "./photos/nepal.png";
import chisapani from "./photos/chisapani.png";
import reykjavik from "./photos/reykjavik.png";
import swiss from "./photos/swiss.png";
import { Link } from "react-router-dom";

interface Image {
  src: string;
  caption: string;
  date: string;
}

const images : Image[] = [
  { src: nepal, caption: "tanahun, nepal", date: "march 2024"},
  { src: newport, caption: "newport, rhode island", date: "may 2024" },
  { src: chisapani, caption: "chisapani, nepal", date: "march 2024" },
  { src: paris, caption: "paris, france", date: "may 2024" },
  { src: ny, caption: "new york, new york", date: "feb 2024" },
  { src: iceland, caption: "reykjavík, iceland", date: "june 2023"},
  { src: sorrento, caption: "sorrento, italy", date: "june 2023" },
  { src: kaytranada, caption: "new york, new york", date: "sept 2022" },
  { src: swiss, caption: "st. moritz, switzerland", date: "dec 2024" },
  { src: reykjavik, caption: "reykjavík, iceland", date: "june 2023" }
];

function LazyImage({ image }: { image: Image }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full aspect-[4/3] bg-gray-200 flex items-center justify-center overflow-hidden group">
      {!isLoaded && (
       <div className="animate-pulse bg-gradient-to-r from-blue to-gray-600 h-full w-full absolute inset-0"></div>
      )}

      <img
        src={image.src}
        alt={image.caption}
        loading="lazy"
        className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
          isLoaded ? "opacity-100" : "opacity-0"
        } group-hover:opacity-75`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsLoaded(true)}
      />
      {isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {image.date}
        </div>
      )}
    </div>
  );
};

function Photos() {
  return (
    <div>
      <header className="flex flex-row p-5 gap-x-5 justify-center text-magenta font-bold px-15 font-birthstone text-xl sm:text-2xl">
        <Link to="/">NP</Link>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5 px-4 sm:px-10 font-azeret">
        {images.map((image, index) => (
          <div key={index}>
            <LazyImage image={image} />
            <p className="text-center font-bold mt-2 sm:mt-3 text-blue text-sm sm:text-base">{image.caption}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Photos;