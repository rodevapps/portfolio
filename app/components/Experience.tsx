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
            <p><small><em>07.2022 - 04.2023</em></small></p>
            <p className="text-justify">Working as a Junior DevOps for a Solwit S.A. client (Intel Poland). Keeping existing development pipelines in good health. Automatization of CI/CD processes. Creating new pipelines in QuickBuild or Github Action. Transformation of existing pipelines to work with Docker containers (Linux and Windows) running on the local Kubernetes cluster. Server and database infrastructure provisioning using the IaC (Infrastructure as Code) approach. Used tools or programming languages QuickBuild, Bash, Docker, Github (inc. Github Actions), Groovy, etc.</p>

            <h3 className="mt-10 font-medium uppercase">Technical Worker</h3>
            <p>Center for Theoretical Physics PAS, Warsaw</p>
            <p><small><em>09.2009 - 07.2022</em></small></p>
            <p className="text-justify">IT support for scientific and administration projects carried out at the Institute (helpdesk, simple data analysis, preparing and monitoring Linux infrastructure). Keeping the Institute IT and Web infrastructure in good condition. Configuring, securing and monitoring internal LAN services (Linux admin tasks). Creating and expanding Institute websites (full stack tasks). Creating IT infrastructure specifications and coordinating IT equipment procurements. Automation of data collection for reporting purposes (parsing websites, storing data in SQL or noSQL databases eg. Sqlite, MySQL, PostgreSQL, MongoDB and displaying it in form of plots, xlsx files etc. or on the Institute website). In this case, I used Bash, JavaScript, PHP (Wordpress, Laravel), HTML/CSS, Python etc.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
