import './Interests.css'

const Interests = () => {
  const interests = [
    { name: 'Ciclismo', emoji: '🚵🏽‍♂️' },
    { name: 'Musica', emoji: '🎧' },
    { name: 'Senderismo', emoji: '🥾' },
    { name: 'Airsoft', emoji: '🔫' },
    { name: 'Tecnologia', emoji: '💻' },
    { name: 'Gaming', emoji: '🎮'}
  ]

  return (
    <section className="section">
      <h2 className="section-title">Intereses</h2>
      <div className="interests-grid">
        {interests.map((interest, index) => (
          <div key={index} className="interest-item">
            <span className="interest-emoji">{interest.emoji}</span>
            <span className="interest-name">{interest.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Interests

