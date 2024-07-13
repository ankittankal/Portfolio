import React from "react";
import Typewriter from "typewriter-effect";

function TypeWrite() {
  return (<div className="text-2xl sm:text-4xl text-blue-500 py-4 sm:w-[28rem]">
    <Typewriter
      options={{
        strings: [
          "Developer",
          "Problem solver",
          "1650+ rating On Leetcode",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 100,
      }}
    />
  </div>);
}

export default TypeWrite;