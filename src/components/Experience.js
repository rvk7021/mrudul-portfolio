import React from "react";
import "../cssfiles/Experience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { JobData } from "../constants/Data";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="mt-20 mb-10">
      <motion.div
        className="flex items-center justify-center text-purple-500 mb-14 font-extrabold text-[30px] sm:text-[40px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        Experience
      </motion.div>

      <VerticalTimeline animate={false} lineColor="rgba(108, 26, 152, 0.4)">
        {JobData.map((Job, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background: "transparent",
              color: "white",
              padding: 0,
            }}
            date={Job.duration}
            dateClassName="datechange font-medium"
            iconStyle={{ 
              background: "rgba(128, 0, 128, 0.8)", 
              color: "white",
              boxShadow: "0 0 0 4px rgba(128, 0, 128, 0.2), inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)"
            }}
            icon={
              <div className="flex items-center justify-center h-full">
                <span className="text-lg font-bold">{index + 1}</span>
              </div>
            }
          >
            <div className="bg-gradient-to-br from-purple-900 to-purple-700 rounded-lg shadow-lg p-4 border border-purple-500/30 backdrop-blur-sm">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <h1 className="text-2xl sm:text-3xl text-center text-white font-bold p-2">
                  {Job.position}
                </h1>
                <div className="flex justify-center items-center gap-2 my-3">
                  <h1 className="text-[18px] sm:text-[24px] text-center text-white font-medium">
                    @{Job.company}
                  </h1>
                </div>
                <div className="w-1/3 h-1 bg-purple-400 mx-auto rounded-full mb-4" />
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <ul className="bg-purple-800/50 rounded-md p-5 mx-2 mt-4 list-disc list-outside pl-8 border-l-4 border-purple-400">
                  {Job.points.map((point, index) => (
                    <motion.li
                      key={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.1 
                      }}
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      className="sm:text-[18px] font-sans my-3 text-purple-50"
                    >
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;