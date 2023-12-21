import Link from "next/link";

const Card = ({ title, plan, price, to }) => {
  return (
    <div className="flex h-[568px] w-[340px] flex-col items-center justify-between rounded-lg border-2 border-solid border-red bg-card px-[20px] py-[30px] text-center text-white sm:w-[419px]">
      <h4 className="text-5xl font-black uppercase">{title}</h4>
      <div>
        <p className="text-8xl font-black text-red">${price}</p>
        {plan !== "customized" && (
          <p className="text-2xl">/per {plan === "monthly" ? "month" : plan}</p>
        )}
      </div>
      <Link href={to}>
        <button className="rounded-[58px] border bg-white px-8 py-2 text-3xl font-black uppercase text-red transition-all duration-300 ease-in-out hover:scale-110">
          Purchase
        </button>
      </Link>
      <div>
        {plan === "customized" ? (
          <p>
            I will give you an entire training plan that you can follow to reach
            your goals:This is recommended to people that have experience
            training and want to boost their training routines.
          </p>
        ) : (
          <ul className="grid grid-cols-2 text-left">
            <li>Custom Workouts</li>
            <li>Personal Well-Being</li>
            <li>Custom Meal Plans</li>
            <li>Support in Every Step Of The Process</li>
            <li>Frequent Comunication</li>
            <li>Goal Tracking</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Card;
