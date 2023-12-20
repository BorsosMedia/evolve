import Link from "next/link";

const RedButton = ({ to, content }) => {
  return (
    <Link href={to}>
      <button className="rounded-[36px] border bg-red uppercase text-white">
        {content}
      </button>
    </Link>
  );
};

export default RedButton;
