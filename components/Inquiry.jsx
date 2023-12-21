import Image from "next/image";

import inquiry1 from "../public/assets/inquiry-1.png";
import inquiry2 from "../public/assets/inquiry-2.png";

const Inquiry = () => {
  return (
    <article className="relative">
      <section className="absolute inset-y-0 flex w-full flex-col justify-between">
        <div className="h-1 w-full bg-separator" />
        <div className="flex w-full flex-row">
          <Image
            src={inquiry1}
            alt="Bodybuilder 1"
            className="relative h-full w-auto"
          />
          <Image
            src={inquiry2}
            alt="Bodybuilder 2"
            className="relative h-full w-auto"
          />
        </div>
        <div className="h-1 w-full bg-separator" />
      </section>
      {/* <div className="h-[50%]">hola</div> */}
    </article>
  );
};

export default Inquiry;
