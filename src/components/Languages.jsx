import './Languages.css'

const Languages = () => {
  const languages = [
    { name: 'Español', level: 'Nativo' },
    { name: 'Inglés', level: 'Intermedio' },
  ]

  return (
    <section className="section">
      <h2 className="section-title">Idiomas</h2>
      <div className="languages-list">
        {languages.map((lang, index) => (
          <div key={index} className="language-item">
            <span className="language-name">{lang.name}</span>
            <span className="language-level">{lang.level}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Languages

