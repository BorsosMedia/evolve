import React from "react";

import Image from "next/image";

import arrows from "../public/assets/arrows.svg";
import connector1 from "../public/assets/connector-1.svg";
import connector2 from "../public/assets/connector-2.svg";
import connectorMobile from "../public/assets/connector-mobile.svg";
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
      <section className="mb-8 flex flex-row items-center justify-center gap-[15px]">
        <h2 className="subheadline" id="training-headline">
          <div className="flex flex-col items-end">
            <span className="whitespace-nowrap text-right">
              Training <span className="font-black">with Evolve means</span>
              <br />
            </span>
            <span className="whitespace-break-spaces text-right font-black uppercase text-red">
              Pushing Yourself for Greatness
            </span>
          </div>
        </h2>
        <div>
          <Image src={arrows} alt="arrows" />
        </div>
      </section>
      <section className="flex flex-col items-center md:hidden">
        <section className="flex flex-col items-center">
          {bullets.map((bullet, index) => (
            <div key={index} className="mb-8 flex flex-col sm:text-lg">
              <h4 className="mb-4 font-black text-red">{bullet.title}</h4>
              <p className="max-w-[300px]">{bullet.description}</p>
            </div>
          ))}
        </section>
        <Image src={athlete} alt="Athlete" />
      </section>
      <section className="container mx-auto hidden md:block xl:hidden">
        <section className="grid grid-cols-2 text-right">
          <section className="self-center">
            {bullets.map((bullet, index) => (
              <div key={index} className="mb-8 grid grid-cols-1 text-right">
                <h4 className="mb-4 mr-9 text-lg font-black text-red">
                  {bullet.title}
                </h4>
                <div className="flex flex-row justify-end gap-2">
                  <p className="max-w-[300px]">{bullet.description}</p>
                  <Image src={connectorMobile} alt="connector" />
                </div>
              </div>
            ))}
          </section>
          <Image src={athlete} alt="Athlete" />
        </section>
      </section>
      <section className="hidden grid-cols-3 xl:grid">
        <section className="grid grid-cols-1">
          <div className="flex flex-col items-end pt-20">
            <h4 className="mb-4 mr-20 text-right text-xl font-black text-red">
              {bullets[0].title}
            </h4>
            <p className="mb-2 mr-20 max-w-[250px] text-right">
              {bullets[0].description}
            </p>
            <Image src={connector1} alt="connector" />
          </div>
          <div className="flex flex-col items-end pt-20">
            <h4 className="mb-4 mr-20 text-right text-xl font-black text-red">
              {bullets[2].title}
            </h4>
            <p className="mb-2 mr-20 max-w-[250px] text-right">
              {bullets[2].description}
            </p>
            <Image src={connector1} alt="connector" />
          </div>
        </section>
        <Image src={athlete} alt="Athlete" className="w-full" />
        <section className="grid grid-cols-1">
          <div className="flex flex-col justify-end pb-20">
            <Image src={connector2} alt="connector" />
            <h4 className=" mb-4 ml-32 mt-2 text-xl font-black text-red">
              {bullets[1].title}
            </h4>
            <p className="ml-32 max-w-[250px]">{bullets[1].description}</p>
          </div>
          <div className="flex flex-col justify-end pb-4">
            <Image src={connector2} alt="connector" />
            <h4 className="mb-4 ml-32 mt-2 text-xl font-black text-red">
              {bullets[3].title}
            </h4>
            <p className="ml-32 max-w-[250px]">{bullets[3].description}</p>
          </div>
        </section>
      </section>
    </article>
  );
};

export default Training;
