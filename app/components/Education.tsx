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
            <p>Warsaw School of Information Technology, Warsaw</p>
            <p><small><em>2009 - 2015</em></small></p>
            <p className="text-justify">Bachelor Degree Engineering Studies</p>

            <h1 className="text-center text-xl font-medium mt-10">Personality</h1>

            <p className="mt-10"><strong>Type:</strong> <a href="https://www.16personalities.com/infj-personality">Turbulent Advocate</a></p>
            <p><strong>Role:</strong> <a href="https://www.16personalities.com/articles/roles-diplomats">Diplomat</a></p>
            <p><strong>Strategy:</strong> <a href="https://www.16personalities.com/articles/strategies-constant-improvement">Constant Improvement</a></p>
            <p className="mt-5"><a className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 cursor-pointer" href="/assets/my-personality.pdf">Results</a></p>
          </div>
        </div>
        <div className="w-full sm:flex-1 m-auto">
          <img src={education} alt="Education section image"></img>        
        </div>
      </div>
    </section>
  );
}
