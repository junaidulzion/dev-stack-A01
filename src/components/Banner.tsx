import React from "react";
import BannerImage from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto flex min-h-[600px] max-w-7xl items-center px-6 py-16 lg:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2">

       {/* Left Content */}
          <div className="max-w-2xl">
        
            <h1 className="text-4xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Build Your Ideal{" "}
              <span className="bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            {/* About Website */}
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-500">
              Explore frontend, backend, database, and tooling options. <br />
              Compare them side by side and put together the perfect stack
              for your next project.
            </p>

            {/* Buttons */}
            <div className="mt-5 flex flex-col gap-4 sm:flex-row">

             <button className="rounded-xl bg-gradient-to-r from-orange-500 to-purple-600 px-3 py-3.5 font-semibold text-white transition duration-300  hover:from-orange-400 hover:to-purple-500 hover:text-black">
            Explore Technologies
            </button>

              <button className="rounded-xl border border-slate-700 px-3 py-3.5 font-semibold text-black transition duration-300 hover:text-white hover:border-slate-500 hover:bg-slate-800">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end">

            {/* Image Card */}
            
              <img
                src={BannerImage}
                alt=""
                className="w-full max-w-lg rounded-2xl"
              />
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;