import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from './Image';

const SkillsSet = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const SkillData = [
    {
      name: 'Html 5',
      Image: '/html.png',
      width: 80,
      height: 80,
    },
    {
      name: 'Tailwind Css',
      Image: '/tailwind.png',
      width: 80,
      height: 80,
    },
    {
      name: "Pytorch",
      Image: "/pytorch.png",
      width: 80,
      height: 80,
    },
    {
      name: 'Kubernetes',
      Image: '/kubernetes.png',
      width: 80,
      height: 80,
    },
    {
      name: 'Css',
      Image: '/css.png',
      width: 80,
      height: 80,
    },
    {
      name: 'JavaScript',
      Image: '/js-file.png',
      width: 65,
      height: 65,
    },
    {
      name: 'React',
      Image: '/logo192.png',
      width: 80,
      height: 80,
    },
    {
      name: 'TypeScript',
      Image: '/typescript.png',
      width: 80,
      height: 80,
    },
    {
      name: 'Next js 13',
      Image: '/nextjs-icon.png',
      width: 80,
      height: 80,
    },
    {
      name: 'Docker',
      Image: '/docker.png',
      width: 80,
      height: 80,
    },
    {
      name: 'Node js',
      Image: '/nodejs.png',
      width: 80,
      height: 80,
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      className=" h-full w-full flex items-center mb-5 justify-center"
    >
      <div className="flex flex-col gap-20 max-w-[80%] text-center items-center">
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-semibold text-white text-[40px] md:text-[50px]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {' '}
              Tech Stack....{' '}
            </span>
          </h1>
          <p className="text-gray-500 text-[20px]">
            Empowering Innovation with Cutting-Edge Technology.
          </p>
        </div>
        <Swiper
          slidesPerView={4}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={5000}
          modules={[Autoplay]}
          className="max-w-[90%] "
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index}>
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
                
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          slidesPerView={4}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          speed={5000}
          modules={[Autoplay]}
          className="max-w-[85%]"
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index}>
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
};

export default SkillsSet;
