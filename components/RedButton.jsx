import Link from "next/link";

const RedButton = ({ to, content }) => {
  return (
    <Link href={to}>
      <button className="rounded-[36px] bg-red px-8 py-2 font-black uppercase text-white duration-300 ease-in-out hover:scale-110 2xl:text-2xl">
        {content}
      </button>
    </Link>
  );
};

export default RedButton;
