import { ContactFormAction } from "../components/ContactForm";

import About from "../components/About";
import Preferences from "../components/Preferences";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Contact from "../components/Contact";

interface T {
  request: Request
}

export const action = async ({ request }: T) => {
  return await ContactFormAction({ request });
};

export default function Index() {
  return (
    <main className="relative">
      <About />
      <Preferences />
      <Portfolio />
      <Skills />
      <Experience />
      <Education />

      <section>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10188.96502114861!2d18.776222646375043!3d50.324750087714236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711327687773cb9%3A0xc9512bd611a6f0f3!2sZabrze!5e0!3m2!1spl!2spl!4v1655998770688!5m2!1spl!2spl" width="100%" height="450" style={{ border: 0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>

      <Contact />
    </main>
  );
}
