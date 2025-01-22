import React from "react";

function LoadingBar() {
  return (
    <div className="w-full h-3 bg-gray-300 rounded relative overflow-hidden my-2">
      <div className="h-full bg-gradient-to-r from-magenta to-gray-400 animate-loading"></div>
    </div>
  )
}

export default LoadingBar;