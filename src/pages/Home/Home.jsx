import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import profileImg from '../../assets/no-bg-portrait.png';
import styles from './Home.module.css';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Experience from '../Experience/Experience';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import GlobalBackground from '../../components/GlobalBackground/GlobalBackground';
import SectionDivider from '../../components/SectionDivider/SectionDivider';

const Home = () => {
    return (
        <div className={styles.home}>
            <GlobalBackground />

            {/* Hero Section */}
            <section id="home" className={styles.hero}>
                {/* Background Full Portrait Merging into Black */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    className={styles.heroBgImage}
                >
                    <img src={profileImg} alt="" className={styles.bgPortrait} />
                    <div className={styles.blackShade}></div>
                </motion.div>

                <div className={`container ${styles.heroContainer}`}>
                    <div className={styles.heroContent}>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className={styles.greeting}
                        >
                            Hello, I'm
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className={styles.name}
                        >
                            Jaya Manasa Akula
                        </motion.h1>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className={styles.role}
                        >
                            Professional <span>Frontend Developer</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className={styles.description}
                        >
                            I build high-performance, responsive, and visually stunning web applications with modern technologies like React JS and JavaScript.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className={styles.ctas}
                        >
                            <a href="#projects" className={styles.primaryBtn}>
                                View Projects <ArrowRight size={18} />
                            </a>
                            <a href="#contact" className={styles.secondaryBtn}>
                                Contact Me
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            <SectionDivider width="80%" opacity={0.15} />

            {/* About Section */}
            <section id="about" className={styles.pageSection}>
                <About />
            </section>

            <SectionDivider width="60%" opacity={0.1} />

            {/* Skills Section */}
            <section id="skills" className={styles.pageSection}>
                <Skills />
            </section>

            <SectionDivider width="90%" opacity={0.12} />

            {/* Experience Section */}
            <section id="experience" className={styles.pageSection}>
                <Experience />
            </section>

            <SectionDivider width="70%" opacity={0.08} />

            {/* Projects Section */}
            <section id="projects" className={styles.pageSection}>
                <Projects />
            </section>

            <SectionDivider width="100%" opacity={0.15} />

            {/* Contact Section */}
            <section id="contact" className={styles.pageSection}>
                <Contact />
            </section>
        </div>
    );
};

export default Home;
