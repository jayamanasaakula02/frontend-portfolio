import React from 'react';
import { motion } from 'framer-motion';
import styles from './DecorativeElements.module.css';

const DecorativeElements = () => {
    return (
        <div className={styles.decorativeContainer}>
            {/* Colorful Glowing Shapes - Clean & Smooth */}
            <motion.div
                className={`${styles.shape} ${styles.circle} ${styles.emerald}`}
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
                className={`${styles.shape} ${styles.circle} ${styles.rose}`}
                animate={{ x: [0, 30, 0] }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
                className={`${styles.shape} ${styles.box} ${styles.cyan}`}
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
                className={`${styles.shape} ${styles.diamond} ${styles.orange}`}
                animate={{ y: [0, 40, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
        </div>
    );
};

export default DecorativeElements;
