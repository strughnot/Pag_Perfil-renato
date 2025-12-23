import './Education.css'

const Education = () => {
  const education = [
    {
      title: 'Colegio',
      institution: 'San Lorenzo',
      location: 'Santiago, Chile',
      period: '2012 - 2025',
      description: 'Estudios completos en educacion basica y media, salido de Tecnico profesional en informatica.'
    },
    {
      title: 'Certificado de Coding Dojo - Desarrollo Frontend y Backend',
      institution: 'Coding Dojo - Presencial',
      period: '2024',
      description: 'Curso de Full-Stack Development'
    }
  ] 

  return (
    <section className="section">
      <h2 className="section-title">Educacion</h2>
      <div className="education-list">
        {education.map((edu, index) => (
          <div key={index} className="education-card">
            <div className="education-header">
              <h3 className="education-title">{edu.title}</h3>
              <span className="education-period">{edu.period}</span>
            </div>
            <div className="education-institution">
              {edu.institution}
              {edu.location && ` • ${edu.location}`}
            </div>
            {edu.description && (
              <p className="education-description">{edu.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education

