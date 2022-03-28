import React from "react";
import { VscGithubInverted } from "react-icons/vsc";

const Credit = () => {
   return (
      <div className="w-7 h-7 flex items-center -mb-1.5 justify-center subtitle text-zinc-200 font-normal">
         <a
            href="https://github.com/rizalthewebdev"
            target="_blank"
            rel="noreferrer"
            className="w-full h-full animate-bounce hover:shadow-lg shadow-black hover:scale-110"
         >
            <VscGithubInverted className="w-full h-full" />
         </a>
      </div>
   );
};

export default Credit;