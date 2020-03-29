import { html } from '/web_modules/htm/preact.js';
import css from '/web_modules/csz.js';

const headingCss = css`
  color: #fff;
`;

function Boilerplates() {
  return html`
    <section>
      <h2
        class=${css`
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
        <div id="boilerplates" class=${headingCss}>Boilerplates</div>
      </h2>
      <section
        class="glitch-embed-wrap"
        style="height: 420px; width: 100%; display: flex;"
      >
        <div style="width: 50%;">
          <iframe
            src="https://glitch.com/embed/#!/embed/react-buildless-boilerplate?path=client.js&previewSize=0&sidebarCollapsed=true&attributionHidden=true"
            title="react-buildless-boilerplate on Glitch"
            allow="geolocation; microphone; camera; midi; vr; encrypted-media"
            style="height: 100%; width: 100%; border: 0;"
          >
          </iframe>
        </div>
        <div style="width: 50%;">
          <iframe
            src="https://glitch.com/embed/#!/embed/vue-buildless-boilerplate?path=src/components/App.js&previewSize=0&sidebarCollapsed=true&attributionHidden=true"
            title="vue-buildless-boilerplate on Glitch"
            allow="geolocation; microphone; camera; midi; vr; encrypted-media"
            style="height: 100%; width: 100%; border: 0;"
          >
          </iframe>
        </div>
      </section>
    </section>
  `;
}

export default Boilerplates;
