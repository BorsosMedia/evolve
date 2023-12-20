"use client";

import { useState } from "react";

import Card from "./Card";

const PlanSelector = () => {
  const planTypes = ["monthly", "3 months", "6 months", "one time"];
  const [plan, setPlan] = useState("monthly");

  const handleChange = (e) => {
    setPlan(e.target.htmlFor);
  };

  return (
    <section className="plan-display z-10">
      <fieldset>
        {planTypes.map((planType, index) => (
          <div key={index}>
            <label
              htmlFor={planType}
              onClick={handleChange}
              className={
                plan === planType ? "selected-plan" : "unselected-plan"
              }
            >
              <input
                type="radio"
                value={planType}
                id={planType}
                name="plans"
                className="hidden"
              />
              {planType}
            </label>
          </div>
        ))}
      </fieldset>
      {plan === "monthly" ? (
        <Card
          plan="monthly"
          price="149"
          to="https://training.alanixfitcoaching.com/ftc-bt-mp"
        />
      ) : plan === "3 months" ? (
        <Card
          plan="3 months"
          price="402"
          to="https://training.alanixfitcoaching.com/ftc-bt-3mp"
        />
      ) : plan === "6 months" ? (
        <Card
          plan="6 months"
          price="1195"
          to="https://training.alanixfitcoaching.com/ftc-ut-6mp"
        />
      ) : (
        <Card
          plan="annual"
          price="1251"
          to="https://training.alanixfitcoaching.com/ftc-bt-ap"
        />
      )}
      <p>*for remote and in-person clients</p>
    </section>
  );
};

export default PlanSelector;
