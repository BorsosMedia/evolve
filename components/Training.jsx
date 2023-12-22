import React from "react";

import Image from "next/image";

import arrows from "../public/assets/arrows.svg";
import athlete from "../public/assets/training.png";

const bullets = [
  {
    title: "Evolve Method",
    description:
      "I have developed a method that will not only transform your body, but your entire self.",
  },
  {
    title: "Evolve Family",
    description:
      "You will be part of a family that pushes together towards the same goal: to EVOLVE.",
  },
  {
    title: "Evolve Training",
    description:
      "We will adjust your plan to fit your needs with the goal of improving your technique and performance.",
  },
  {
    title: "Evolve Mindset",
    description:
      "Changing your mindset is what will help you adopt healthy habits to keep the results forever.",
  },
];

const Training = () => {
  return (
    <article className="my-16">
      <section className="mb-8">
        <h2
          className="subheadline flex flex-row items-center justify-center gap-[15px]"
          id="training-headline"
        >
          <div className="flex flex-col items-end">
            <span className="whitespace-nowrap">
              Training <span className="font-black">with Evolve means</span>
              <br />
            </span>
            <span className="font-black uppercase text-red md:whitespace-nowrap">
              Pushing Yourself for Greatness
            </span>
          </div>
          <div>
            <Image src={arrows} alt="arrows" />
          </div>
        </h2>
      </section>
      <section className="grid grid-cols-2 gap-[30px] text-right">
        <section className="self-center">
          {bullets.map((bullet, index) => (
            <div
              key={index}
              className="mb-8 flex flex-col items-end text-right"
            >
              <h4 className="mb-4 font-black text-red">{bullet.title}</h4>
              <p className="max-w-[300px]">{bullet.description}</p>
            </div>
          ))}
        </section>
        <Image src={athlete} alt="Athlete" />
      </section>
    </article>
  );
};

export default Training;
