import React from "react";

export default function Alert() {
  return (
    <section className="preferences bg-gray-100 px-1 xs:px-3 sm:px-5 py-20 dark:bg-zinc-900 dark:text-white">
      <h1 className="text-center text-xl font-medium">Preferences</h1>
      <div className="flex flex-wrap mt-10">
        <div className="sm:flex-1 sm:pr-2">
          <h1 className="text-xl font-medium">What kind of job am I looking for?</h1>
          <ul className="mt-10 text-justify sm:list-disc sm:pl-4">
            <li>I'm interested in <strong>remote work</strong> with possible meetings at the employer's office (with distance dependent frequency).</li>
            <li>I don't have a company. I prefer a <strong>full-time contract</strong>.</li>
            <li>Remuneration for work to be agreed. I would like to earn no less than <strong>5500 PLN net / month (~ 7500 PLN gross / month)</strong> in case of pernament employment contract.</li>
            <li>I am ready to start work <strong>immediately</strong>.</li>
          </ul>
        </div>
        <div className="hidden sm:block m-auto min-w-[150px]">
          <div className="relative left-1/2 -ml-0.5 h-24 w-0.5 bg-gray-200"></div>
        </div>
        <div className="mt-10 sm:mt-0 sm:flex-1 sm:pl-2">
          <h1 className="text-xl font-medium">I'm interested in the IT industry in one or more of the following areas:</h1>
          <ul className="mt-10 text-justify sm:list-disc sm:pl-4">
            <li>Desktop or web applications programming.</li>
            <li>Linux/Unix and Windows systems administrations, DevOps.</li>
            <li>Processing of any size text files, statistical analysis of large data sets.</li>
            <li>Support for relational and noSQL databases, Helpdesk.</li>
            <li>Creating automated tests.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
