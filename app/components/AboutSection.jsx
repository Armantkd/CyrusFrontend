
//import React, { useTransition, useState } from "react";
'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from 'react-intersection-observer';
//import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = ({flipped = false}) => {
  /*
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };*/
  // useInView options

  const ref = useRef(null);
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.3, // Trigger when 10% of the element is in view
  });

  // Merge the refs together, if you need to use both
  function setRefs(node) {
    ref.current = node;
    inViewRef(node);
  }
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const getContent = () => {
    
    if (!flipped) {
      return (
      <>
      <Image src="/images/about-image.jpg" width={600} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p> 
          </div>
          </>
          );
    } else {
      return (
        <>
       
          <div className="mb-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-base lg:text-lg">
              I am a full stack web developer with a passion for creating
              interactive and responsive web applications. I have experience
              working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
              Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
              looking to expand my knowledge and skill set. I am a team player and
              I am excited to work with others to create amazing applications.
            </p> 
            </div>
            <Image src="/images/about-image.jpg" width={600} height={500} />
            </>
            );
    }
  };

  return (
    <motion.section 
    ref={setRefs} // Set the merged refs here
    className="text-white" 
    id="about"
    initial="hidden"       // Initial animation state
    animate={inView ? "visible" : "hidden"}  // Control animation states based on in-view status
    variants={variants}    // Use the defined variants
    transition={{ duration: 0.8 }} // Define the animation transition
  >
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          {getContent()}
          {/*
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
  */}
       
      </div>
    </motion.section>
  );
};

export default AboutSection;
