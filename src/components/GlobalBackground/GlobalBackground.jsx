import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import styles from './GlobalBackground.module.css';

const GlobalBackground = () => {
    const { scrollYProgress } = useScroll();

    // Smooth progress for the spine
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const spineScale = useTransform(smoothProgress, [0, 1], [0, 1]);

    return (
        <div className={styles.wrapper}>
            {/* The Spine - Performance Optimized */}
            <motion.div
                className={styles.spine}
                style={{ scaleY: spineScale }}
            />

            {/* Ambient Background Glows - Reduced count for speed */}
            <div className={styles.beamContainer}>
                {/* Fixed Orbs in Key Positions */}
                <div className={`${styles.orb} ${styles.topOrb}`} />
                <div className={`${styles.orb} ${styles.midOrb}`} />
                <div className={`${styles.orb} ${styles.bottomOrb}`} />
            </div>

            {/* Subtle Texture */}
            <div className={styles.noiseOverlay} />
        </div>
    );
};

export default GlobalBackground;
