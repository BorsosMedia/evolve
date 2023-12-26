import Image from "next/image";

import RedButton from "./RedButton";
import hero1 from "../public/assets/hero-1.JPG";

const Hero = () => {
  return (
    <article className="container mr-auto mt-32 grid grid-cols-2 place-content-center gap-5">
      <Image
        src={hero1}
        alt="Training partners"
        className="block h-auto w-auto"
      />
      <section className="flex flex-col items-start gap-4 text-left">
        <h1 className="text-2xl uppercase sm:text-5xl">
          <span>Change your mindset</span>
          <br />
          <span className="font-black text-red">Change your life</span>
        </h1>
        <RedButton to="#inquiry" content="Start an inquiry" />
        <p>
          To become your best version you need to be ready to transform
          yourself...
        </p>
        <p className="text-lg font-black sm:text-xl">
          You need to be ready to EVOLVE
        </p>
      </section>
    </article>
  );
};

export default Hero;
