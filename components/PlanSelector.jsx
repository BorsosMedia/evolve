"use client";

import { useState } from "react";

import Card from "./Card";

const PlanSelector = () => {
  const planTypes = [
    "monthly",
    "3 months",
    "6 months",
    "customized training plan",
  ];
  const [plan, setPlan] = useState("monthly");

  const handleChange = (e) => {
    setPlan(e.target.htmlFor);
  };

  return (
    <section className="container z-10 mx-auto flex w-full flex-col items-center justify-center gap-[30px] pb-8 md:flex-row-reverse">
      <fieldset>
        {planTypes.map((planType, index) => (
          <div
            key={index}
            className={
              planType === "customized training plan" ? "col-span-3" : ""
            }
          >
            <input
              type="radio"
              value={planType}
              id={planType}
              name="plans"
              className="hidden"
            />
            <label
              htmlFor={planType}
              onClick={handleChange}
              className={
                plan === planType ? "selected-plan" : "unselected-plan"
              }
            >
              {planType}
            </label>
          </div>
        ))}
      </fieldset>
      <section className="flex flex-col items-center justify-center">
        {plan === "monthly" ? (
          <Card title="Monthly Coaching" plan="monthly" price="150" to="#" />
        ) : plan === "3 months" ? (
          <Card title="3 Month Coaching" plan="3 months" price="425" to="#" />
        ) : plan === "6 months" ? (
          <Card title="6 Month Coaching" plan="6 months" price="750" to="#" />
        ) : (
          <Card
            title="Customized Training Plan"
            plan="customized"
            price="200"
            to="#"
          />
        )}
        <p>*for remote and in-person clients</p>
      </section>
    </section>
  );
};

export default PlanSelector;
