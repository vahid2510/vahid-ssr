import Section from "../components/Section";
import Link from "next/link";
import { getSortedPosts } from "../lib/posts";

export const metadata = {
  title: "Blog | Vahid Ahmadi Khorami"
};

export default async function BlogPage() {
  const posts = await getSortedPosts();

  return (
    <Section id="blog" title="Blog">
      <div className="space-y-4 text-sm">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="engineer-glass block p-4 hover:scale-[1.02] transition"
          >
            <div className="font-semibold">{p.title}</div>
            <div className="text-xs opacity-70 mt-1">{p.date}</div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
