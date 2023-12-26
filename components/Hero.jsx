import Image from "next/image";

import RedButton from "./RedButton";
import hero1 from "../public/assets/hero-1.jpg";
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
      <article className="mx-auto mt-32 hidden w-[80%] flex-row items-center justify-between gap-40 lg:flex xl:gap-80 2xl:mt-48">
        <section className="flex max-w-[30vw] flex-col items-center gap-8 text-center">
          <h1 className="text-6xl uppercase 2xl:text-7xl">
            <span>Change your mindset</span>
            <br />
            <span className="font-black text-red">
              Change <span className="whitespace-nowrap">your life</span>
            </span>
          </h1>
          <RedButton to="#inquiry" content="Start an inquiry" />
        </section>
        <section className="relative mx-auto flex w-[25vw] flex-col">
          <div className="mx-auto mb-4 mt-10 w-[70%]">
            <p className="mb-8 text-lg 2xl:text-xl">
              To become your best version you need to be ready to transform
              yourself...
            </p>
            <p className="text-2xl font-black 2xl:text-3xl">
              You need to be ready to EVOLVE
            </p>
          </div>
          <Image src={hero2} alt="Athlete results" />
          <Image
            src={hero1}
            alt="Training partners"
            className="absolute left-[-16vw] h-auto w-[18vw] max-w-[500px] lg:top-24 xl:top-0"
          />
        </section>
      </article>
    </>
  );
};

export default Hero;
