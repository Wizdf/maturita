import { motion } from 'framer-motion';
import { SlideUp, ZoomIn } from '../../animations/animation';
import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls, Bounds } from '@react-three/drei';
import { Link } from 'react-router-dom';

import { myProjects } from './popisek.js';
import SingleModel from './SingleM.jsx';

const projectCount = myProjects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  const currentProject = myProjects[selectedProjectIndex];

  return (
    <section id="micronav" className="max-w-7xl mx-auto relative c-space my-20">
      {/* Section header */}
      <div className="text-center mb-12">
        <motion.p
          variants={ZoomIn(0.5)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false }}
          className="text-white/70 text-sm sm:text-base tracking-wide"
        >
          ZDE ZJISTĚTE VÍCE O CZ HRÁCH
        </motion.p>

        <motion.h1
          variants={ZoomIn(0.8)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false }}
          className="micrositeTitle text-white font-orbi text-4xl sm:text-5xl mt-2"
        >
          MICROSITES
        </motion.h1>
      </div>

      {/* Grid layout with increased gap */}
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-10 w-full">
        {/* LEFT SIDE */}
        <motion.div
          variants={SlideUp(0.3)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false }}
          className="projectCard flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl"
          style={{ boxShadow: currentProject.logoStyle.boxShadow }}
        >
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>

          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}
          >
            <img
              className="w-10 h-10 shadow-sm"
              src={currentProject.logo}
              alt="logo"
            />
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: false }}
              className="text-white text-2xl font-semibold"
            >
              {currentProject.title}
            </motion.p>

            <motion.p
              variants={SlideUp(0.45)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: false }}
            >
              {currentProject.desc}
            </motion.p>

            <motion.p
              variants={SlideUp(0.5)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: false }}
            >
              {currentProject.subdesc}
            </motion.p>
          </div>

          <motion.div
            variants={SlideUp(0.55)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false }}
            className="flex items-center justify-between flex-wrap gap-5"
          >
            <div></div>
            <Link
              to={currentProject.href}
              className="flex items-center gap-2 cursor-pointer text-white-600"
            >
              <p>Navštívit Microsite</p>
              <img src="/arrow-up.png" alt="arrow" className="w-3 h-3" />
            </Link>
          </motion.div>

          <div className="flex justify-between items-center mt-7">
            <motion.button
              variants={SlideUp(0.6)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: false }}
              className="arrow-btn arrow-gradient"
              onClick={() => handleNavigation('previous')}
            >
              <img src="/left-arrow.png" alt="left arrow" />
            </motion.button>

            <motion.button
              variants={SlideUp(0.7)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: false }}
              className="arrow-btn arrow-gradient"
              onClick={() => handleNavigation('next')}
            >
              <img src="/right-arrow.png" alt="right arrow" className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>

        {/* RIGHT SIDE: 3D Canvas (animated container only) */}
        <motion.div
          variants={SlideUp(0.5)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false }}
          className="canvasContainer border border-black-300 bg-black-200 rounded-lg h-96 md:h-full"
        >
          <Canvas key={selectedProjectIndex}>
            <ambientLight intensity={4} />
            <directionalLight position={[10, 20, 10]} intensity={5} />
            <spotLight
              position={[0, 15, 5]}
              angle={0.3}
              intensity={6}
              penumbra={1}
              castShadow
            />

            <Suspense fallback={null}>
              <Bounds fit clip observe margin={1.2}>
                <Center>
                  <group key={selectedProjectIndex}>
                    {selectedProjectIndex === 0 && (
                      <SingleModel path="/models/shieldsword.glb" />
                    )}
                    {selectedProjectIndex === 1 && (
                      <SingleModel path="/models/tank.glb" />
                    )}
                    {selectedProjectIndex === 2 && (
                      <SingleModel
                        path="/models/thompson.glb"
                        rotation={[0, Math.PI, 0]}
                      />
                    )}
                    {selectedProjectIndex === 3 && (
                      <SingleModel path="/models/truck.glb" />
                    )}
                  </group>
                </Center>
              </Bounds>
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
            </Suspense>
          </Canvas>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;