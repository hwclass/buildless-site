import { h } from 'preact';
import css from 'csz';

const buttonCss = css`
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

const Button = ({ caption }) => <button class={buttonCss}>{caption}</button>;

export default Button;
