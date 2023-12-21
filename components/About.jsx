import Image from "next/image";

import about from "../public/assets/about.png";

const About = () => {
  return (
    <article className="bg-about">
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
              <h3 className="py-4 text-2xl font-black">
                I&apos;m Jordan Irizarry
              </h3>
              <p>
                I&apos;ve been coaching and training for ten years. I&apos;m a
                father, veteran, and bodybuilder so I understand the challenge
                of time management and discipline in all aspects of life. I will
                not only challenge you physically but also ensure it is a
                complete mindset change when it comes to life. With me,
                you&apos;re not just another client, you join our Evolve family.
                I will be direct, honest, and caring because I want you to
                succeed in all aspects of life.
              </p>
            </div>
          </div>
          <h3 className="py-4 text-2xl font-black">
            Follow the EVOLVE METHOD!
          </h3>
          <p>
            We both have a mission. To reach your goals, I expect you to follow
            the plan, be attentive to detail, have trust in the plan, and have
            open communication. I will consistently give you 110%. I expect
            nothing less in return.
          </p>
        </section>
      </section>
    </article>
  );
};

export default About;
