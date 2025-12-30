import './Projects.css'

const Projects = () => {
  const projects = [
    {
      name: 'Proyecto 1',
      description: ' En un proyecto personal hice un sistema para poder registrar la llegada de estudiantes a un colegio, donde constaba de que un estudiante con su celular escaneara un codigo QR y automaticamente marcara que el estudiante habia llegado temprano y a la hora. Full-stack con React, Node.js y PostgreSQL',
      technologies: ['Python', 'React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Docker']
    },
    {
      name: 'Proyecto 2',
      description: 'Este proyecto es un portafolio web desarrollado para mostrar mis habilidades y proyectos como desarrollador full-stack. Utiliza Java con Spring Boot en el backend para manejar solicitudes y servir datos, mientras que el frontend está construido con VueJS y TypeScript para una experiencia de usuario interactiva. El proyecto está alojado en GitHub y utiliza CI/CD para despliegues automáticos mediante Docker.',
      technologies: ['TypeScript', 'React', 'Node.js', 'VueJS', 'GitHub']
    },
    {
      name: 'Proyecto 3',
      description: 'Aplicacion web echa en base a un apoyo a un emprendimiento, donde tuvimos que reunir los datos del usuario y los requerimiento que tenia que tener la aplicacion web.',
      technologies: ['HTML5', 'CSS', 'JavaScript', 'Bootstrap']
    }
  ]

  return (
    <section className="section">
      <h2 className="section-title">Proyectos</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

