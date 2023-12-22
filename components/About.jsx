import Image from "next/image";

import about from "../public/assets/about.png";

const About = () => {
  return (
    <article className="bg-about" id="about">
      <section className="container mx-auto grid w-[80%] grid-cols-1 gap-[30px] py-10 lg:grid-cols-2">
        <section>
          <Image
            src={about}
            alt="Jordan"
            className="hidden self-center lg:block"
          />
        </section>
        <section>
          <h2 className="headline pb-8 font-black uppercase">
            <span className="whitespace-nowrap">Welcome to the</span>
            <br />
            <span className="whitespace-nowrap text-red">Evolve family</span>
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <Image
              src={about}
              alt="Jordan"
              className="hidden self-center sm:block lg:hidden"
            />
            <div>
              <h3 className="py-4 text-2xl font-black 2xl:text-4xl">
                My Name Is Jordan Irizarry
              </h3>
              <p className="xl:text-xl 2xl:text-xl">
                I&apos;ve been training and coaching for ten years. I&apos;m a
                father, a veteran, and a bodybuilder so I understand the
                challenge of time management and discipline in all aspects of
                life. I will not only challenge you physically, but I will also
                make sure you undergo a complete mindset change towards life.
                For me, you won&apos;t be just another client, but part of the
                Evolve Family. I will be direct, honest, and caring because I
                want you to succeed.
              </p>
            </div>
          </div>
          <h3 className="py-4 text-2xl font-black 2xl:text-4xl">
            Follow the EVOLVE METHOD!
          </h3>
          <p className="xl:text-xl 2xl:text-xl">
            This is a joint mission. I expect you to follow the plan and
            communicate openly with me in order to reach your goals. I will
            consistently give you 110% and I expect nothing less in return.
          </p>
        </section>
      </section>
    </article>
  );
};

export default About;
