import './WorkExperience.css'

const WorkExperience = () => {
  const experiences = [
    {
      title: 'Desarrollador Full-Stack y Arquitecto de Software',
      company: 'Rindegastos SPA',
      location: 'Santiago, Chile',
      period: 'Presente - Proceso de Practica',
      description: [
        'Desarrollo de aplicaciones full-stack con tecnologías modernas',
        'Implementación de APIs REST con Node.js',
        'Desarrollo de interfaces con React, y TypeScript',
        'Gestión de bases de datos MySQL',
        'Manejo de Terminal y Linea de Comandos'
      ]
    },
  ]

  return (
    <section className="section">
      <h2 className="section-title">Work Experience</h2>
      <div className="experiences">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-header">
              <h3 className="experience-title">{exp.title}</h3>
              <div className="experience-meta">
                <span className="experience-period">{exp.period}</span>
              </div>
            </div>
            <div className="experience-company">
              {exp.company} • {exp.location}
            </div>
            <ul className="experience-description">
              {exp.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WorkExperience

