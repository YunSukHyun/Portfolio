import styles from './projectTemplate.module.css';

type ProjectProps = {
  project: {
    title: string;
    description: string;
    imageUrl?: string;
    fileUrl?: string;
  };
};

const ProjectTemplate = ({ project }: ProjectProps) => {
  return (
    <div className={styles.projectContainer}>
      <h1 className={styles.projectTitle}>{project.title}</h1>
      <p className={styles.projectDescription}>{project.description}</p>
      {project.imageUrl && (
        <img
          className={styles.projectImage}
          src={project.imageUrl}
          alt={project.title}
        />
      )}
      {project.fileUrl && (
        <div className={styles.projectFile}>
          <a
            href={project.fileUrl}
            download>
            Download File
          </a>
        </div>
      )}
    </div>
  );
};

export default ProjectTemplate;
