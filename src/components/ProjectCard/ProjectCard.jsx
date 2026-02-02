import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            className={styles.card}
            whileHover={{ translateY: -10 }}
            layout
        >
            <div className={styles.imageContainer}>
                {project.image ? (
                    <img src={project.image} alt={project.title} className={styles.projectImage} />
                ) : (
                    <div className={styles.placeholder} style={{ background: project.color }}>
                        <span>{project.title}</span>
                    </div>
                )}
                <div className={styles.overlay}>
                    <Link to={`/projects/${project.id}`} className={styles.detailBtn}>View Details</Link>
                </div>
            </div>

            <div className={styles.content}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.shortDesc}</p>
                <div className={styles.techStack}>
                    {project.technologies.slice(0, 3).map(tech => (
                        <span key={tech} className={styles.tech}>{tech}</span>
                    ))}
                    {project.technologies.length > 3 && <span className={styles.more}>+{project.technologies.length - 3}</span>}
                </div>
                <div className={styles.actions}>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"><ExternalLink size={18} strokeWidth={1} /> Visit Website</a>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
