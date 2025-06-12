import React from "react";
import { motion } from "framer-motion";
import { Calendar, User, Award, Clock } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-white dark:bg-secondary-900">
      <div className="container">
        <SectionTitle
          title="About Me"
          subtitle="Get to know me and my background"
        />

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-200 dark:bg-primary-800/30 rounded-lg -z-10"></div>
              <img
                src="\src\assets\img1.jpeg"
                alt="About me"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent-200 dark:bg-accent-800/30 rounded-lg -z-10"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <h3 className="text-2xl font-bold mb-4">
              Passionate Web Developer eager to build creative and user-friendly
              websites
            </h3>

            <p className="mb-4">
              I’m a fresher full-stack web developer with a strong interest in
              both design and development. I’ve recently completed my training
              and built several personal projects that reflect my skills in
              HTML, CSS, JavaScript, React, Node.js, and MongoDB.
            </p>

            <p className="mb-6">
              I love creating clean, responsive, and user-friendly websites. My
              goal is to keep learning and growing as a developer while
              contributing to real-world projects that make a positive impact.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <div className="mr-2 text-primary-600 dark:text-primary-400">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium">Name</h4>
                  <p className="text-secondary-600 dark:text-secondary-400">
                    Jinal Jasani
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="mr-2 text-primary-600 dark:text-primary-400">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium">Fresher</h4>
                  <p className="text-secondary-600 dark:text-secondary-400">
                    0 Years
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="mr-2 text-primary-600 dark:text-primary-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium">Projects</h4>
                  <p className="text-secondary-600 dark:text-secondary-400">
                    5+ Completed
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="mr-2 text-primary-600 dark:text-primary-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium">Availability</h4>
                  <p className="text-secondary-600 dark:text-secondary-400">
                    Open to Work
                  </p>
                </div>
              </div>
            </div>

            <a href="#contact" className="btn-primary">
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
