"use client";

import { useState } from "react";

const Plans = () => {
  const [plan, setPlan] = useState("monthly");

  return (
    <article>
      <section>
        <h3>Where To Start?</h3>
        <h2>
          With Our Plans <span>we will lorem ipsum</span>
        </h2>
      </section>
      <section>
        <fieldset>
          <label>
            <input type="radio" />
          </label>
          <label>
            <input type="radio" />
          </label>
          <label>
            <input type="radio" />
          </label>
          <label>
            <input type="radio" />
          </label>
        </fieldset>
      </section>
    </article>
  );
};

export default Plans;
