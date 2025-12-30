import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      category: 'JavaScript/TypeScript',
      skills: []
    },
    {
      category: 'React / Next.js / Vue',
      skills: []
    },
    {
      category: 'Node.js / NestJS',
      skills: []
    },
    {
      category: 'PostgreSQL / MongoDB / SQL',
      skills: []
    },
    {
      category: 'Docker',
      skills: []
    },
    {
      category: 'API Integration (REST / GraphQL / SOAP / Kafka / RabbitMQ)',
      skills: []
    },
    {
      category: 'UX/UI - Chakra UI / AntD / PrimeNG / Styled Components',
      skills: []
    },
    {
      category: 'DevOps / Agile (Scrum, Kanban) / Tools (VSCode, IntelliJ, Git)',
      skills: []
    }
  ]

  return (
    <section className="section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="skill-category-title">{category.category}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills

