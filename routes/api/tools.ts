import { HandlerContext, Handlers } from "$fresh/server.ts";

const tools = [
  {
    title: "deno",
    link: "https://deno.land/",
  },
  {
    title: "fresh",
    link: "https://fresh.deno.dev/",
  },
  {
    title: "husky",
    link: "https://github.com/typicode/husky",
  },
  {
    title: "preact",
    link: "https://preactjs.com/",
  },
  {
    title: "pretty-quick",
    link: "https://www.npmjs.com/package/pretty-quick",
  },
  {
    title: "svg backgrounds",
    link: "https://www.svgbackgrounds.com",
  },
];

export const handler: Handlers<null> = {
  async GET(_, ctx: HandlerContext) {
    return new Response(JSON.stringify(tools), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};
