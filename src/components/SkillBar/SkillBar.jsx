import { motion } from 'framer-motion';
import styles from './SkillBar.module.css';

const SkillBar = ({ name, level }) => {
    return (
        <div className={styles.skillBar}>
            <div className={styles.skillInfo}>
                <span className={styles.skillName}>{name}</span>
                <span className={styles.skillPercent}>{level}%</span>
            </div>
            <div className={styles.progressBar}>
                <motion.div
                    className={styles.progressFill}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                />
            </div>
        </div>
    );
};

export default SkillBar;
