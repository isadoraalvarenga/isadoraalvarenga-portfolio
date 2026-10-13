// Casca padrão das seções: id para a âncora do menu, rótulo e título.
export default function Section({ id, label, title, children }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="container">
        <p className="section-label">{label}</p>
        <h2 id={`${id}-title`} className="section-title">{title}</h2>
        {children}
      </div>
    </section>
  );
}
