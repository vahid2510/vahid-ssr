export default function Section({ id, title, children }) {
  return (
    <section id={id} className="section-wrapper section">
      <h2 className="section-title">{title}</h2>
      <div className="engineer-glass p-6 md:p-8 text-sm leading-relaxed">
        {children}
      </div>
    </section>
  );
}
