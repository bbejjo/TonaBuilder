"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="grid gap-5"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-blue-800">
          სახელი
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="თქვენი სახელი"
          className="input-field"
        />
      </div>

      <div>
        <label htmlFor="phone" className="mb-2 block text-sm font-medium text-blue-800">
          ტელეფონი
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+995 5XX XX XX XX"
          className="input-field"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-blue-800">
          შეტყობინება
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="მოკლედ აღწერეთ პროექტი, ლოკაცია და რა ტექნიკა გჭირდებათ"
          className="w-full rounded-[24px] border border-blue-200 bg-white px-4 py-3 text-sm text-blue-950 outline-none transition duration-300 placeholder:text-blue-400 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-300/30"
        />
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-blue-700">
          სწრაფი პასუხისთვის პირდაპირი სატელეფონო კონტაქტი ყველაზე ეფექტურია.
        </p>
        <button type="submit" className="button-primary shrink-0">
          გაგზავნა
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      {submitted ? (
        <p className="mt-4 text-sm text-blue-700">
          ფორმა საინფორმაციო დემოა. სწრაფი პასუხისთვის დაგვირეკეთ ან მოგვწერეთ ელფოსტაზე.
        </p>
      ) : null}
    </form>
  );
}
