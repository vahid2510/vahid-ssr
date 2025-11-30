"use client";

import { useEffect, useState } from "react";

export default function RepoList() {
  const [repos, setRepos] = useState(null);

  useEffect(() => {
    fetch("/api/repos")
      .then((r) => r.json())
      .then(setRepos)
      .catch(() => setRepos([]));
  }, []);

  if (!repos) {
    return (
      <p className="text-xs opacity-70 text-center py-6">
        Loading repositories from GitHub…
      </p>
    );
  }

  if (!repos.length) {
    return (
      <p className="text-xs opacity-70 text-center py-6">
        No public repositories found.
      </p>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {repos.map((repo) => (
        <div key={repo.id} className="engineer-glass p-4 text-xs">
          <div className="font-semibold mb-1">{repo.name}</div>
          <div className="opacity-70 mb-2">
            {repo.description || "No description provided."}
          </div>
          <a
            href={repo.html_url}
            target="_blank"
            className="text-sky-400 font-semibold"
          >
            View on GitHub →
          </a>
        </div>
      ))}
    </div>
  );
}
