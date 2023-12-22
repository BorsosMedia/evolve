import RedButton from "./RedButton";

const Consultation = () => {
  return (
    <article className="bg-white py-4 text-center text-greyText">
      <section className="container mx-auto flex w-[90%] flex-col items-center justify-center gap-2">
        <h2 className="subheadline font-black uppercase">
          Book a 15 minute consultation call
        </h2>
        <p className="xl:text-xl 2xl:text-2xl">
          If there&apos;s anything else you want to know, let&apos;s talk!
          It&apos;s FREE.
        </p>
        <RedButton to="#" content="Book a Call" />
      </section>
    </article>
  );
};

export default Consultation;
