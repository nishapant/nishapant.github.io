import React from "react";
import { Link } from "react-router-dom";

function Curations() {
  return (
    <div>
      <header className="flex flex-row p-5 gap-x-5 justify-center text-magenta font-bold px-15 font-birthstone text-xl sm:text-2xl">
        <Link to="/">NP</Link>
      </header>
    </div>
  )
}

export default Curations;