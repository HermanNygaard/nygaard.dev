import { getPostData, getSortedPosts } from "lib/posts";
import Link from "next/link";
export const trimId = (id: string) => id.replace(/\.mdx$/, "");

type Posts = { posts: Awaited<ReturnType<typeof getPostData>>[] };

export default function Blog({ posts }: Posts) {
  return (
    <div className="max-w-2xl w-full flex-grow p-3 flex flex-col items-start justify-center mx-auto mb-10">
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
        Blog
      </h1>
      <div className="flex flex-col gap-4">
        {posts.map(({ meta }) => (
          <div key={meta.id}>
            <Link href={`/blog/${trimId(meta.id)}`}>
              <a className="underline">
                {meta.title} – {new Date(meta.date).toDateString()}
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getSortedPosts();
  return { props: { posts } };
}
