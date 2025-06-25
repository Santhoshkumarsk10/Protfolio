import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "HPC Official Website",
    year: "Sep 2021",
    align: "right",
    image: "/images/hpc.png",
    link: "https://hpc.hrdcorp.gov.my/",
  },
  {
    name: "Upskill Malaysia",
    year: "Nov 2021",
    align: "left",
    image: "/images/upskill.png",
    link: "https://upskillmalaysia.gov.my/",
  },
  {
    name: "Single Window",
    year: "Jun 2021",
    align: "right",
    image: "/images/singlewindow.png",
    link: "https://sw.upskillmalaysia.gov.my/upskills/auth/login",
  },
  {
    name: "MyHRDCORP",
    year: "Jul 2022",
    align: "left",
    image: "/images/hrdcrop.png",
    link: "https://play.google.com/store/apps/details?id=superapp.hrdcorp.gov.my&hl=en_US",
  },
  {
    name: "College Sugget",
    year: "Oct 2022",
    align: "right",
    image: "/images/collegesuggest.png",
    link: "https://collegesuggest.com/",
  },
  {
    name: "Think Gas",
    year: "May 2024",
    align: "left",
    image: "/images/thinkgas.png",
    link: "https://collegesuggest.com/",
  },

];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
