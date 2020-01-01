import { html } from '/web_modules/htm/preact.js';

const Heading = ({ content }) => html`
  <h1>${content}</h1>
`;

export default Heading;
