import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDir = path.join(process.cwd(), "posts");

export async function getSortedPosts() {
  const files = fs.readdirSync(postsDir);

  const posts = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.md$/, "");
      const full = path.join(postsDir, file);
      const source = fs.readFileSync(full, "utf8");
      const { data } = matter(source);
      return { slug, ...data };
    })
  );

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export async function getPost(slug) {
  const full = path.join(postsDir, slug + ".md");
  const source = fs.readFileSync(full, "utf8");
  const { data, content } = matter(source);
  const processed = await remark().use(html).process(content);
  const htmlContent = processed.toString();
  return { slug, ...data, content: htmlContent };
}
