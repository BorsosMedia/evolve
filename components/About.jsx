import Image from "next/image";

import about from "../public/assets/about.png";

const About = () => {
  return (
    <article className="grid grid-cols-1 bg-about md:grid-cols-2">
      <section>
        <Image
          src={about}
          alt="Jordan"
          className="hidden self-center md:block"
        />
      </section>
      <section>
        <h2 className="headline font-black uppercase">
          <span className="whitespace-nowrap">Welcome to the</span>
          <br />
          <span className="whitespace-nowrap text-red">Evolve family</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-1">
          <Image src={about} alt="Jordan" className="self-center md:hidden" />
          <div>
            <h3 className="font-black">I&apos;m Jordan Irizarry</h3>
            <p>
              I&apos;ve been coaching and training for ten years. I&apos;m a
              father, veteran, and bodybuilder so I understand the challenge of
              time management and discipline in all aspects of life. I will not
              only challenge you physically but also ensure it is a complete
              mindset change when it comes to life. With me, you&apos;re not
              just another client, you join our Evolve family. I will be direct,
              honest, and caring because I want you to succeed in all aspects of
              life.
            </p>
          </div>
        </div>
        <h3 className="font-black">Follow the EVOLVE METHOD!</h3>
        <p>
          We both have a mission. To reach your goals, I expect you to follow
          the plan, be attentive to detail, have trust in the plan, and have
          open communication. I will consistently give you 110%. I expect
          nothing less in return.
        </p>
      </section>
    </article>
  );
};

export default About;
