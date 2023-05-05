import React from "react";

export const Header = () => {
  return (
    <div className="z-50 flex flex-row w-full h-20 bg-secondary justify-between items-center px-20">
      <h1 className="text-4xl font-bold cursor-pointer hover:drop-shadow">
        Jemuel M.
      </h1>
      <div className="text-xl flex flex-row gap-x-8 font-semibold ">
        {[
          ["Home", "/"],
          ["Profile", "/profile"],
          ["Journal", "/journal"],
          ["Reflection", "/reflection"],
        ].map(([title, url]) => (
          <a
            href={url}
            className="rounded-lg px-3 py-2 hover:bg-primary hover:text-neutral hover:scale-105"
          >
            {title}
          </a>
        ))}
      </div>
    </div>
  );
};
