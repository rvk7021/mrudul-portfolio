import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import AboutMeCard from '../effects/AboutMeCard.js';
import { Data } from '../constants/Data.js';
import useMediaQuery from "../hooks/useMediaQuery.js";

const About = () => {
  const isAboveMediumScreen = useMediaQuery("(min-width:768px)");

  return (
    <div className="w-full bg-gradient-to-br from-gray-900/80 via-purple-900/50 to-gray-800/80 rounded-xl p-6 border border-purple-500/20 transition-all duration-300 shadow-md shadow-purple-500/50">
      <h1 className='text-center text-4xl mt-2 mb-4 font-sans'>Educational Journey</h1>
      
      {isAboveMediumScreen ? (
        <VerticalTimeline animate={false}>
          {Data.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--education"
              contentStyle={{ background: 'rgba(11, 8, 49, 0)', color: 'white' }}
              contentArrowStyle={{ borderRight: '9px solid rgba(11, 8, 49, 0.402)' }}
              date={item.date}
              iconStyle={{ background: 'purple', color: 'white' }}
              icon={item.icon}
            >
              <AboutMeCard
                className='w-full m-0 p-0'
                title={item.title}
                subtitle={item.subtitle}
                description={item.description}
                marks={item.score}
              />
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      ) : (
        <div className="space-y-4">
          {Data.map((item, index) => (
            <AboutMeCard
              key={index}
              className='w-full'
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              marks={item.score}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default About;