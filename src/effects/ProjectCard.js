import { motion } from 'framer-motion';
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ Data, image }) => {
  return (
    <motion.div
      className="group overflow-hidden bg-gradient-to-br from-purple-900 to-gray-700 backdrop-blur-sm border border-purple-700/30 rounded-xl transition-all duration-300 sm:hover:shadow-lg sm:hover:shadow-purple-500/20 sm:hover:scale-105"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {/* Image Container */}
      <div className="relative h-48 w-full p-4 ">
        <div className="w-full h-full flex items-center justify-center">
          <img
            src={image}
            alt={Data.title}
            className="max-h-full max-w-full object-contain rounded-lg"
            style={{
              width: 'auto',
              height: 'auto'
            }}
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-amber-500 to-purple-600 bg-clip-text text-transparent">
          {Data.title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
          {Data.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold mb-2 text-amber-500">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {Data.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs rounded-full bg-purple-900/50 border border-purple-700/30 text-gray-300 sm:hover:text-white sm:hover:border-purple-500 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <a
            href={Data.projectLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-600 text-white text-sm font-medium transition-all duration-300 sm:hover:bg-amber-700 sm:hover:scale-110"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
          <a
            href={Data.codeLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-800 text-white text-sm font-medium transition-all duration-300 sm:hover:bg-purple-900 sm:hover:scale-110"
          >
            <FaGithub  size={16} />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
