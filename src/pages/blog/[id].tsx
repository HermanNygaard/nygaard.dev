import { getPostData, getPostIds } from "lib/posts";
import { GetStaticPropsContext } from "next";
import Link from "next/link";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeAutoLink from "rehype-autolink-headings";
import rehypeHiglight from "rehype-highlight";
import matter from "gray-matter";

import { Counter } from "components/Counter";
import path from "path";
import { readFileSync } from "fs";
import { DarkmodeSwitch } from "components/DarkmodeSwitch";
import "highlight.js/styles/atom-one-dark.css";
import Head from "next/head";
import { useEffect } from "react";

const components = { Counter, DarkmodeSwitch };

type MDXPost = {
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: any;
};

export default function Blog({ mdxSource, meta }: MDXPost) {
  useEffect(() => {
    fetch("/api/view", {
      method: "POST",
      body: JSON.stringify({ slug: meta.slug }),
      headers: {
        "content-type": "application/json",
      },
    });
  }, [meta.slug]);

  return (
    <div className="max-w-2xl w-full flex-grow p-3 flex flex-col items-start justify-center mx-auto mb-20">
      <Head>
        <title>{meta.title} - Herman Nygaard</title>
      </Head>
      <div className="mb-4">
        <Link href="/blog">
          <a className="text-blue-800  dark:text-gray-200">← Back to posts</a>
        </Link>
      </div>
      <article className="prose dark:prose-invert w-full">
        <h1>{meta.title}</h1>
        <MDXRemote {...mdxSource} components={components} />
      </article>
    </div>
  );
}

export function getStaticPaths() {
  const paths = getPostIds();
  const mappedPaths = paths.map((path) => ({ params: { id: path } }));

  return {
    paths: mappedPaths,
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const markdownWithMeta = readFileSync(
    path.join(
      process.cwd(),
      "src/posts",
      (context.params.id as string) + ".mdx"
    ),
    "utf-8"
  );
  const { content, data } = matter(markdownWithMeta);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutoLink,
          {
            properties: {
              className: ["anchor"],
            },
          },
        ],
        rehypeHiglight,
      ],
    },
  });

  return {
    props: {
      mdxSource,
      meta: {
        title: data.title,
        slug: context.params.id,
      },
    },
  };
}
