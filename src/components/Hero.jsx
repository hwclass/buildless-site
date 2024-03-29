import { h, Fragment } from 'preact';
import css from 'csz';

import Button from './Button';
import Link from './Link';

const quotes = [
  {
    content: {
      buildless: '"Buildless"',
      heading: ' is a paradigm',
      subheading:
        'which production projects are created without using a build process (like a bundler).',
    },
    origin: {
      url: 'https://css-tricks.com/going-buildless/',
      text: 'css-tricks.com',
    },
  },
];

const heroCss = css`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-wrap: wrap;
  padding: 0 @media (min-width: 576px) {
    & {
      padding: 60px 90px;
    }
  }
`;

const headingCss = css`
  display: block;
  font-family: var(--font-family-inter);
  font-size: 48px;
  margin-bottom: 0;
  padding: 0;
  text-align: center;
`;

const headingMonoCss = css`
  font-family: var(--font-family-space-mono);
  font-weight: bold;
`;

const subheadingCss = css`
  align-content: center;
  align-self: flex-start;
  display: inline-block;
  font-size: 26px;
  font-weight: normal;
  text-align: center;
`;

const quoteOriginCss = css`
  align-self: center;
  color: var(--color-green);
  display: flex;
  font-family: var(--font-family-inter);
  font-size: 26px;
  letter-spacing: var(--link-letter-spacing);
`;

const buttonsWrapper = css`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 50px;
`;

const spacer = css`
  flex-grow: 0.1;
`;

const Hero = () => (
  <section class={heroCss}>
    {quotes.map((quote) => (
      <Fragment>
        <h2 class={headingCss}>
          <span class={headingMonoCss}>{quote.content.buildless}</span>
          {quote.content.heading}
          <small class={subheadingCss}>{quote.content.subheading}</small>
        </h2>
        <a
          href={quote.origin.url}
          target="_blank"
          class={quoteOriginCss}
          rel="noopener"
        >
          {quote.origin.text}
        </a>
      </Fragment>
    ))}
    <article class={buttonsWrapper}>
      <Link href="#manifesto" target="_self" caption="Manifesto" />
      <p class={spacer}></p>
      <Link caption="Get Started" />
    </article>
  </section>
);
export default Hero;
