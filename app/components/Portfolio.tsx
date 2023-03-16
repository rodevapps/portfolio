import React from "react";

export default function Portfolio() {
  return (
    <section className="portfolio bg-gray-100 px-1 xs:px-3 sm:px-5 pb-20 dark:bg-zinc-900 dark:text-white">
      <div className="w-1/2 -mt-10 mb-10 sm:hidden flex mx-auto">
        <div className="flex-grow border-t border-gray-200"></div>
      </div>
      <h1 className="text-center text-xl font-medium">Portfolio</h1>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 grid-flow-row gap-4">
        <div className="border border-gray-200 bg-white py-6 px-1 sm:px-6 shadow-sm flex flex-col justify-between dark:bg-zinc-800">
          <h2 className="mb-2 text-2xl font-medium">Portfolio Website</h2>
          <p className="mb-4"><em>HTML5, Tailwind CSS, Remix.js</em></p>
          <p><a className="bg-blue-400 p-2 text-white hover:bg-blue-600" href="https://github.com/rodevapps/portfolio">See code</a></p>
        </div>
        <div className="border border-gray-200 bg-white py-6 px-1 sm:px-6 shadow-sm flex flex-col justify-between dark:bg-zinc-800">
          <h2 className="mb-2 text-2xl font-medium">Fiszki</h2>
          <p className="mb-4"><em>HTML5, Angular.js, Prisma</em></p>
          <p><a className="bg-blue-400 p-2 text-white hover:bg-blue-600" href="https://github.com/rodevapps/fiszki">See code</a></p>
        </div>
        <div className="border border-gray-200 bg-white py-6 px-1 sm:px-6 shadow-sm flex flex-col justify-between dark:bg-zinc-800">
          <h2 className="mb-2 text-2xl font-medium">Project from tutorial</h2>
          <p className="mb-4"><em>Django, React.js, HTML5, CSS3</em></p>
          <p><a className="bg-blue-400 p-2 text-white hover:bg-blue-600" href="https://github.com/rodevapps/proj0">See code</a></p>
        </div>
        <div className="border border-gray-200 bg-white py-6 px-1 sm:px-6 shadow-sm flex flex-col justify-between dark:bg-zinc-800">
          <h2 className="mb-2 text-2xl font-medium">Project from tutorial</h2>
          <p className="mb-4"><em>Spring Boot, SQL, Vue.js</em></p>
          <p><a className="bg-blue-400 p-2 text-white hover:bg-blue-600" href="https://github.com/rodevapps/proj1">See code</a></p>
        </div>
        <div className="border border-gray-200 bg-white py-6 px-1 sm:px-6 shadow-sm flex flex-col justify-between dark:bg-zinc-800">
          <h2 className="mb-2 text-2xl font-medium">Example Bash Scripts</h2>
          <p className="mb-4"><em>Bash</em></p>
          <p><a className="bg-blue-400 p-2 text-white hover:bg-blue-600" href="https://github.com/rodevapps/proj2">See code</a></p>
        </div>
        <div className="border border-gray-200 bg-white py-6 px-1 sm:px-6 shadow-sm flex flex-col justify-between dark:bg-zinc-800">
          <h2 className="mb-2 text-2xl font-medium">Design Patterns</h2>
          <p className="mb-4"><em>Java</em></p>
          <p><a className="bg-blue-400 p-2 text-white hover:bg-blue-600" href="https://github.com/rodevapps/proj3">See code</a></p>
        </div>
        <div className="border border-gray-200 bg-white py-6 px-1 sm:px-6 shadow-sm flex flex-col justify-between dark:bg-zinc-800">
          <h2 className="mb-2 text-2xl font-medium">Project from tutorial</h2>
          <p className="mb-4"><em>Vue.js, HTML, CSS3</em></p>
          <p><a className="bg-blue-400 p-2 text-white hover:bg-blue-600" href="https://github.com/rodevapps/proj4">See code</a></p>
        </div>
        <div className="border border-gray-200 bg-white py-6 px-1 sm:px-6 shadow-sm flex flex-col justify-between dark:bg-zinc-800">
          <h2 className="mb-2 text-2xl font-medium">Example form validation in Angular</h2>
          <p className="mb-4"><em>Angular, TailwindCSS</em></p>
          <p><a className="bg-blue-400 p-2 text-white hover:bg-blue-600" href="https://github.com/rodevapps/event0">See code</a></p>
        </div>
        <div className="border border-gray-200 bg-white py-6 px-1 sm:px-6 shadow-sm flex flex-col justify-between dark:bg-zinc-800">
          <h2 className="mb-2 text-2xl font-medium">Very simple Angular app</h2>
          <p className="mb-4"><em>Angular, HTML, CSS3</em></p>
          <p><a className="bg-blue-400 p-2 text-white hover:bg-blue-600" href="https://github.com/rodevapps/planner0">See code</a></p>
        </div>
        <div className="border border-gray-200 bg-white py-6 px-1 sm:px-6 shadow-sm flex flex-col justify-between dark:bg-zinc-800">
          <h2 className="mb-2 text-2xl font-medium">Very simple GraphQL API</h2>
          <p className="mb-4"><em>JavaScript, GraphQL</em></p>
          <p><a className="bg-blue-400 p-2 text-white hover:bg-blue-600" href="https://github.com/rodevapps/planner0-graphql">See code</a></p>
        </div>
        <div className="border border-gray-200 bg-white py-6 px-1 sm:px-6 shadow-sm flex flex-col justify-between dark:bg-zinc-800">
          <h2 className="mb-2 text-2xl font-medium">Routing example in many JS frameworks</h2>
          <p className="mb-4"><em>JavaScript, HTML, CSS3</em></p>
          <p><a className="bg-blue-400 p-2 text-white hover:bg-blue-600" href="https://github.com/rodevapps/navigation">See code</a></p>
        </div>
        <div className="border border-gray-200 bg-white py-6 px-1 sm:px-6 shadow-sm flex flex-col justify-between dark:bg-zinc-800">
          <h2 className="mb-2 text-2xl font-medium">Other not done projects due to lack of time</h2>
          <p className="mb-4"><em>JavaScript, HTML, CSS3</em></p>
          <p><a className="bg-blue-400 p-2 text-white hover:bg-blue-600" href="https://github.com/rodevapps/notdone">See code</a></p>
        </div>
      </div>
    </section>
  );
}
