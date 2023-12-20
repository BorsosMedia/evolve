import Link from "next/link";

const Card = ({ plan, price, to, bullets }) => {
  return (
    <div className="h-[568px] w-[340px] border-2 border-solid border-red bg-card text-white sm:w-[419px]">
      <h4 className="uppercase">{plan} coaching</h4>
      <div>
        <p className="text-red">{price}</p>
        {plan !== "one-time" && (
          <p>/per {plan === "monthly" ? "month" : plan}</p>
        )}
      </div>
      <Link href={to}>
        <button className="rounded-[58px] border bg-white text-red">
          Purchase
        </button>
      </Link>
      {/* <div>
        {bullets.length > 0 &&
          bullets.map((bullet, index) => (
            <li key={index} className="text-lightGrey">
              {bullet}
            </li>
          ))}
      </div> */}
    </div>
  );
};

export default Card;
