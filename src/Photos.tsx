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

interface Image {
  src: string;
  caption: string;
}

const images : Image[] = [
  { src: nepal, caption: "tanahun, nepal"},
  { src: newport, caption: "newport, rhode island" },
  { src: chisapani, caption: "chisapani, nepal" },
  { src: paris, caption: "paris, france" },
  { src: ny, caption: "new york, new york" },
  { src: iceland, caption: "reykjavík, iceland"},
  { src: sorrento, caption: "sorrento, italy" },
  { src: kaytranada, caption: "new york, new york" },
  { src: swiss, caption: "st. moritz, switzerland" },
  { src: reykjavik, caption: "reykjavík, iceland" }
];

function LazyImage({ image }: { image: Image }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    
    <div className="relative w-full aspect-[4/3] bg-gray-200 flex items-center justify-center overflow-hidden">
      {!isLoaded && (
       <div className="animate-pulse bg-gradient-to-r from-blue to-gray-600 h-full w-full absolute inset-0"></div>
      )}

      <img
        src={image.src}
        alt={image.caption}
        loading="lazy"
        className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsLoaded(true)}
      />
    </div>
  );
};

function Photos() {
  return (
    <div>
      <header className="flex flex-row p-5 gap-x-5 justify-center text-magenta font-bold px-15 font-birthstone text-2xl">
        <a href="/">NP</a>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5 px-10 font-azeret">
        {images.map((image) => (
          <div>
            <LazyImage image={image} />
            <p className="text-center font-bold mt-3 text-blue">{image.caption}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Photos;