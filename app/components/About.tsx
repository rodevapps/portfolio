import dev from "../assets/dev.svg";

export default function About() {
  return (
    <section className="about flex flex-wrap-reverse min-h-screen px-1 xs:px-3 sm:px-5 dark:bg-black dark:text-white">
      <div className="w-full sm:flex-1 sm:m-auto mt-10">
        <div className="max-w-md m-auto">
          <h1 className="text-center text-2xl font-medium">Hi, I am Rafal. IT enthusiast.</h1>
          <p className="mt-10 text-justify mb-5 sm:mb-0">I am an engineer with <strong>over 15 years of professional experience</strong> in the IT industry. In my career, I have dealt with many technical issues related to technical support, IT systems administration, DevOps, software architecture and development. I supported companies such as the Polish Chamber of Physiotherapists, Intel Poland and the Center for Theoretical Physics of the Polish Academy of Sciences. In the past, I have also done small paid or non-profit projects, through which I gained additional Full Stack experience especially in web development.</p>
          <div className="mt-5">
            <a href="https://docs.google.com/document/d/1CfrTWlNfD43dRw4QxEsB6cQ9w5IqZ2bAmc9UmW83iK0/edit?usp=sharing" title="See my CV (pl)" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-0 xs:px-4">See my CV (pl)</a>
          </div>
          <div className="mt-5">
            <a href="https://docs.google.com/document/d/14eMD_HqzrqSkYGq7qTgS8XeCKeDByKUHVCLUOGL85Ok/edit?usp=sharing" title="See my CV (en)" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-0 xs:px-4">See my CV (en)</a>
          </div>
        </div>
      </div>
      <div className="w-full sm:flex-1 m-auto">
        <img className="sm:pl-5 max-h-[300px] m-auto" src={dev} alt="Hero image"></img>
      </div>
    </section>
  );
}
