import './Header.css'

const Header = () => {
  const personalInfo = {
    name: 'Renato Hernández',
    title: 'Desarrollador Full-Stack',
    email: 'rnto443@gmail.com',
    phone: '+56 9 7443 8032',
    location: 'Santiago, Chile',
    linkedin: 'linkedin.com/in/tu-perfil',
    github: 'https://github.com/strughnot'
  }

  return (
    <header className="header">
      <h1 className="header-name">{personalInfo.name}</h1>
      <h2 className="header-title">{personalInfo.title}</h2>
      <p className="header-description">
        Desarrollador apasionado con experiencia en la construcción de aplicaciones 
        full-stack listas para producción. Especializado en desarrollo frontend y con conocimientos en backend.
      </p>
      <div className="header-contact">
        <a href={`mailto:${personalInfo.email}`} className="contact-item">
          📧 {personalInfo.email}
        </a>
        <a href={`tel:${personalInfo.phone}`} className="contact-item">
          📱 {personalInfo.phone}
        </a>
        <span className="contact-item">📍 {personalInfo.location}</span>
        <a 
          href={`https://${personalInfo.linkedin}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="contact-item"
        >
          💼 {personalInfo.linkedin}
        </a>
        <a 
          href={`https://${personalInfo.github}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="contact-item"
        >
          💻 {personalInfo.github}
        </a>
      </div>
    </header>
  )
}

export default Header

