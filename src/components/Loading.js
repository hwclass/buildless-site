import { html } from '/web_modules/htm/preact.js';
import css from '/web_modules/csz.js';

const loadingClassName = css`
  margin: 50px auto 0;
  display: block;
`;

const Loading = () => html`
  <img
    src="static/hourglass.gif"
    width="50"
    height="50"
    alt="loading..."
    class=${loadingClassName}
  />
`;

export default Loading;
