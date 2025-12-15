import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Background Gradient Blob */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-10 animate-pulse delay-1000" />

      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={textVariant}>
            <h2 className="text-sm md:text-base text-accent font-medium tracking-wide uppercase mb-4">
              Application Developer | Senior Consultant
            </h2>
          </motion.div>

          <motion.h1
            variants={textVariant}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          >
            Hi, I'm <span className="text-gradient">Nitin</span>
          </motion.h1>

          <motion.p
            variants={textVariant}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
          >
            Crafting scalable microservices and performant applications with Java, Spring Boot, and modern cloud technologies.
          </motion.p>

          <motion.div
            variants={textVariant}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href="#projects"
              className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors flex items-center gap-2"
            >
              View Work <ArrowRight size={18} />
            </a>
            <a 
              href="#contact"
              className="px-8 py-3 border border-white/20 rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
