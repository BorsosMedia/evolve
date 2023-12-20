import RedButton from "./RedButton";

const Consultation = () => {
  return (
    <article className="bg-white py-4 text-center text-greyText">
      <section className="container mx-auto flex w-[90%] flex-col items-center justify-center gap-2">
        <h2 className="text-xl font-black uppercase">
          Book a 15 minute consultation call
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <RedButton to="#" content="Book a Call" />
      </section>
    </article>
  );
};

export default Consultation;
