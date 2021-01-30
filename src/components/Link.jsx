import { h } from 'preact';
import css from 'csz';

const linkCss = css`
  background: #0eed82;
  border: 0;
  border-radius: 5px;
  color: var(--color-white);
  cursor: pointer;
  font-size: 20px;
  font-family: var(--font-family-inter);
  font-weight: bold;
  letter-spacing: var(--letter-spacing);
  line-height: var(--body-line);
  padding: 20px 45px;
  text-decoration: none;
  text-transform: uppercase;
  width: auto;
`;

const glitchBoilerplateUrl =
  import.meta.env.SNOWPACK_PUBLIC_GLITCH_BOILERPLATE_URL ??
  'https://glitch.com/~buildless-boilerplate';

const Link = ({ caption, href = glitchBoilerplateUrl, target = '_blank' }) => (
  <a href={href} target={target} class={linkCss} rel="noopener">
    {caption}
  </a>
);

export default Link;
