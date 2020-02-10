import { html } from '/web_modules/htm/preact.js';
import css from '/web_modules/csz.js';

import Button from './Button.js';

const quotes = [
  {
    content: {
      heading: 'Buildless is a paradigm',
      remaining:
        'production projects are created without using a build process (like a bundler).'
    },
    origin: {
      url: 'https://css-tricks.com',
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
  padding: 60px 90px;
`;

const quoteOriginCss = css`
  align-self: flex-end;
  color: var(--color-green);
  display: flex;
  font-family: var(--font-family-inter-regular);
  font-size: 26px;
  letter-spacing: var(--link-letter-spacing);
`;

const Hero = () => html`
  <section class=${heroCss}>
    ${quotes.map(
      quote =>
        html`
          <h2
            class=${css`
              &:before {
                content: '${quote.content.heading}';
                display: block;
                font-family: var(--font-family-space-mono);
                font-size: 48px;
                text-align: center;
              };

              align-content: center;
              align-self: flex-start;
              font-family: var(--font-family-inter-regular);
              font-size: 26px;
              text-align: center;
          `}
          >
            ${quote.content.remaining}
          </h2>
          <a href=${quote.origin.url} target="_blank" class=${quoteOriginCss}>
            ${quote.origin.text}
          </a>
        `
    )}
    <${Button} caption="Manifesto" />
    <${Button} caption="Boilerplate" />
  </section>
`;

export default Hero;
