
'use client'
import {
  IconArrowsexpandLeft,
  IconBxCustomize,
  IconPennibLine,
} from "../icons";

import featureCover from "../../../public/feature-cover.svg"; // Note: ensure this is used or remove if unnecessary.
import Image from "next/image"; // Note: ensure this is used or remove if unnecessary.
import Card from "./Card";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from 'react-intersection-observer';
export default function FeaturesSection() {

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
  // Define your animation variants
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const features = [
    {
      title: "Beautifully designed",
      desc: "Float UI allows you build beautiful and modern websites regardless of your design skills.",
      icon: <IconPennibLine />,
    },
    {
      title: "Fully Responsive",
      desc: "Responsive designed components and templates that look great on any screen.",
      icon: <IconArrowsexpandLeft />,
    },
    {
      title: "Customizable",
      desc: "Copy and paste into your apps and experience the power of customizable components.",
      icon: <IconBxCustomize />,
    },
  ];

  return (
    <motion.section
    ref={setRefs}
  
    id="mission"
    variants={variants}
    initial="hidden"
    animate={inView ? "visible" : "hidden"}  // Control animation states based on in-view status
    transition={{ duration: 0.8 }}
   className=" md:my-32 pt-24 relative">
      <div        className="max-w-xl mx-auto space-y-4 text-center">
        <h2 className="text-4xl heading">Turn your ideas into reality</h2>
        <p className="text-zinc-400">
          Float UI offers all the vital building blocks you need to transform
          your idea into a great-looking startup.
        </p>
      </div>
      <ul className="space-y-6 gap-6 mt-8 max-w-7xl mx-auto grid-cols-2 sm:grid lg:grid-cols-3 sm:space-y-0">
        {features.map((item, key) => (
          <Card key={key} icon={item.icon} title={item.title} desc={item.desc} />
        ))}
      </ul>
    </motion.section>
  );
}
