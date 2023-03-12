import dev from "../assets/dev.svg";

export default function About() {
  return (
    <section className="about flex flex-wrap-reverse min-h-screen px-1 xs:px-3 sm:px-5 dark:bg-black dark:text-white">
      <div className="w-full sm:flex-1 sm:m-auto mt-10">
        <div className="max-w-md m-auto">
          <h1 className="text-center text-2xl font-medium">Hi, I am Rafal. Full Stack Developer, DevOps, IT Specialist</h1>
          <p className="mt-10 text-justify mb-20 sm:mb-0">I'm 40 years old. For more than 25 years I've been interested in applied computer science in the broadest sense. Currently, I am looking for a new job, new experience &#128521;. Last time I am working as a <strong>Junior DevOps</strong>, but I will consider any position related to IT. Here you can find more information about the skills I have, which I hope will be useful for you.</p>
        </div>
      </div>
      <div className="w-full sm:flex-1 m-auto">
        <img className="sm:pl-5 max-h-[300px] m-auto" src={dev} alt="Hero image"></img>
      </div>
    </section>
  );
}
