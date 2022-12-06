import { PageProps } from "$fresh/server.ts";

export default function BlogArticlePage(props: PageProps) {
  const blogPosts = [{
    title: "Test Title",
    url: "test-title",
  }];

  return (
    <main>
      <h1>Blog</h1>
      <ul>
        {blogPosts.map((blogPost) => (
          <li>
            <a href={`/blog/${blogPost.url}`}>
              {blogPost.title}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
