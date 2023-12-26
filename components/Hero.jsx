import Image from "next/image";

import RedButton from "./RedButton";
import hero1 from "../public/assets/hero-1.JPG";
import hero2 from "../public/assets/hero-2.jpg";

const Hero = () => {
  return (
    <>
      {/* HERO FOR SCREENS <1024px */}
      <article className="mt-32 grid grid-cols-2 place-content-center gap-2 sm:gap-4 lg:hidden">
        <Image
          src={hero1}
          alt="Training partners"
          className="block h-auto max-h-[600px] w-auto"
        />
        <section className="flex w-full flex-col items-start gap-4 text-left md:gap-8">
          <h1 className="text-2xl uppercase sm:text-5xl md:text-6xl">
            <span>Change your mindset</span>
            <br />
            <span className="font-black text-red">Change your life</span>
          </h1>
          <RedButton to="#inquiry" content="Start an inquiry" />
          <p className="md:text-lg">
            To become your best version you need to be ready to transform
            yourself...
          </p>
          <p className="text-lg font-black sm:text-xl md:text-2xl">
            You need to be ready to EVOLVE
          </p>
        </section>
      </article>
      {/* HERO FOR SCREENS >=1024px */}
      <article className="mt-32 hidden flex-row items-center justify-between gap-80 lg:flex">
        <section className="flex flex-col items-center gap-8 text-center">
          <h1 className="text-6xl uppercase">
            <span>Change your mindset</span>
            <br />
            <span className="font-black text-red">
              Change <span className="whitespace-nowrap">your life</span>
            </span>
          </h1>
          <RedButton to="#inquiry" content="Start an inquiry" />
        </section>
        <section>
          <p className="text-lg">
            To become your best version you need to be ready to transform
            yourself...
          </p>
          <p className="text-2xl font-black">You need to be ready to EVOLVE</p>
          <Image src={hero2} alt="Athlete results" />
        </section>
      </article>
    </>
  );
};

export default Hero;
