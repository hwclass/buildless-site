import { Fragment, h } from "preact";

import Link from "./Link.tsx";

const quotes = [
  {
    content: {
      buildless: '"Buildless"',
      heading: " is a paradigm",
      subheading:
        "which production projects are created without using a build process (like a bundler).",
    },
    origin: {
      url: "https://css-tricks.com/going-buildless/",
      text: "css-tricks.com",
    },
  },
];

const Hero = () => (
  <section class="hero">
    {quotes.map((quote) => (
      <Fragment>
        <h2 class="heading">
          <span class="headingMono">{quote.content.buildless}</span>
          {quote.content.heading}
          <small class="subHeading">{quote.content.subheading}</small>
        </h2>
        <a
          href={quote.origin.url}
          target="_blank"
          class="quote"
          rel="noopener"
        >
          {quote.origin.text}
        </a>
      </Fragment>
    ))}
    <article class="buttonsWrapper">
      <Link href="#manifesto" target="_self" caption="Manifesto" />
      <p class="spacer"></p>
      <Link caption="Get Started" />
    </article>
  </section>
);

export default Hero;
