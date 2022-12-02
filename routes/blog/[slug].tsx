import { PageProps } from "$fresh/server.ts";

export default function BlogArticlePage(props: PageProps) {
  const { slug } = props.params;

  const slugWithTitles = new Map()
  slugWithTitles.set('test-title', 'Test Title')

  console.log(slugWithTitles.get(slug))

  return (
    <main>
      <h1>{typeof slugWithTitles.get(slug) !== 'undefined' ? slugWithTitles.get(slug) : 'We couldn\'t find the article you\'re looking for.'}</h1>
      <p>{typeof slugWithTitles.get(slug) === 'undefined' && 'But we have some other articles here for you...'}</p>
      {typeof slugWithTitles.get(slug) === 'undefined' ? (
        <ul>
          <li>Some other article title here.</li>
          <li>Another article title here.</li>
        </ul>
      ) : null}
    </main>
  );
}