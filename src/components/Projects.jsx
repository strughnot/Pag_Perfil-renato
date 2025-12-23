import './Projects.css'

const Projects = () => {
  const projects = [
    {
      name: 'Proyecto 1',
      description: 'Descripción del proyecto full-stack con React, Node.js y PostgreSQL',
      technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Docker', 'CI/CD']
    },
    {
      name: 'Proyecto 2',
      description: 'Aplicación de gestión con Java Spring y Vue.js',
      technologies: ['Java', 'Spring', 'PostgreSQL', 'VueJS', 'TypeScript', 'GitHub', 'CI/CD', 'Docker']
    },
    {
      name: 'Proyecto 3',
      description: 'Chatbot con procesamiento de lenguaje natural',
      technologies: ['Spring', 'React', 'Ollama', 'DeepSeek']
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

