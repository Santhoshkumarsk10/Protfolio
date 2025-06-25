import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="mb-10 text-6xl text-cyan">About Me</h2>
      <p>
        I'm Santhoshkumar B — a passionate full-stack web developer and instructor with hands-on expertise in PHP, Laravel, React, Node.js, and REST APIs. I specialize in building scalable, secure web applications, integrating payment gateways, and turning complex ideas into clean, production-ready code.
<br />
<br />
        With a strong foundation in PHP programming and deep experience in the Laravel framework, I’ve developed and deployed real-world projects using Git, AWS, HTML, CSS, and JavaScript. My proficiency in SQL and database design has helped me build applications with robust data management and performance.
<br />
<br />
        I’ve consistently delivered high-quality code on time and within budget, while also ensuring seamless collaboration through version control and agile practices. I'm always learning, always evolving—and I love solving problems with code.
<br />
<br />
        I believe in building more than just software—I believe in building developers. Through CodeNest, I empower learners to take the leap from beginner to pro, with the right tools, mindset, and mentorship.
      </p>
      <button className="flex items-center gap-2 px-4 py-2 mt-10 text-lg transition-all duration-500 border rounded-full cursor-pointer border-orange hover:bg-orange md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="text-white transition-all duration-500 cursor-pointer hover:text-cyan"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
