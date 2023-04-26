import dev from "../assets/dev.svg";

export default function About() {
  return (
    <section className="about flex flex-wrap-reverse min-h-screen px-1 xs:px-3 sm:px-5 dark:bg-black dark:text-white">
      <div className="w-full sm:flex-1 sm:m-auto mt-10">
        <div className="max-w-md m-auto">
          <h1 className="text-center text-2xl font-medium">Hi, I am Rafal. Software Developer, DevOps, SysOps</h1>
          <p className="mt-10 text-justify mb-20 sm:mb-0">I am an engineer with <strong>over 15 years of professional experience</strong> in the IT industry. During my career, I was exposed to many deep technical challenges related to Software Architecture and Development, IT Systems Administration and DevOps, where I was supporting companies like Intel Poland and Center for Theoretical Physics Polish Academy of Sciences. Continuously pushing myself ahead, for the past several years I’ve been contracting to 3rd parties and contributing to a variety of software projects – mainly in the Web-Development (Full Stack) domain, where I have gained additional experience and received a solid understanding of many Web-Development related technologies.</p>
        </div>
      </div>
      <div className="w-full sm:flex-1 m-auto">
        <img className="sm:pl-5 max-h-[300px] m-auto" src={dev} alt="Hero image"></img>
      </div>
    </section>
  );
}
