import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import styles from './About.module.css';

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.215, 0.610, 0.355, 1.000] }
        }
    };

    const infoItems = [
        { label: 'Name', value: 'Jaya Manasa Akula' },
        { label: 'Email', value: 'jayamanasa.akula02@gmail.com' },
        { label: 'Experience', value: '1 Year (Junior Java Developer)' },
        { label: 'Location', value: 'Hyderabad, Telangana, India' },
    ];

    const stats = [
        { val: '12+', label: 'Projects Done' },
        { val: '7.5', label: 'B.Tech CGPA' },
        { val: '8.5', label: 'School CGPA' },
    ];

    return (
        <section id="about" className="container">
            <SectionHeading title="About Me" subtitle="My Journey" />

            <motion.div
                className={styles.aboutContent}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <motion.div className={styles.textSide} variants={itemVariants}>
                    <h3>Professional Summary</h3>
                    <p>
                        I am a dedicated Frontend Developer with a strong foundation in core web technologies like HTML5, CSS3, and JavaScript. My passion lies in crafting high-performance, responsive web applications, with specialized expertise in building dynamic user interfaces using React JS.
                    </p>
                    <p>
                        By combining clean coding practices with modern architectural patterns, I ensure that every project is not only visually stunning but also maintainable and efficient. I am always eager to solve complex UI challenges and stay at the forefront of the evolving frontend ecosystem.
                    </p>

                    <div className={styles.infoGrid}>
                        {infoItems.map((item, idx) => (
                            <motion.div
                                key={idx}
                                className={styles.infoItem}
                                whileHover={{ x: 10, color: 'var(--accent-primary)' }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <strong>{item.label}:</strong> <span>{item.value}</span>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div className={styles.education} variants={itemVariants}>
                        <h3>Education</h3>
                        <div className={styles.eduItem}>
                            <h4>Megha Institute of Engineering and Technology for women</h4>
                            <p>Bachelor of Technology (B.Tech) - Computer Science Engineering</p>
                            <p>Hyderabad, Telangana, India</p>
                            <span>Grade: 7.5 CGPA</span>
                        </div>
                        <div className={styles.eduItem}>
                            <h4>Sri Chaitanya Junior Kalashala</h4>
                            <p>Intermediate Education</p>
                            <span>Grade: 8.0 CGPA</span>
                        </div>
                        <div className={styles.eduItem}>
                            <h4>St.Venus High School</h4>
                            <p>Secondary Schooling</p>
                            <span>Grade: 8.5 CGPA</span>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div className={styles.visualSide} variants={itemVariants}>
                    <div className={styles.statsCard}>
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                className={styles.stat}
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: 'spring', stiffness: 400 }}
                            >
                                <span>{stat.val}</span>
                                <p>{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className={styles.strengths}>
                        <h3>My Strengths</h3>
                        <ul>
                            {['Creative Design', 'Problem Solving', 'Fast Learner', 'Attention to Detail', 'Team Collaboration', 'Effective Communication', 'Adaptability', 'Time Management'].map((s, idx) => (
                                <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    {s}
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;
