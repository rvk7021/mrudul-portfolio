import { useState, useEffect } from "react";
import "../cssfiles/Project.css";
import { ProjectData } from "../constants/Data";
import { motion } from "framer-motion";
import ProjectCard from "../effects/ProjectCard";

const Project = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("Web App");

  useEffect(() => {
    setWorks(ProjectData);
    setFilterWork(ProjectData);
  }, []);

  useEffect(() => {
    if (activeFilter === "All") {
      setFilterWork(works);
    } else {
      setFilterWork(works.filter((work) => work.tags.includes(activeFilter)));
    }
  }, [activeFilter, works]);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
  };

  return (
    <section id="projects" className="mt-20 pb-10">
      <div className="text-white font-bold text-[30px] sm:text-[40px]">
        <motion.div
          className="flex items-center justify-center text-purple-500"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          Developer's Gallery
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <h3 className="mx-5 p-2 font-sans text-center text-[18px] mt-5">
          Why settle for words when you can witness their true skills in action? 
          What better way to judge a developer than to peek into their gallery of innovation!
        </h3>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div
        className="mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="flex justify-center">
          <div className="grid ml-1 mr-1 rounded-[15px] p-2 text-center gap-2 text-[18px] w-[400px] sm:w-[700px] grid-cols-3">
            {["Web App", "ML", "mlweb"].map((item) => (
              <div
                key={item}
                className={`projectbutton cursor-pointer p-2 transition-all duration-300 
                ${
                  activeFilter === item
                    ? "bg-purple-600 text-white"
                    : "bg-[rgba(88,10,136,0.448)] text-gray-300 sm:hover:bg-purple-700 sm:hover:text-white"
                }`}
                onClick={() => handleWorkFilter(item)}
              >
                {item === "mlweb" ? "ML + Web" : item}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Project Cards */}
      <div className="grid gap-4 mx-4 sm:w-4/5 sm:mx-auto grid-cols-1 xs:grid-cols-2 md:grid-cols-3 mt-16">
        {filterWork.map((work, index) => (
          <ProjectCard key={index} Data={work} image={work.image} />
        ))}
      </div>
    </section>
  );
};

export default Project;
