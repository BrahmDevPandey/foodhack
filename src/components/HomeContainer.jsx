import React from "react";
import { HashLink } from "react-router-hash-link";
import HeroBg from "../img/heroBg.png";
import { heroData } from "../utils/data";

const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
      <div className="py-2 flex-1 flex flex-col items-start  justify-center gap-6">
        <p className="text-[1.5rem] lg:text-[3.5rem] font-bold tracking-wide text-headingColor ">
          Order easily from
          <span className="text-orange-600 text-[2rem] lg:text-[4rem]">
            your favourite Restaurants and Cafes
          </span>
        </p>

        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Save your time. Order your food and get it delivered when you require
        </p>

        <HashLink
          smooth
          to={"#healthy-food"}
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Order Now
        </HashLink>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          className="ml-auto h-400 w-full lg:w-auto lg:h-650"
          alt="hero-bg"
        />

        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-16 py-4 gap-4 flex-wrap ">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className="lg:w-120 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
              >
                <img
                  src={n.imageSrc}
                  className="w-20 lg:w-40 -mt-10 lg:-mt-20"
                  alt="I1"
                />
                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                  {n.name}
                </p>

                <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-2 ">
                  {n.decp}
                </p>

                {/* <p className="text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-600">Rs. </span>
                  {n.price}
                </p> */}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
