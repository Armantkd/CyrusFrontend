'use client'
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; // make sure to install this package

const Mission = () => {
  // Reference for the component we want to detect in view
  const ref = useRef(null);
  
  // useInView options
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.3, // Trigger when 10% of the element is in view
  });

  // Merge the refs together, if you need to use both
  function setRefs(node) {
    ref.current = node;
    inViewRef(node);
  }

  // Define your animation variants
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.section
      ref={setRefs} // Set the merged refs here
      className="text-white"
      id="mission"
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"} // Control animation states based on in-view status
      transition={{ duration: 0.8 }}
    >
      {<div className="mt-4 md:mt-0 text-center flex flex-col h-full py-8 px-4 sm:py-16 xl:px-16">
        <h2 className="text-4xl font-bold text-white mb-4">Our Mission</h2>
        <p className="text-base lg:text-lg">
          I am a full stack web developer with a passion for creating
          interactive and responsive web applications. I have experience
          working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
          Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
          looking to expand my knowledge and skill set. I am a team player and
          I am excited to work with others to create amazing applications.
        </p>
      </div>}
    </motion.section>
  );
};

export default Mission;
