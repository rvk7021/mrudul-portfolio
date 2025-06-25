// import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import "../cssfiles/Skills.css";
import LineGradient from "./LineGradient";
import SkillsSet from "../effects/SkillSet";


const Skills = () => {

  const courses=[
    "Database Management System",
    "Data Structures",
    "Cloud Computing",
    "Operating System",
    "Computer Networks",
    "Software Engineering",
    "OOP Concepts",
    "Machine Learning",
  ]
  return (
    <section id="skills" className="md:shadow-md md:shadow-purple-700/50  mt-2 pb-5 md:pb-5 md:p-5">
      <div className="skillset md:flex md:justify-between mt-16 gap-32 ">
        <SkillsSet />
      </div>
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex  md:justify-between md:gap-16 mt-10">
        <motion.div
          className="w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-center font-playfair  text-4xl mb-5">
            MY <span className="text-amber-600">SKILLS</span>
          </p>
          <LineGradient />
          <p className="mt-10 mb-7 font-sans tracking-wide	word">
            I'm a full stack developer with expertise in a vast array of tech
            stacks, enabling me to handle both front-end and back-end
            development efficiently.
          </p>
          <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Courses
          </h3>
          <div className="grid ss:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 },
                }}
                className="group"
              >
                <div className="bg-gradient-to-r from-purple-500 to-purple-900 p-4 rounded-lg shadow-lg hover:shadow-purple-700/30 transition-all duration-300 transform hover:-translate-y-1">
                  <p className="text-center text-white font-sans tracking-wide">{course}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        </motion.div>

      </div>

      {/* SKILLS*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:justify-between mt-15 mb-10 gap-[55px] sm:gap-6">
  {/* Problem-Solving */}
  <motion.div
    className="mt-10"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
    variants={{
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    }}
  >
    <div className="relative h-32">
      <div className="z-10">
        <p className="text-center text-2xl sm:text-3xl font-semibold mt-3">Problem-Solving</p>
      </div>
      <div className="skillone w-1/2 md:w-3/4 h-32 absolute right-0 top-0 z-[-1]">
        <img src="/innovative.png" alt="Problem-Solving" className="opacity-[0.13]" />
      </div>
    </div>
    <p className="text-lg font-mono font-medium text-left -mt-12">
      I tackle challenges with a structured and analytical approach, breaking
      down problems into clear, actionable solutions. My problem-solving skills
      enable me to efficiently debug code, optimize performance, and develop
      innovative solutions that drive success.
    </p>
  </motion.div>

  {/* Creativity */}
  <motion.div
    className="mt-10"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ delay: 0.2, duration: 0.5 }}
    variants={{
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    }}
  >
    <div className="relative h-32">
      <div className="z-10">
        <p className="text-center text-2xl sm:text-3xl font-semibold mt-3">Creativity</p>
      </div>
      <div className="w-1/2 md:w-3/4 h-32 absolute right-0 top-0 z-[-1]">
        <img src="/imaginative.png" alt="Creativity" className="opacity-[0.14]" />
      </div>
    </div>
    <p className="text-lg font-mono font-medium text-left -mt-12">
      My creative mindset helps me think outside the box to design unique user
      experiences and build innovative features. Whether it's UI/UX design or
      optimizing code efficiency, I strive to bring fresh perspectives to my
      work.
    </p>
  </motion.div>

  {/* Teamwork */}
  <motion.div
    className="mt-10 h-[350px] "
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ delay: 0.4, duration: 0.5 }}
    variants={{
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    }}
  >
    <div className="relative h-32">
      <div className="z-10">
        <p className="text-center text-2xl sm:text-3xl font-semibold mt-3">Teamwork</p>
      </div>
      <div className="w-1/2 md:w-3/4 h-32 absolute right-0 top-0 z-[-1]">
        <img src="/collaborative.png" alt="Teamwork" className="opacity-[0.14]" />
      </div>
    </div>
    <p className="text-lg font-mono font-medium text-left -mt-12">
      I thrive in collaborative environments, valuing teamwork as a key driver
      of success. By sharing ideas, learning from others, and contributing
      actively, I ensure smooth project execution and effective problem-solving
      within a team.
    </p>
  </motion.div>
</div>


    </section>
  );
};

export default Skills;
