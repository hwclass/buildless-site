import { html } from '/web_modules/htm/preact.js';
import css from '/web_modules/csz.js';

import Button from './Button.js';

const quotes = [
  {
    content: {
      buildless: '"Buildless"',
      heading: ' is a paradigm',
      subheading:
        'which production projects are created without using a build process (like a bundler).'
    },
    origin: {
      url: 'https://css-tricks.com/going-buildless/',
      text: 'css-tricks.com'
    }
  }
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
  font-family: var(--font-family-inter-regular);
  font-size: 48px;
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
  font-family: var(--font-family-inter-regular);
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

const Hero = () => html`
  <section class=${heroCss}>
    ${quotes.map(
      quote => html`
        <h2 class=${headingCss}>
          <span class=${headingMonoCss}>
            ${quote.content.buildless}
          </span>

          ${quote.content.heading}

          <small class=${subheadingCss}>
            ${quote.content.subheading}
          </small>
        </h2>
        <a href=${quote.origin.url} target="_blank" class=${quoteOriginCss}>
          ${quote.origin.text}
        </a>
      `
    )}
    <article class=${buttonsWrapper}>
      <${Button} caption="Manifesto" />
      <p class=${spacer}></p>
      <${Button} caption="Boilerplate" />
    </article>
  </section>
`;

export default Hero;
