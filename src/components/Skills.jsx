import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      category: 'JavaScript/TypeScript',
      skills: []
    },
    {
      category: 'React / Next.js / Vue / Angular',
      skills: []
    },
    {
      category: 'Node.js / Express / NestJS',
      skills: []
    },
    {
      category: 'Java / Spring Boot / Maven',
      skills: []
    },
    {
      category: 'PostgreSQL / MongoDB / SQL / Prisma / JPA',
      skills: []
    },
    {
      category: 'Docker / Kubernetes / CI/CD (GitLab, Jenkins)',
      skills: []
    },
    {
      category: 'Testing (JUnit, Cypress, Mockito)',
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

