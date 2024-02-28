import dev from "../assets/dev.svg";

export default function About() {
  return (
    <section className="about flex flex-wrap-reverse min-h-screen px-1 xs:px-3 sm:px-5 dark:bg-black dark:text-white">
      <div className="w-full sm:flex-1 sm:m-auto mt-10">
        <div className="max-w-md m-auto">
          <h1 className="text-center text-2xl font-medium">Hi, I am Rafal. IT enthusiast.</h1>
          <p className="mt-10 text-justify mb-20 sm:mb-0">I am an engineer with <strong>over 15 years of professional experience</strong> in the IT industry. In my career, I have dealt with many technical issues related to software architecture and development, IT systems administration and DevOps, where I supported companies such as the Polish Chamber of Physiotherapists, Intel Poland and the Center for Theoretical Physics of the Polish Academy of Sciences. In the past, I have also done small paid or non-profit projects, through which I gained additional experience especially in web development.</p>
          <div class="mt-5">
            <a href="https://docs.google.com/document/d/1CfrTWlNfD43dRw4QxEsB6cQ9w5IqZ2bAmc9UmW83iK0/edit?usp=sharing" title="See my CV" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">See my CV</a>
          </div>
        </div>
      </div>
      <div className="w-full sm:flex-1 m-auto">
        <img className="sm:pl-5 max-h-[300px] m-auto" src={dev} alt="Hero image"></img>
      </div>
    </section>
  );
}
