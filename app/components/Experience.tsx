import React from "react";

import work from "../assets/work.svg";

export default function Experience() {
  return (
    <section className="experience bg-gray-100 px-1 xs:px-3 sm:px-5 py-20 dark:bg-zinc-900 dark:text-white">
      <div className="flex flex-wrap items-center">
        <div className="w-full sm:flex-1 m-auto">
          <img src={work} alt="Work section image"></img>        
        </div>
        <div className="w-full mt-10 sm:mt-0 sm:pl-2 sm:flex-1">
          <div>
            <h1 className="text-center text-xl font-medium">Experience</h1>

            <h3 className="mt-10 font-medium uppercase">Junior IT Environments Specialist</h3>
            <p>Solwit S.A., Gdansk</p>
            <p><small><em>2022 -</em></small></p>
            <p className="text-justify">Working as a Junior DevOps for a Solwit S.A. clients (eg. Intel Poland). Performing outsourced tasks. Automation of software developing and testing processes. Used tools or programming languages QuickBuild, Groovy, Bash, Github, Github Actions, etc.</p>

            <h3 className="mt-10 font-medium uppercase">Technical Worker</h3>
            <p>Center for Theoretical Physics PAS, Warsaw</p>
            <p><small><em>2009 - 2022</em></small></p>
            <p className="text-justify">My main responsibilities included IT support for office administration and staff (helpdesk). Monitoring and solving together with the main administrator of LAN problems. Development and content management for the Institute's websites. Creating computer hardware specifications for purchasing purposes. Automation of data collection for the purposes of reporting, etc. In this case, I used Bash, JavaScript, PHP, HTML/CSS, Python etc.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
