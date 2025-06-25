import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Software Developer",
    company: "Codtesma Pushing Infotech",
    date: "2021 - 2022",
    responsibilities: [
      "Implementing reusable components.",
      "Participating in large scale application.",
      "Working on the performance of web applications.",
      "Generating new ideas for better user experience.",
    ],
  },
  {
    job: "PHP Laravel Developer",
    company: "VVT Solution Pvt Ldt",
    date: "2022 - 2023",
    responsibilities: [
      "Explaining and facilitating web development concepts.",
      "Help students with their assignments and grade them weekly.",
      "Provide support for students through their learning journey.",
    ],
  },
  {
    job: "Senior PHP Laravel Developer",
    company: "Testware informatics Pvt Ldt",
    date: "2023 - 2024",
    responsibilities: [
      "Teaching JavaScript, React and TailwindCSS.",
      "Participating in preparing course materials.",
      "Helping students through their way in learning web development technologies.",
    ],
  },
  {
    job: "Software Developer",
    company: "The Wholewave Elements Pvt Ldt",
    date: "2023 - 2024",
    responsibilities: [
      "Teaching JavaScript, React and TailwindCSS.",
      "Participating in preparing course materials.",
      "Helping students through their way in learning web development technologies.",
    ],
  },
  {
    job: "Senior Software Developer",
    company: "The Handletech Labs Pvt Ldt",
    date: "2024 - Present",
    responsibilities: [
      "Teaching JavaScript, React and TailwindCSS.",
      "Participating in preparing course materials.",
      "Helping students through their way in learning web development technologies.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex items-center justify-between md:flex-row sm:flex-col">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 4 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
