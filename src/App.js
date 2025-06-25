import { useEffect, useState } from "react";
import "./App.css";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./components/Navbar";
import DotGroup from "./components/dotGroup";
import LandingPage from "./components/LandingPage";
import Skills from "./components/Skills";
import { motion } from "framer-motion";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Background from "./effects/Background";
import Project from "./components/Project";
import Experience from "./components/Experience";

// Modern Classy Loader Components
const ModernLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentPhase,] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 4000);

    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        return prev + Math.random() * 8 + 2;
      });
    }, 120);

    return () => {
      clearTimeout(timer);
      clearInterval(progressTimer);
    };
  }, [onComplete]);

  // Floating Orbs Animation
  const FloatingOrbs = () => (
    <div className="relative w-32 h-32">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="absolute w-6 h-6 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full"
          style={{
            animation: `float-${i} 2s ease-in-out infinite`,
            left: `${30 + i * 20}px`,
            top: `${30 + Math.sin(i) * 20}px`,
          }}
        />
      ))}
    </div>
  );

  // Morphing Grid Pattern
  const MorphingGrid = () => (
    <div className="grid grid-cols-3 gap-2 w-24 h-24">
      {Array.from({ length: 9 }).map((_, i) => (
        <div
          key={i}
          className="bg-gradient-to-br from-purple-500 to-purple-700 rounded"
          style={{
            animation: `morph 1.5s ease-in-out infinite`,
            animationDelay: `${i * 0.1}s`,
            transform: currentPhase === 0 ? 'scale(1)' :
              currentPhase === 1 ? 'scale(0.8) rotate(45deg)' :
                'scale(1.2) rotate(90deg)',
            transition: 'transform 0.6s ease-in-out'
          }}
        />
      ))}
    </div>
  );

  // Liquid Wave Effect
  const LiquidWave = () => (
    <div className="relative w-32 h-32 overflow-hidden rounded-full bg-purple-100">
      <div
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-600 to-purple-400 rounded-full"
        style={{
          height: `${progress}%`,
          transition: 'height 0.3s ease-out'
        }}
      >
        <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
      </div>
      <div className="absolute inset-0 border-4 border-purple-300 rounded-full" />
    </div>
  );

  const loaders = [
    { component: <FloatingOrbs />, title: "Visitor ?" },
    { component: <MorphingGrid />, title: "Loading Assets" },
    { component: <LiquidWave />, title: "Almost Ready" }
  ];

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 flex items-center justify-center z-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Blobs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        {/* Floating Particles */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main Loader Container */}
      <div className="relative z-10 text-center">
        {/* Glassmorphism Card */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 shadow-2xl">
          {/* Animated Logo/Brand Area */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl mb-4 shadow-lg">
              <span className="text-2xl font-bold text-white">P</span>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-purple-200 to-white bg-clip-text text-transparent">
              Portfolio
            </h1>
          </div>

          {/* Dynamic Loader */}
          <div className="mb-8 flex justify-center">
            {loaders[currentPhase].component}
          </div>

          {/* Status Text */}
          <div className="mb-6">
            <p className="text-purple-200 text-lg font-medium">
              {loaders[currentPhase].title}
            </p>
          </div>

          {/* Modern Progress Bar */}
          <div className="w-80 h-1 bg-white/20 rounded-full overflow-hidden mb-4">
            <div
              className="h-full bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${Math.min(progress, 100)}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
            </div>
          </div>

          {/* Elegant Progress Indicator */}
          <div className="flex justify-center space-x-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${i <= currentPhase ? 'bg-purple-400 scale-125' : 'bg-white/30'
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Subtle Animation Hint */}
        <p className="text-purple-300/60 text-sm mt-6 animate-pulse">
          Crafting your experience...
        </p>
      </div>

      <style jsx>{`
        @keyframes float-0 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-15px) translateX(-8px); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-25px) translateX(15px); }
        }
        @keyframes morph {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(0.8) rotate(180deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); opacity: 0.4; }
          50% { transform: translateY(-30px); opacity: 1; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsTopOfPage(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isLoading && <ModernLoader onComplete={handleLoadingComplete} />}

      {!isLoading && (
        <div className="cont main">
          <Background />
          {/* navbar is starting  */}
          <Navbar
            isTopOfPage={isTopOfPage}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          {/* landing dot symbols followed by landing page */}
          <div className="w-[95%] md:w-5/6 mx-auto md:h-full">
            {isAboveMediumScreen && (
              <DotGroup
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            )}
            <motion.div
              margin="0 0 -200px 0"
              amount="all"
              onViewportEnter={() => setSelectedPage("home")}
            >
              <LandingPage setSelectedPage={setSelectedPage} />
              <About />
            </motion.div>

            {/* contact me page from here */}
          </div>
          <div className="cont w-5/6 mx-auto md:h-full">
            <motion.div
              margin="0 0 -200px 0"
              amount="all"
              className="cont"
              onViewportEnter={() => setSelectedPage("skills")}
            >
              <Skills />
            </motion.div>
          </div>
          <div className="">
            <motion.div
              margin="0 0 -200px 0"
              amount="all"
              className="projectsection "
              onViewportEnter={() => setSelectedPage("projects")}
            >
              <Project />
            </motion.div>
          </div>
          <div className="">
            <motion.div
              margin="0 0 -200px 0"
              amount="all"
              onViewportEnter={() => setSelectedPage("experience")}
            >
              <Experience />
            </motion.div>
          </div>
          <div className="cont w-5/6 mx-auto md:h-full">
            <motion.div
              margin="0 0 -200px 0"
              amount="all"
              className="cont"
              onViewportEnter={() => setSelectedPage("contact")}
            >
              <Contact />
            </motion.div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;



// import { useEffect, useState } from "react";
// import "./App.css";
// import useMediaQuery from "./hooks/useMediaQuery";
// import Navbar from "./components/Navbar";
// import DotGroup from "./components/dotGroup";
// import LandingPage from "./components/LandingPage";
// import Skills from "./components/Skills";
// import { motion } from "framer-motion";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import About from "./components/About";
// import Background from "./effects/Background";
// import Project from "./components/Project";
// import Experience from "./components/Experience";
// function App() {
//   const [selectedPage, setSelectedPage] = useState("home");
//   const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");
//   const [isTopOfPage, setIsTopOfPage] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsTopOfPage(window.scrollY === 0);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="cont main">
//       <Background />
//       {/* navbar is starting  */}
//       <Navbar
//         isTopOfPage={isTopOfPage}
//         selectedPage={selectedPage}
//         setSelectedPage={setSelectedPage}
//       />
//       {/* landing dot symbols followed by landing page */}
//       <div className="w-[95%] md:w-5/6 mx-auto md:h-full">
//         {isAboveMediumScreen && (
//           <DotGroup
//             selectedPage={selectedPage}
//             setSelectedPage={setSelectedPage}
//           />
//         )}
//         <motion.div
//           margin="0 0 -200px 0"
//           amount="all"
//           onViewportEnter={() => setSelectedPage("home")}
//         >
//           <LandingPage setSelectedPage={setSelectedPage} />
//           <About />
//         </motion.div>

//         {/* contact me page from here */}
//       </div>
//       <div className="cont w-5/6 mx-auto md:h-full">
//         <motion.div
//           margin="0 0 -200px 0"
//           amount="all"
//           className="cont"
//           onViewportEnter={() => setSelectedPage("skills")}
//         >
//           <Skills />
//         </motion.div>
//       </div>
//       <div className="">
//         <motion.div
//           margin="0 0 -200px 0"
//           amount="all"
//           className="projectsection "
//           onViewportEnter={() => setSelectedPage("projects")}
//         >
//           <Project />
//         </motion.div>
//       </div>
//       <div className="">
//         <motion.div
//           margin="0 0 -200px 0"
//           amount="all"
//           onViewportEnter={() => setSelectedPage("experience")}
//         >
//           <Experience/>
//         </motion.div>
//       </div>
//       <div className="cont w-5/6 mx-auto md:h-full">
//         <motion.div
//           margin="0 0 -200px 0"
//           amount="all"
//           className="cont"
//           onViewportEnter={() => setSelectedPage("contact")}
//         >
//           <Contact />
//         </motion.div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default App;
