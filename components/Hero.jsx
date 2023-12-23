import Image from "next/image";

import RedButton from "./RedButton";
import hero1 from "../public/assets/hero-1.JPG";

const Hero = () => {
  return (
    <article className="mt-32 grid grid-cols-1 place-content-center sm:grid-cols-2">
      <Image
        src={hero1}
        alt="Training partners"
        className="hidden h-auto w-80 sm:block"
      />
      <section className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
        <h1 className="uppercase">
          <span>Change your mindset</span>
          <br />
          <span className="font-black text-red">Change your life</span>
        </h1>
        <RedButton to="#inquiry" content="Start an inquiry" />
        <p>
          To become your best version you need to be ready to transform
          yourself...
        </p>
        <p className="font-black">You need to be ready to EVOLVE</p>
      </section>
    </article>
  );
};

export default Hero;
