import React from "react";

import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <section className="contact bg-gray-100 px-1 xs:px-3 sm:px-5 dark:bg-zinc-900 dark:text-white">
      <div className="flex flex-wrap">
        <div className="w-full sm:flex-1">
          <ContactForm />
        </div>
        <div className="hidden md:block m-auto min-w-[150px]">
          <div className="relative left-1/2 -ml-0.5 h-24 w-0.5 bg-gray-200"></div>
          <div className="relative left-1/2 -ml-3 py-5 text-gray-400">OR</div>
          <div className="relative left-1/2 -ml-0.5 h-24 w-0.5 bg-gray-200"></div>
        </div>
        <div className="w-1/2 -mt-10 sm:hidden flex mx-auto">
          <div className="flex-grow border-t border-gray-200"></div>
        </div>
        <div className="w-full sm:flex-1 m-auto sm:px-5 pb-20 sm:py-20">
          <h1 className="text-center text-xl font-medium">Contact data</h1>

          <h3 className="mt-10 text-center"><strong>Place of residence</strong></h3>
          <p className="text-center">Zabrze, Poland</p>

          <h3 className="mt-5 text-center"><strong>Phone</strong></h3>
          <p className="text-center"><a href="tel:+48726091925">+48726091925</a></p>

          <h3 className="mt-5 text-center"><strong>Email</strong></h3>
          <p className="text-center"><a className="text-xs xs:text-base" href="mailto:work.opiela@gmail.com">work.opiela@gmail.com</a></p>

          <h3 className="mt-5 text-center"><strong>Github</strong></h3>
          <p className="text-center"><a className="hidden xs:block xs:text-base" href="https://github.com/rodevapps">https://github.com/rodevapps</a></p>
          <p className="text-center"><a className="block text-xs xs:hidden" href="https://github.com/rodevapps">&#128279;</a></p>

          <h3 className="mt-5 text-center"><strong>Linkedin</strong></h3>
          <p className="text-center"><a className="hidden sm:block sm:text-base" href="https://www.linkedin.com/in/rafalopiela/">https://www.linkedin.com/in/rafalopiela/</a></p>
          <p className="text-center"><a className="block text-xs sm:hidden" href="https://www.linkedin.com/in/rafalopiela/">&#128279;</a></p>
        </div>
      </div>
    </section>
  );
}
