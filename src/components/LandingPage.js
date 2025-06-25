import { motion } from 'framer-motion';
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMedia from './SocialMedia';

const LandingPage = ({ setSelectedPage }) => {

    return (
        // section is divided into two parts one is for image and other is for greeting message
        <section id="home" className='pb-5 md:flex md:justify-between md:items-center md:h-full gap-16 py-10'>

            {/* image part of the landing page */}
            <div className='basis-4/5 z-10 shadow-md rounded-lg mt-16 md:mt-32 flex justify-center md:order-2'>
                {/* profile initials instead of image */}
                <div className="bg-[rgba(32, 4, 67, 0.513)] rounded-2xl relative flex flex-col items-center w-full max-w-[400px] md:max-w-[500px] justify-center h-[250px] md:h-[300px]">
                  <div className="flex items-center justify-center rounded-full bg-purple-700 text-white font-bold text-7xl md:text-8xl w-[150px] h-[150px] md:w-[200px] md:h-[200px] mt-10 mb-5">MS</div>
                </div>
            </div>

            {/* Greeting message part of the landing page */}
            <div className='z-30 basis-2/5 mt-5 md:mt-32'>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1 }}
                    className=''
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <p className='text-3xl font-playfair z-10 text-center md:text-start md:text-5xl'>
                        Mrudul {" "}
                        <span
                            className="xs:relative xs:text- xs:font-bold z-20 text-purple-300 before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
                        >
                            Sharma
                        </span>
                    </p>
                    <h3 className='text-1xl mt-5 mb-5 text-sm text-center md:text-start'>
                        Aspiring Software Engineer | B.Tech ECE @ IIIT Nagpur
                    </h3>
                    <p className="mt-2 mb-7 bg-[rgba(45, 17, 79, 0.429)] text-smd text-center md:text-start">
                        <br />
                        Hi, I'm Mrudul Sharma, an enthusiastic developer and electronics engineering student at IIIT Nagpur. I love building impactful tech solutions and exploring new technologies. Welcome to my portfolio—here you'll find my journey, projects, and achievements. Let's connect and create something amazing together!
                    </p>
                    <p className="mt-4 mb-7 text-sm text-center md:text-start">
                    </p>
                </motion.div>

                <motion.div
                    className='flex justify-center mt-5 md:justify-start'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.5, ration: 2 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <a
                        className="bg-gradient-to-br from-purple-800 via-purple-800 to-violet-800 text-deep-blue rounded-sm py-3 px-7 font-semibold mr-2 hover:bg-blue hover:text-white hover:scale-105 transition duration-500 hover:shadow-lg hover:shadow-purple-500"
                        onClick={() => setSelectedPage("contact")}
                        href="https://www.linkedin.com/in/ranvijay-kumar-825457255/"
                    >
                        Hire Me
                    </a>
                    <AnchorLink
                        className='rounded-r-md bg-gradient-to-br from-purple-800 via-purple-800 to-violet-800 py-0.5 pr-0.5'
                        onClick={() => setSelectedPage("contact")}
                        href="#contact"
                    >
                        <div className='bg-purple-800 hover:text-white transition duration-500 w-full h-full flex items-center justify-center px-10 font-semibold text-black hover:shadow-lg hover:shadow-purple-500'>
                            Contact Me
                        </div>
                    </AnchorLink>
                </motion.div>
                <motion.div
                    className="flex mt-5 justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <SocialMedia />
                </motion.div>
            </div>
        </section>
    )
}

export default LandingPage;
