import { h, Fragment, render } from 'preact';
import { withFetch } from 'preact-fetch';

import Header from './components/Header';
import Hero from './components/Hero';
import EmbedCode from './components/EmbedCode';
import Manifesto from './components/Manifesto';
import Boilerplates from './components/Boilerplates';
import App from './components/Sections';
import Footer from './components/Footer';

const sectionsUrl = import.meta.env.SNOWPACK_PUBLIC_API_SECTION;
const mapSectionsToProps = (entries) => ({ entries });
const Sections = withFetch(sectionsUrl, { mapDataToProps: mapSectionsToProps })(
  App,
);

const toolsUrl = import.meta.env.SNOWPACK_PUBLIC_API_TOOLS;
const mapToolsToProps = (tools) => ({ tools });
const FooterWithData = withFetch(toolsUrl, { mapDataToProps: mapToolsToProps })(
  Footer,
);

render(
  <Fragment>
    <Header title="buildless.site" />
    <Hero />
    <EmbedCode />
    <Manifesto />
    <Boilerplates />
    <Sections />
    <FooterWithData />
  </Fragment>,
  document.getElementsByTagName('main')[0],
);
