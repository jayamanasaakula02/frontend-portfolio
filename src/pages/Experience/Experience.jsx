import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import styles from './Experience.module.css';

const Experience = () => {
    const experiences = [
        {
            company: 'Nectar Global Solutions',
            role: 'Junior Java Developer',
            duration: 'Professional Year',
            responsibilities: [
                'Developed and maintained robust backend services using Java and core OOP principles.',
                'Transitioned into focused Frontend development (July 2024 - July 2025), mastering React JS and modern web UI.',
                'Collaborated with senior developers to design and implement efficient RESTful APIs.',
                'Gained hands-on experience in building 12+ responsive web projects during the specialized frontend tenure.',
                'Worked on database management systems and query optimization using MySQL.'
            ]
        }
    ];

    return (
        <section id="experience" className={styles.section}>
            <div className="container">
                <SectionHeading title="Work Experience" subtitle="My Professional Journey" />

                <div className={styles.experienceContainer}>
                    <div className={styles.verticalLine}></div>

                    <div className={styles.timelineList}>
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                className={styles.experienceCard}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.2,
                                    type: "spring",
                                    bounce: 0.3
                                }}
                            >
                                <div className={styles.marker}></div>
                                <div className={styles.cardHeader}>
                                    <span className={styles.duration}>{exp.duration}</span>
                                    <h3 className={styles.role}>{exp.role}</h3>
                                    <h4 className={styles.company}>{exp.company}</h4>
                                </div>
                                <div className={styles.cardBody}>
                                    <ul className={styles.responsibilities}>
                                        {exp.responsibilities.map((res, idx) => (
                                            <li key={idx}>{res}</li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
