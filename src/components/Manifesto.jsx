import { h } from 'preact';
import css from 'csz';

const principlesCss = css`
  margin: auto 0;
  display: block;
  font-family: var(--font-family-space-mono);
  list-style: none;
  padding: 0;
`;

const princpleItemCss = css`
  background: var(--color-green);
  color: var(--color-white);
  font-size: var(--font-size-small);
  margin-bottom: var(--margin);
  padding: 0 0 10px;
`;

const principleTitleCss = css`
  color: var(--color-white);
  font-size: var(--font-size-huge);
  margin: 0;
  padding: 0 var(--margin);
  &:before {
    content: '≠';
    font-size: var(--font-size-icon);
  }
`;

const principleDescriptionCss = css`
  color: var(--color-black);
  font-size: var(--font-size-default);
  margin: 0;
  padding: 0 var(--margin);
`;

const headingCss = css`
  color: var(--color-white);
`;

const Manifesto = ({ title = 'Manifesto' }) => (
  <section>
    <h2
      class={css`
        &:before {
          content: '≠';
          font-family: var(--font-family-inter);
          font-size: 118px;
          opacity: 0.3;
          position: absolute;
          left: 15px;
          top: 0px;
          line-height: 65%;
        }
        position: relative;
        padding: 20px 20px 20px 45px;
        background-color: var(--color-green);
        font-family: var(--font-family-space-mono);
        color: white;
        font-size: 36px;
      `}
    >
      <div id="manifesto" class={headingCss}>
        {title}
      </div>
    </h2>
    <ul class={principlesCss}>
      <li class={princpleItemCss}>
        <p class={principleTitleCss}>Be Aware</p>
        <p class={principleDescriptionCss}>
          Bundlers used to be existing for making our development experience
          better, but not anymore.
        </p>
      </li>
      <li class={princpleItemCss + ' bg-red'}>
        <p class={principleTitleCss}>Examine your Choices</p>
        <p class={principleDescriptionCss}>
          You should use a bundler because you want to, not because you need to.
        </p>
      </li>
      <li class={princpleItemCss + ' bg-teal'}>
        <p class={principleTitleCss}>Tell Why</p>
        <p class={principleDescriptionCss}>
          Encourage the usage of how to get rid of bundlers with/for your
          workmates and|or peers.
        </p>
      </li>
      <li class={princpleItemCss + ' bg-aqua'}>
        <p class={principleTitleCss}>Improve</p>
        <p class={principleDescriptionCss}>
          Learn more opportunities of implementing codebases by eliminating the
          build process.
        </p>
      </li>
      <li class={princpleItemCss + ' bg-fuchsia'}>
        <p class={principleTitleCss}>Document</p>
        <p class={principleDescriptionCss}>
          Spread the knowledge of the best practices of using ES Modules today
          across the whole community.
        </p>
      </li>
    </ul>
  </section>
);

export default Manifesto;
