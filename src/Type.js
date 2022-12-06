import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      
      options={{
        strings: [
          "Full Stack Web Developer.",
          "MERN Stack Developer.",
          "Open Source Contributer."
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
      }}
    />
  );
}

export default Type;