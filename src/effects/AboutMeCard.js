// import "../cssfiles/AboutMe.css"; // Import the CSS file for styling
import { motion } from "framer-motion";
const AboutMeCard = ({ title, subtitle, description, marks }) => {
  return (
    <div className="card">
      <div className="card-content bg-gradient-to-br from-gray-900/80 via-purple-900/50 to-gray-900/80  rounded-xl p-6 border border-purple-500/20 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.3 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h3 className="card-title text-center text-white text-2xl font-semibold">{title}</h3>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h4 className="card-subtitle text-center border-b-2 border-gray-600 mt-1 pb-1">{subtitle}</h4>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="card-description shadow-sm rounded-md  md:p-2 py-1 px-1">
            {description}
          </p>
        </motion.div>
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="card-footer mt-1 p-1 text-center">
          <span className="card-marks font-bold text-xl "> {marks}</span>
        </div>
      </motion.div>
      </div>

    </div>
  );
};

export default AboutMeCard;
