import { LitElement, html } from 'lit-element';
import { Router } from '@vaadin/router';

// TODO: Convert a functional component
// with html like the following:
// import { html, render } from 'lit-html';

/* lit-html: UI as a pure function of data */
// const view = ({ content, title }) =>
//   html`<h1>${title}</h1>${content}`;

/* Compose templates from other templates */
// const title = 'View as a Pure Function of Data';
// const content = html`
//   <p>Composable templates are flexible and powerful. They let you define
//   complex views from simple building blocks.</p>
//   <p>Using composition, you can hide implementation details of your
//   app. This makes your work easier to test, reason about, and debug.</p>`;

/* Everything up to now has been pure. By calling `render`,
 * we pull the trigger on the impure part of our app and
 * actually write our view to the screen. */
// render(view({ content, title }), document.body);

// The whole thing can be built on something more functional like
// Hybrids and/or Rambda.

const heading = () => html`
  <h1>buildless.site</h1>
`;

const loading = () => html`
  <span>Loading...</span>
`;

class BuildlessSite extends LitElement {
  static get properties() {
    return {
      sites: { type: Array } 
    };
  }

  async connectedCallback() {
    super.connectedCallback();
    const response = await fetch('/api');
    this.sites = await response.json();
  }

  render() {
    if (!this.sites) {
      return loading()
    }
    return html`
      <style>
        :host {
          font-family: Roboto, Helvetica, Arial, sans-serif;
          font-size: 16px;
          padding: 2rem;
        }
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        li {
          line-height: 1.6rem;
        }
      </style>
      <ul>
        ${heading()}
        ${
          this.sites.map(
            s =>
              html`
                <li>${s.title} ${s.description}</li>
              `
          )}
      </ul>
    `;
  }
}

const router = new Router(document.getElementById('outlet'));

router.setRoutes([
  {path: '/', component: 'x-site'},
  {path: '/users', component: 'x-user-list'}
])

customElements.define('buildless-app', BuildlessSite);