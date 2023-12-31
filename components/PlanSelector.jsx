"use client";

import { useState } from "react";

import Card from "./Card";

const PlanSelector = () => {
  const planTypes = [
    {
      name: "monthly",
      description:
        "A personalized program designed to help you reach your goals, while focusing on reshaping your mindset and lifestyle.",
      recurrence: "Pay Monthly.",
    },
    {
      name: "3 months",
      description:
        "A personalized program designed to help you reach your goals, while focusing on reshaping your mindset and lifestyle.",
      recurrence: "Pay every 3 months for $25 OFF.",
    },
    {
      name: "6 months",
      description:
        "A personalized program designed to help you reach your goals, while focusing on reshaping your mindset and lifestyle.",
      recurrence: "Pay every 6 months for $150 OFF.",
    },
    {
      name: "customized training plan",
      description:
        "A personalized training blueprint that adapts to your pace and rhythm, amplifying your routines with targeted precision.",
      recurrence: "",
    },
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
            className={`${
              planType.name === "customized training plan" ? "col-span-3" : ""
            } gap-2 md:flex md:flex-col md:items-start`}
          >
            <input
              type="radio"
              value={planType.name}
              id={planType.name}
              name="plans"
              className="hidden"
            />
            <label
              htmlFor={planType.name}
              onClick={handleChange}
              className={
                plan === planType.name ? "selected-plan" : "unselected-plan"
              }
            >
              {planType.name}
            </label>
            <p
              className={`${
                plan === planType.name ? "md:block" : "hidden"
              } hidden w-[200px] text-center transition-all duration-300 ease-in-out md:text-left`}
            >
              <span>{planType.description}</span>
              <br />
              <span className="font-black">{planType.recurrence}</span>
            </p>
          </div>
        ))}
      </fieldset>
      <section className="flex flex-col items-center justify-center">
        {plan === "monthly" ? (
          <>
            <p className="mb-8 max-w-[400px] text-center md:hidden">
              {planTypes[0].description}{" "}
              <span className="font-black">{planTypes[0].recurrence}</span>
            </p>
            <Card
              title="Monthly Coaching"
              plan="monthly"
              price="150"
              to="https://coaching.teamevolvecoaching.com/ftc-mp"
            />
          </>
        ) : plan === "3 months" ? (
          <>
            <p className="mb-8 max-w-[400px] text-center md:hidden">
              {planTypes[1].description}{" "}
              <span className="font-black">{planTypes[1].recurrence}</span>
            </p>
            <Card
              title="3 Month Coaching"
              plan="3 months"
              price="425"
              to="https://coaching.teamevolvecoaching.com/ftc-3mp"
            />
          </>
        ) : plan === "6 months" ? (
          <>
            <p className=" mb-8 max-w-[400px] text-center md:hidden">
              {planTypes[2].description}{" "}
              <span className="font-black">{planTypes[2].recurrence}</span>
            </p>
            <Card
              title="6 Month Coaching"
              plan="6 months"
              price="750"
              to="https://coaching.teamevolvecoaching.com/ftc-6mp"
            />
          </>
        ) : (
          <>
            <p className="mx-auto mb-8 max-w-[400px] text-center md:hidden">
              {planTypes[3].description}{" "}
              <span className="font-black">{planTypes[3].recurrence}</span>
            </p>
            <Card
              title="Customized Training Plan"
              plan="customized"
              price="200"
              to="https://coaching.teamevolvecoaching.com/otc-ctpp"
            />
          </>
        )}
        <p className="mt-4">*for remote and in-person clients</p>
      </section>
    </section>
  );
};

export default PlanSelector;
