import { h } from 'preact';
import css from 'csz';

const headingCss = css`
  color: var(--color-white);
`;

const iframeCss = css`
  border: 0;
  height: 100%;
  width: 100%;
`;

const Boilerplates = () => (
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
      <div id="boilerplates" class={headingCss}>
        Boilerplates
      </div>
    </h2>
    <section
      class="glitch-embed-wrap"
      style="height: 420px; width: 100%; display: flex;"
    >
      <div style="width: 50%;">
        <iframe
          src="https://glitch.com/embed/#!/embed/react-buildless-boilerplate?path=client.js&previewSize=0&sidebarCollapsed=true&attributionHidden=true"
          loading="lazy"
          title="react-buildless-boilerplate on Glitch"
          class={iframeCss}
        ></iframe>
      </div>
      <div style="width: 50%;">
        <iframe
          src="https://glitch.com/embed/#!/embed/vue-buildless-boilerplate?path=src/components/App.js&previewSize=0&sidebarCollapsed=true&attributionHidden=true"
          loading="lazy"
          title="vue-buildless-boilerplate on Glitch"
          class={iframeCss}
        ></iframe>
      </div>
    </section>
  </section>
);

export default Boilerplates;
