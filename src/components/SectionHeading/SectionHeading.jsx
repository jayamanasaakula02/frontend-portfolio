import React from 'react';
import { motion } from 'framer-motion';
import styles from './SectionHeading.module.css';

const SectionHeading = ({ title, subtitle, center = true }) => {
    return (
        <div className={`${styles.heading} ${center ? styles.center : ''}`}>
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={styles.subtitle}
            >
                {subtitle}
            </motion.p>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={styles.title}
            >
                {title}
            </motion.h2>
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '60px' }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className={styles.underline}
            />
        </div>
    );
};

export default SectionHeading;
