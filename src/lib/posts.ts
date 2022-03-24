import fs from "fs";
import matter from "gray-matter";
import path from "path";

const postsDirectory = path.join(process.cwd(), "src/posts");

export const trimId = (id: string) => id.replace(/\.mdx$/, "");

export function getPostIds() {
  const ids = fs.readdirSync(postsDirectory);
  return ids.map(trimId);
}

export async function getSortedPosts() {
  const posts = fs.readdirSync(postsDirectory);
  const postsWithMetaData = await Promise.all(posts.map(getPostData));

  const publishedPosts = postsWithMetaData.filter(
    (post) => post.meta.published
  );

  return publishedPosts.sort((a, b) => (a.meta.date < b.meta.date ? -1 : 1));
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { content, data } = matter(fileContents);
  return {
    content,
    meta: {
      id,
      excerpt: data.excerpt ?? "",
      title: data.title ?? id,
      tags: (data.tags ?? []).sort(),
      date: (data.date ?? new Date()).toString(),
      published: data.published ?? false,
    },
  };
}
