export async function GET() {
  const res = await fetch("https://api.github.com/users/vahid2510/repos", {
    headers: { "User-Agent": "Vahid-SSR-Portfolio" },
    cache: "no-store"
  });

  const data = await res.json();

  const clean = (Array.isArray(data) ? data : [])
    .filter((r) => !r.fork)
    .sort((a, b) => b.stargazers_count - a.stargazers_count);

  return Response.json(clean);
}
