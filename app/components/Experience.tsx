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

            <p className="mt-10 text-justify"><strong>I've been working in DevOps / SysOps positions (Linux, Ubuntu) for the past few years. The work mainly consisted of maintaining the operation of the existing IT infrastructure and responding to problems as they occurred.</strong></p>

            <h3 className="mt-10 font-medium uppercase">Junior DevOps</h3>
            <p>The Polish Chamber of Physiotherapists, Warsaw</p>
            <p><em>06.2023 -</em></p>
            <p className="text-justify">Working as a Junior DevOps or Linux Administrator.<br /><strong>Main tasks</strong>: Linux systems administration (Ubuntu), DevOps tasks (Azure DevOps), support in application deployment processes (.Net/Node.js) to development and production servers.<br /><strong>Used tools or programming languages</strong>: Linux, Bash, Docker, Azure DevOps, Ansible, PostgreSQL, HAProxy.</p>

            <h3 className="mt-10 font-medium uppercase">Junior IT Environments Specialist</h3>
            <p>Solwit S.A., Gdansk</p>
            <p><em>07.2022 - 04.2023</em></p>
            <p className="text-justify">Working as a Junior DevOps for a Solwit S.A. client (Intel Poland).<br /><strong>Main tasks</strong>: Keeping existing development pipelines in good health. Automatization of CI/CD processes. Creating new pipelines in QuickBuild or Github Action. Transformation of existing pipelines to work with Docker containers (Linux and Windows) running on the local Kubernetes cluster. Server infrastructure provisioning using the IaC (Infrastructure as Code) approach.<br /><strong>Used tools or programming languages</strong>: QuickBuild, Bash, Docker, Groovy, Git, Github (including Github Actions), Linux etc.</p>

            <h3 className="mt-10 font-medium uppercase">Technical Worker</h3>
            <p>Center for Theoretical Physics PAS, Warsaw</p>
            <p><em>09.2009 - 07.2022</em></p>
            <p className="text-justify">IT support for scientific and administration projects carried out at the Institute (helpdesk, SysOps, programming).<br /><strong>Main tasks</strong>: Technical support of employees (OS installation and configuration, resolving IT problems). Keeping the Institute IT and web infrastructure in good condition. Configuring, securing and monitoring internal LAN services (Linux admin tasks). Creating and expanding Institute websites (full stack tasks). Creating IT infrastructure specifications and coordinating IT equipment procurements. Automation of data collection for reporting purposes (parsing websites, storing data in SQL databases eg. Sqlite and displaying it in form of plots, xlsx files etc. or on the Institute website).<br /><strong>Used tools or programming languages</strong>: Linux (administrator level), Bash, PHP (Laravel, etc.), JavaScript, HTML/CSS, Python, networking protocols and devices (Mikrotik, Unifi), Node.js (scraping and parsing libraries) etc.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
