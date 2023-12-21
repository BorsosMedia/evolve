import PlanSelector from "./PlanSelector";

const Plans = () => {
  return (
    <article id="coaching">
      <section className="pb-10">
        <h3 className="subheadline pb-8 text-center">Ready To Evolve?</h3>
        <h2 className="headline mx-auto w-[80%] bg-title py-4 text-center uppercase">
          Pick the <span className="font-black">best plan</span> for you!
        </h2>
      </section>
      <PlanSelector />
    </article>
  );
};

export default Plans;
