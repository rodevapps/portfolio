import React from "react";

export default function Skills() {
  return (
    <section className="px-1 xs:px-3 sm:px-5 py-20 dark:bg-black dark:text-white">
      <div className="flex flex-wrap">
        <div className="skills w-full sm:flex-1 sm:pr-2 mx-auto max-w-xl">
          <h1 className="text-center text-xl font-medium">Skills</h1>
          <p className="mt-10 text-justify">The diagrams below are my subjective assessment of my skills. I am certainly not the person with all the IT knowledge in my head. Instead, I am <strong>ready</strong> to develop my skills constantly. I'm also open to learning new IT technologies.</p>

          <div className="flex justify-between mb-1 mt-10">
            <span className="text-base font-medium">Linux (every day usage)</span>
            <span className="text-sm font-medium">60%</span>
          </div>
          <div className="w-full bg-gray-200 h-3 dark:bg-gray-700">
            <div className="bg-red-600 h-3" style={{ width: '60%' }}></div>
          </div>

          <div className="flex justify-between mb-1 mt-10">
            <span className="text-base font-medium">Bash (frequent use)</span>
            <span className="text-sm font-medium">60%</span>
          </div>
          <div className="w-full bg-gray-200 h-3 dark:bg-gray-700">
            <div className="bg-red-600 h-3" style={{ width: '60%' }}></div>
          </div>

          <div className="flex justify-between mb-1 mt-10">
            <span className="text-base font-medium">Docker, VirtualBox (frequent use)</span>
            <span className="text-sm font-medium">60%</span>
          </div>
          <div className="w-full bg-gray-200 h-3 dark:bg-gray-700">
            <div className="bg-red-600 h-3" style={{ width: '60%' }}></div>
          </div>

          <div className="flex justify-between mb-1 mt-10">
            <span className="text-base font-medium">Git (sometimes use)</span>
            <span className="text-sm font-medium">50%</span>
          </div>
          <div className="w-full bg-gray-200 h-3 dark:bg-gray-700">
            <div className="bg-red-600 h-3" style={{ width: '50%' }}></div>
          </div>

          <div className="flex justify-between mb-1 mt-10">
            <span className="text-base font-medium">HTML5 / CSS3 (sometimes use)</span>
            <span className="text-sm font-medium">40%</span>
          </div>
          <div className="w-full bg-gray-200 h-3 dark:bg-gray-700">
            <div className="bg-red-600 h-3" style={{ width: '40%' }}></div>
          </div>

          <div className="flex justify-between mb-1 mt-10">
            <span className="text-base font-medium">PHP (used few years ago)</span>
            <span className="text-sm font-medium">40%</span>
          </div>
          <div className="w-full bg-gray-200 h-3 dark:bg-gray-700">
            <div className="bg-red-600 h-3" style={{ width: '40%' }}></div>
          </div>

          <div className="flex justify-between mb-1 mt-10">
            <span className="text-base font-medium">JavaScript (use from time to time)</span>
            <span className="text-sm font-medium">40%</span>
          </div>
          <div className="w-full bg-gray-200 h-3 dark:bg-gray-700">
            <div className="bg-red-600 h-3" style={{ width: '40%' }}></div>
          </div>

          <div className="flex justify-between mb-1 mt-10">
            <span className="text-base font-medium">React.js (use from time to time)</span>
            <span className="text-sm font-medium">40%</span>
          </div>
          <div className="w-full bg-gray-200 h-3 dark:bg-gray-700">
            <div className="bg-red-600 h-3" style={{ width: '40%' }}></div>
          </div>

          <div className="flex justify-between mb-1 mt-10">
            <span className="text-base font-medium">Python (use from time to time)</span>
            <span className="text-sm font-medium">30%</span>
          </div>
          <div className="w-full bg-gray-200 h-3 dark:bg-gray-700">
            <div className="bg-red-600 h-3" style={{ width: '30%' }}></div>
          </div>

          <div className="flex justify-between mb-1 mt-10">
            <span className="text-base font-medium">Vue.js (use rarely)</span>
            <span className="text-sm font-medium">30%</span>
          </div>
          <div className="w-full bg-gray-200 h-3 dark:bg-gray-700">
            <div className="bg-red-600 h-3" style={{ width: '30%' }}></div>
          </div>

          <div className="flex justify-between mb-1 mt-10">
            <span className="text-base font-medium">SQL / SqLite / MySQL (use rarely)</span>
            <span className="text-sm font-medium">30%</span>
          </div>
          <div className="w-full bg-gray-200 h-3 dark:bg-gray-700">
            <div className="bg-red-600 h-3" style={{ width: '30%' }}></div>
          </div>

          <div className="flex justify-between mb-1 mt-10">
            <span className="text-base font-medium">Angular 2+ (use rarely)</span>
            <span className="text-sm font-medium">30%</span>
          </div>
          <div className="w-full bg-gray-200 h-3 dark:bg-gray-700">
            <div className="bg-red-600 h-3" style={{ width: '30%' }}></div>
          </div>

          <div className="flex justify-between mb-1 mt-10">
            <span className="text-base font-medium">TypeScript (use rarely)</span>
            <span className="text-sm font-medium">20%</span>
          </div>
          <div className="w-full bg-gray-200 h-3 dark:bg-gray-700">
            <div className="bg-red-600 h-3" style={{ width: '20%' }}></div>
          </div>

          <p className="mt-10 text-justify">These are a selected technologies which I have used since 2005. I have also had basic or elementary experience with Ansible, Awk, Ruby, Groovy, Java, C/C++, C#, PostgreSQL, MongoDB etc. I also have theoretical knowledge of the basics of many other technologies such as Jenkins, Terraform, Kubernetes, Helm. In the future I would like to become more familiar with Go, Scala and Rust etc.</p>
          <p className="mt-10 text-justify">I'm a person who is independent during solving IT problems. I'm ready to improve my qualifications and further learning.</p>
        </div>
        <div className="w-1/2 mt-10 sm:hidden flex mx-auto">
          <div className="flex-grow border-t border-gray-200"></div>
        </div>
        <div className="languages w-full mt-10 sm:mt-0 sm:flex-1 sm:pl-2 mx-auto max-w-xl">
          <h1 className="text-center text-xl font-medium">Languages</h1>
          <p className="mt-10 text-justify"><strong>Polish</strong> - native.</p>
          <p className="text-justify"><strong>English</strong> - at a level that allows me to read and understand the technical documentation, write e-mails or messages and hold simple conversations (max. B1 level, passive).</p>

          <div className="flex justify-between mb-1 mt-10">
            <span className="text-base font-medium">A2 - speaking</span>
            <span className="text-sm font-medium">30%</span>
          </div>
          <div className="w-full bg-gray-200 h-3 dark:bg-gray-700">
            <div className="bg-red-600 h-3" style={{ width: '30%' }}></div>
          </div>

          <div className="flex justify-between mb-1 mt-10">
            <span className="text-base font-medium">B1 - listening</span>
            <span className="text-sm font-medium">40%</span>
          </div>
          <div className="w-full bg-gray-200 h-3 dark:bg-gray-700">
            <div className="bg-red-600 h-3" style={{ width: '40%' }}></div>
          </div>

          <div className="flex justify-between mb-1 mt-10">
            <span className="text-base font-medium">B1 - reading</span>
            <span className="text-sm font-medium">40%</span>
          </div>
          <div className="w-full bg-gray-200 h-3 dark:bg-gray-700">
            <div className="bg-red-600 h-3" style={{ width: '40%' }}></div>
          </div>

          <div className="flex justify-between mb-1 mt-10">
            <span className="text-base font-medium">B1 - writing</span>
            <span className="text-sm font-medium">40%</span>
          </div>
          <div className="w-full bg-gray-200 h-3 dark:bg-gray-700">
            <div className="bg-red-600 h-3" style={{ width: '40%' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
