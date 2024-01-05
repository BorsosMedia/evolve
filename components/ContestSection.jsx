import RedButton from "./RedButton";

const ContestSection = () => {
  return (
    <article className="bg-contest-section" id="contest">
      <section className="container mx-auto flex w-[80%] flex-col justify-around gap-8 py-16 text-center md:text-right xl:text-xl 2xl:text-2xl">
        <h2 className="headline">
          Greatness comes
          <br />
          <span className="font-black uppercase text-red">with challenges</span>
        </h2>
        <section className="font-black">
          <h3 className="text-xl md:text-3xl lg:text-4xl 2xl:text-5xl">
            Join the New Year&apos;s Contest
          </h3>
          <p>Work on yourself for the chance to win one of these Prizes:</p>
        </section>
        <ul className="flex list-none flex-col justify-between gap-4">
          <li className="font-thin">
            <span className="text-[1.2em] font-black text-red">1st Place:</span>{" "}
            $500.00 CASH
          </li>
          <li className="font-thin">
            <span className="text-[1.2em] font-black text-red">2nd Place:</span>{" "}
            3 Month Coaching ($375.00 value)
          </li>
          <li className="font-thin">
            <span className="text-[1.2em] font-black text-red">3rd Place:</span>{" "}
            Supplement Stack ($140.00 value)
            <br />
            <span className="text-[0.8em] font-thin">
              Nuethix GDA MAX - $49.99
            </span>
            <br />
            <span className="text-[0.8em] font-thin">
              Nuethix Greens - $43.99
            </span>
            <br />
            <span className="text-[0.8em] font-thin">Nuethix Iso - $47.19</span>
          </li>
        </ul>
        <RedButton to="#coaching" content="Go to plans" />
      </section>
    </article>
  );
};

export default ContestSection;
