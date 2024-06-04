import { Project } from '@/types/projects';
import styles from './projectTemplate.module.css';

type ProjectProps = {
  project: Project;
};

const ProjectTemplate = ({ project: { title, description, imageUrl } }: ProjectProps) => {
  return (
    <div className={styles.projectContainer}>
      <h1 className={styles.projectTitle}>{title}</h1>
      <p className={styles.projectDescription}>{description}</p>
      {imageUrl && (
        <img
          className={styles.projectImage}
          src={imageUrl}
          alt={title}
        />
      )}
    </div>
  );
};

export default ProjectTemplate;
