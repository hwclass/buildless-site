import { PageProps } from "$fresh/server.ts";

export default function BlogPostPage(props: PageProps) {
  const { slug } = props.params;

  //TODO: Fetch the specific blog post based on the slug

  const blogPost = {
    slug: 'test-title',
    title: 'Test Title',
    content: 'Test content...'
  }

  return (
    <main>
      <h1>{slug === blogPost.slug ? blogPost.title : 'We couldn\'t find the article you\'re looking for.'}</h1>
      <p>{slug === blogPost.slug ? blogPost.content : 'But we have some other articles here for you...'}</p>
      {typeof slug === 'undefined' ? (
        <ul>
          <li>Some other article title here.</li>
          <li>Another article title here.</li>
        </ul>
      ) : null}
    </main>
  );
}