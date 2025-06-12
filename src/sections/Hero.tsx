import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Linkedin } from "lucide-react";
import AnimatedText from "../components/AnimatedText";
import profileImg from '../assets/img.jpeg';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary-200/30 dark:bg-primary-900/10 blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent-200/20 dark:bg-accent-900/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <span className="inline-block py-1 px-3 mb-4 text-sm font-medium rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
              Full-Stack Developer
            </span>

            <h1 className="mb-4 leading-tight">
              <AnimatedText
                text="Creating beautiful digital experiences that matter"
                className="inline-block font-bold"
              />
            </h1>

            <p className="text-lg md:text-xl mb-8 max-w-lg text-secondary-600 dark:text-secondary-400">
              I design and develop websites and applications that help
              businesses grow and users enjoy their experience.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                Get In Touch
              </a>
              <a href="#projects" className="btn-secondary">
                See My Work
              </a>
            </div>

            <div className="flex mt-10 space-x-5">

              <a
                href="https://www.linkedin.com/in/jinal-jasani-a96039354/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-primary-500 to-accent-500 rounded-3xl opacity-30 blur-2xl animate-pulse-slow z-0" />
              <img
                src={profileImg}
                alt="Professional portrait"
                className="relative z-10 w-full h-full object-cover rounded-3xl shadow-xl"
              />
            </div>

          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <a
            href="#about"
            className="flex flex-col items-center text-secondary-500 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            aria-label="Scroll down"
          >
            <span className="text-sm mb-2">Scroll down</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
