import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-3">
      <p className="bg-[var(--color-bg-light)] text-[var(--color-text)] rounded-2xl text-center md:w-[250px]  py-2 px-2 font-bold shadow-[0_12px_40px_rgba(0,198,255,0.6)] ">
        devChallenges.io
      </p>

      <p className=" md:text-3xl text-xl font-bold">
        Frontend Developer Project
      </p>

      <h2 className="md:text-6xl text-xl text-purple-600">
        Github{" "}
        <span className="text-[var(--color-text)] font-bold  md:block mt-2">
          Profile
        </span>
      </h2>
      <p className="text-[var(--color-gray)] text-xl">JS.API.HTML.CSS</p>
    </div>
  );
};

export default Sidebar;

// bg-[var(--color-bg-light)] text-[var(--color-text)]
