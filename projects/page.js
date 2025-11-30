import Section from "../components/Section";
import RepoList from "../components/RepoList";

export const metadata = {
  title: "Projects | Vahid Ahmadi Khorami"
};

export default function ProjectsPage() {
  return (
    <Section id="projects" title="GitHub Projects (Auto Loaded)">
      <RepoList />
      <p className="mt-4 text-xs opacity-60">
        Loaded live from GitHub user: <strong>vahid2510</strong>.
      </p>
    </Section>
  );
}
