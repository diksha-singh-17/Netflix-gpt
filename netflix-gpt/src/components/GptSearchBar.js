import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import { openai } from "../utils/openai";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef();

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    try {
      // Your API call logic here
      const gptQuery =
        "Act as a movie recommendation sysytem and suggest some movies for the query:" +
        searchText.current.value +
        "only give me name of 5 movies, comma separated like the example given ahaed Example: Don, Kuch Kuch Hota Hae,Sholay,Fashion,Koi Mil Gaya";
      const gptResults = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });
      console.log(gptResults.choices);
    } catch (error) {
      if (error.response && error.response.status === 429) {
        console.error(
          "Quota exceeded. Please check your plan and billing details."
        );
      } else {
        console.error("An error occurred:", error.message);
      }
    }
  };

  return (
    <div className="pt-[20%] flex justify-center">
      <form
        className="w-1/2 bg-black grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="p-4 m-2 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
          ref={searchText}
        />
        <button
          className="bg-red-700 text-white rounded-lg col-span-3 m-4 py-2 px-4"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
