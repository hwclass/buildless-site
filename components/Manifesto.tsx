import { h } from "preact";

const Manifesto = ({ title = "Manifesto" }) => (
  <section>
    <h2 class="manifestoHeadingWrapper">
      <div id="manifesto" class="manifestoHeading">
        {title}
      </div>
    </h2>
    <ul class="principles">
      <li class="principleItem">
        <p class="principleTitle">Be Aware</p>
        <p class="principleDescription">
          Bundlers used to be existing for making our development experience
          better, but not anymore.
        </p>
      </li>
      <li class="principleItem bg-red">
        <p class="principleTitle">Examine your Choices</p>
        <p class="principleDescription">
          You should use a bundler because you want to, not because you need to.
        </p>
      </li>
      <li class="principleItem bg-teal">
        <p class="principleTitle">Tell Why</p>
        <p class="principleDescription">
          Encourage the usage of how to get rid of bundlers with/for your
          workmates and|or peers.
        </p>
      </li>
      <li class="principleItem bg-aqua">
        <p class="principleTitle">Improve</p>
        <p class="principleDescription">
          Learn more opportunities of implementing codebases by eliminating the
          build process.
        </p>
      </li>
      <li class="principleItem bg-fuchsia">
        <p class="principleTitle">Document</p>
        <p class="principleDescription">
          Spread the knowledge of the best practices of using ES Modules today
          across the whole community.
        </p>
      </li>
    </ul>
  </section>
);

export default Manifesto;
