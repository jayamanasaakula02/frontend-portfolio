import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import styles from './Projects.module.css';

// Import project images
import gmaHero from '../../assets/gma-hero.png';
import swaraaleeHero from '../../assets/swaraalee-hero.png';
import edumetricxHero from '../../assets/edumetricx-hero.png';

const projectsData = [
    {
        id: 'gma-clinics',
        title: 'GMA Clinics',
        shortDesc: 'A premium, state-of-the-art medical aesthetics website with booking systems and service portfolios.',
        technologies: ['React JS', 'CSS Modules', 'Framer Motion', 'WhatsApp API', 'SEO Optimized'],
        color: '#0ea5e9',
        image: gmaHero,
        liveUrl: 'https://gmaclinics.com/',
        githubUrl: '#'
    },
    {
        id: 'swaraalee-music',
        title: 'Swaraalee Music Academy',
        shortDesc: 'Best Music Academy in Hyderabad, offering professional vocal and instrumental training.',
        technologies: ['React JS', 'Context API', 'Framer Motion', 'WhatsApp Integration', 'Responsive Design'],
        color: '#8b5cf6',
        image: swaraaleeHero,
        liveUrl: 'https://swaraaleemusic.com/',
        githubUrl: '#'
    },
    {
        id: 'edumetricx-software',
        title: 'Edumetricx Software',
        shortDesc: 'Complete automation software for Educational Institutions to manage enquiries, payments, and more.',
        technologies: ['React JS', 'Chart.js', 'MySQL', 'REST APIs', 'Data Visualization'],
        color: '#2dd4bf', // Teal based on the image
        image: edumetricxHero,
        liveUrl: 'https://www.edumetricx.com/',
        githubUrl: '#'
    }
];

const Projects = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 30 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section id="projects" className="container">
            <SectionHeading title="My Projects" subtitle="Portfolio" />

            <motion.div
                className={styles.projectsGrid}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {projectsData.map(project => (
                    <motion.div key={project.id} variants={cardVariants}>
                        <ProjectCard project={project} />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Projects;
export { projectsData };
