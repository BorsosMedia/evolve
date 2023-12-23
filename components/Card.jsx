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
            This is an ideal plan for experienced fitness enthusiasts seeking to
            boost their training routines and enhance their ongoing goals.
          </p>
        ) : (
          <ul className="grid grid-cols-2 text-left">
            <li className="card-item">Targeted Workouts</li>
            <li className="card-item">Personal Well-Being</li>
            <li className="card-item">Customized Meal Plans</li>
            <li className="card-item">Support In Every Step Of The Process</li>
            <li className="card-item">Frequent Communication</li>
            <li className="card-item">Support Every Step of the Way</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Card;
