import React from "react";

import education from "../assets/education.svg";

export default function Education() {
  return (
    <section className="education px-1 xs:px-3 sm:px-5 py-20 dark:bg-black dark:text-white">
      <div className="flex flex-wrap-reverse items-center">
        <div className="w-full mt-10 sm:mt-0 sm:flex-1">
          <div>
            <h1 className="text-center text-xl font-medium">Education</h1>

            <h3 className="mt-10 font-medium uppercase">COMPUTER SCIENCE, SPECIALIZATION SOFTWARE ENGINEERING</h3>
            <p>University of Applied Computer Science and Management, Warsaw</p>
            <p><small><em>2009 - 2015</em></small></p>
            <p className="text-justify">First Degree Engineering Studies</p>
          </div>
        </div>
        <div className="w-full sm:flex-1 m-auto">
          <img src={education} alt="Education section image"></img>        
        </div>
      </div>
    </section>
  );
}
