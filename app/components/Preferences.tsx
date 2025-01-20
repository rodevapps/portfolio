export default function Preferences() {
  return (
    <section className="preferences bg-gray-100 px-1 xs:px-3 sm:px-5 py-20 dark:bg-zinc-900 dark:text-white">
      <h1 className="text-center text-xl font-medium">Preferences</h1>
      <div className="flex flex-wrap mt-10">
        <div className="sm:flex-1 sm:pr-2">
          <h1 className="text-xl font-medium">What kind of job am I looking for?</h1>
          <ul className="mt-10 text-justify sm:list-disc sm:pl-4">
            <li>I am currently working full time. I am looking for a temporary work in which I can develop my skills. I am interested in working at most a few h/week.</li>
            <li>I am looking for <strong>remote work</strong> (with possible occasional meetings at the employer's office).</li>
            <li>I prefer to work from 8 am to 4 pm Mon-Fri without frequent business travel.</li>
            <li>I rate my skills at <strong>junior/mid, regular</strong> level depending on the issue.</li>
            <li>I do not see myself in team management positions.</li>
            <li>So far, I have been working mostly on my own, performing assigned tasks (sent via email or ticket systems).</li>
            <li>When working in a group, I play the role of a person following orders. I have basic communication skills.</li>
            <li>I am bad at working under stress, time pressure, and on multiple tasks simultaneously. At previous employers, I usually had plenty of time to quietly perform my duties.</li>
            <li>I don't have a company.</li>
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
