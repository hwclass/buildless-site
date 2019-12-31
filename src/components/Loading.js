import css from 'csz';

const Loading = () => html`
  <img
    src="static/hourglass.gif"
    width="50"
    height="50"
    alt="loading..."
    class=${css`
      margin: 50px auto 0;
      display: block;
    `}
  />
`;

export default Loading;
