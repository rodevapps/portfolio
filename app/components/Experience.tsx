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
            <p className="text-justify">Working as a Junior DevOps for a Solwit S.A. client (Intel Poland). <strong>Main tasks</strong>: Keeping existing development pipelines in good health. Automatization of CI/CD processes. Creating new pipelines in QuickBuild or Github Action. Transformation of existing pipelines to work with Docker containers (Linux and Windows) running on the local Kubernetes cluster. Server infrastructure provisioning using the IaC (Infrastructure as Code) approach. <strong>Used tools or programming languages</strong>: QuickBuild, Bash, Docker, Groovy, Git, Github (including Github Actions), Linux etc.</p>

            <h3 className="mt-10 font-medium uppercase">Full Stack Developer</h3>
            <p>Contractor 3rd parties, Remote</p>
            <p><small><em>01.2019 -</em></small></p>
            <p className="text-justify">Working as a Software Engineer in web development related domains. Supporting Dorca Software Ltd. (Ireland) and several private Clients (Poland). <strong>Main tasks / achievements</strong>: developing front-end and back-end applications (web based learning platform for traders), developing mobile/wearable applications (application for Garmin Watch devices), configuring integration with Digital Ocean back-end infrastructure, configuring Nginx bastion to support full application deployment and security, developing Python programs to support large data sets parsing (Numpy, Scipy, Matplotlib), Python scripts including web scrapping (Selenium). Linux's systems administration. Automating data collecting processes. Automate large data set update processes (creating XML files and uploading data to PrestaShop). <strong>Technologies used</strong>: Node.js, Next.js, Django, Nginx, REST, InfluxDB, MySQL, Python, PHP, Git, monkey C.</p>

            <h3 className="mt-10 font-medium uppercase">Technical Worker</h3>
            <p>Center for Theoretical Physics PAS, Warsaw</p>
            <p><small><em>09.2009 - 07.2022</em></small></p>
            <p className="text-justify">IT support for scientific and administration projects carried out at the Institute (helpdesk, simple data analysis). Keeping the Institute IT and web infrastructure in good condition. Configuring, securing and monitoring internal LAN services (Linux admin tasks). Creating and expanding Institute websites (full stack tasks). Creating IT infrastructure specifications and coordinating IT equipment procurements. Automation of data collection for reporting purposes (parsing websites, storing data in SQL or noSQL databases eg. Sqlite, MySQL, PostgreSQL, MongoDB and displaying it in form of plots, xlsx files etc. or on the Institute website). In this case, I used: Linux (administrator level), Bash, PHP (Wordpress, Laravel, Symfony, etc.), JavaScript, HTML/CSS, Python, networking protocols and devices (Mikrotik, Unifi), Node.js (scraping and parsing libraries) etc.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
