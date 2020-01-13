import { html } from '/web_modules/htm/preact.js';
import css from '/web_modules/csz.js';

import Button from './Button.js';

const quotes = [
  {
    content:
      'Buildless is a paradigm production projects are created without using a build process (like a bundler).',
    origin: {
      url: 'https://css-tricks.com',
      text: 'css-tricks.com'
    }
  }
];

const heroCss = css`
  display: flex;
  flex-direction: column;
`;

const quoteContentCss = css(
  url,
  `
  content: '${url}'
`
);

const Hero = () => html`
  <section class=${heroCss}>
    ${quotes.map(
      quote =>
        html`
          <h2 class=${quoteContentCss()}>
            // TODO: Inject js variable inside CSS !!! ${quote.content}
          </h2>
          <a href=${quote.origin.url} target="_blank">
            ${quote.origin.text}
          </a>
        `
    )}
    <${Button} caption="Manifesto" />
  </section>
`;

export default Hero;
