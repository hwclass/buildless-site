import { html } from '/web_modules/htm/preact.js';
import css from '/web_modules/csz.js';

const principlesCss = css`
  margin: auto 0;
  display: block;
  font-family: var(--font-family-sans-serif);
  list-style: none;
`;

const Manifesto = ({ title = 'Manifesto' }) => html`
  <section>
    <h2
      class=${css`
        background-color: var(--color-green);
        color: white;
        font-family: var(--font-family-space-mono);
        font-size: 36px;
        padding: 20px 20px 20px 45px;
        position: relative;
        text-align: center;
      `}
    >
      ${title}
    </h2>
    <ul class=${principlesCss}>
      <li>> Manifesto principle here...</li>
      <li>> Manifesto principle here...</li>
      <li>> Manifesto principle here...</li>
    </ul>
  </section>
`;

export default Manifesto;
