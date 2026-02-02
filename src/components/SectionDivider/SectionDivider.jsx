import { motion } from 'framer-motion';
import styles from './SectionDivider.module.css';

const SectionDivider = ({ width = '100%', opacity = 0.1, delay = 0 }) => {
    return (
        <div className={styles.dividerContainer}>
            <motion.div
                className={styles.line}
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: width, opacity: opacity }}
                transition={{ duration: 1, delay: delay }}
            />
            {/* Optional random accent dot */}
            {Math.random() > 0.5 && (
                <motion.div
                    className={styles.dot}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: delay + 0.5 }}
                />
            )}
        </div>
    );
};

export default SectionDivider;
