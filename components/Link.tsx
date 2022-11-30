import { h } from "preact";

const glitchBoilerplateUrl = Deno.env.get("GLITCH_BOILERPLATE_URL") ??
  "https://glitch.com/~buildless-boilerplate";

const Link = ({ caption, href = glitchBoilerplateUrl, target = "_blank" }) => (
  <a href={href} target={target} class="link" rel="noopener">
    {caption}
  </a>
);

export default Link;
