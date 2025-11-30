import Hero from "./components/Hero";
import Section from "./components/Section";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section id="about" title="About Me">
        <p>
          I am a mechanical engineer with a strong focus on Python, numerical
          methods and engineering education. My work includes educational
          notebooks, numerical utilities and terminal-based visualization
          systems designed for students and self-learners.
        </p>
      </Section>

      <Section id="contact" title="Contact">
        <p>For collaboration or educational engineering projects:</p>
        <p className="mt-2">
          <strong>GitHub:</strong>{" "}
          <a href="https://github.com/vahid2510" target="_blank">
            github.com/vahid2510
          </a>
        </p>
        <p>
          <strong>CIVILICA:</strong>{" "}
          <a href="https://civilica.com/p/249923/" target="_blank">
            civilica.com/p/249923
          </a>
        </p>
      </Section>
    </>
  );
}
