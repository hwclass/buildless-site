import css from 'csz';

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
