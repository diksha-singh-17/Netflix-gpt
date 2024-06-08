import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-24 absolute bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold text-white">{title}</h1>
      <p className="py-6 text-lg w-2/4 text-white">{overview}</p>
      <div>
        <button className="bg-white p-4  text-xl px-12 hover:bg-opacity-70 rounded-lg mx-2">
          ▶️Play
        </button>
        <button className="bg-gray-500 p-4  text-white text-xl px-12 bg-opacity-50 rounded-lg mx-2">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
