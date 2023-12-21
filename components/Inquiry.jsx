import Image from "next/image";

import inquiry1 from "../public/assets/inquiry-1.png";
import inquiry2 from "../public/assets/inquiry-2.png";

const Inquiry = () => {
  return (
    <article className="relative" id="inquiry">
      {/* <section className="absolute inset-y-0 flex w-full flex-col justify-between">
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
      </section> */}
      <section className="text-center">
        <h3 className="subheadline pt-8 uppercase">
          Do You Need More Information?
        </h3>
        <h2 className="headline py-4 font-black uppercase">
          Ask all your questions Below!
        </h2>
        <iframe
          src="https://api.leadconnectorhq.com/widget/form/0ayCWnbch2DZNIeWJIPF"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            borderRadius: "4px",
          }}
          id="inline-0ayCWnbch2DZNIeWJIPF"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Inquiry Form"
          data-height="454"
          data-layout-iframe-id="inline-0ayCWnbch2DZNIeWJIPF"
          data-form-id="0ayCWnbch2DZNIeWJIPF"
          title="Inquiry Form"
        />
      </section>
    </article>
  );
};

export default Inquiry;
