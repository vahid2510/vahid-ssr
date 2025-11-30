import Section from "../components/Section";

export const metadata = {
  title: "Research & CIVILICA | Vahid"
};

export default function ResearchPage() {
  return (
    <Section id="research" title="Research & CIVILICA">
      <p>
        My research activities, conference papers and scientific works are
        indexed on CIVILICA. This profile covers my work in mechanical
        engineering, filtration and related areas.
      </p>
      <p className="mt-4">
        <strong>CIVILICA:</strong>{" "}
        <a href="https://civilica.com/p/249923/" target="_blank">
          civilica.com/p/249923
        </a>
      </p>
    </Section>
  );
}
