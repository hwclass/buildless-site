import { asset, Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";

import Header from "../components/Header.tsx";
import Hero from "../components/Hero.tsx";
import EmbedCode from "../components/EmbedCode.tsx";
import Manifesto from "../components/Manifesto.tsx";
import Boilerplates from "../components/Boilerplates.tsx";
import Sections from "../components/Sections.tsx";
import Footer from "../components/Footer.tsx";

interface SectionsData {
  sections: [{
    title: string;
    list: [{
      content: string;
      href: string;
    }]
  }]
}

const HOST = Deno.env.get("HOST");
const SECTIONS_API_ENDPOINT = Deno.env.get("SECTIONS_API_ENDPOINT");
const baseUrl = Deno.env.get("PRODUCTION")
  ? `https://${HOST}/`
  : "http://localhost:8000/";

export const handler: Handlers<SectionsData | null> = {
  async GET(_, ctx) {
    const response = await fetch(baseUrl + SECTIONS_API_ENDPOINT);
    //TODO: Remove the logs
    console.log(`handler:response, ${response}`)
    if (response.status === 404) {
      console.log(`handler:response.status, ${response.status}`)
      return ctx.render(null);
    }
    console.log(`handler:baseUrl + SECTIONS_API_ENDPOINT, ${baseUrl + SECTIONS_API_ENDPOINT}`)
    const data: SectionsData = await response.json();
    //TODO: Remove the logs
    console.log(`handler:sections, ${data.sections}`)
    return ctx.render({ sections: data.sections });
  },
};

export default function Page({ data }: PageProps<SectionsData | null>) {
  const { sections } = data;
  console.log(sections)
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="A collection of sites, apps, packages, articles and other stuff about ES modules."
        />
        <meta name="theme-color" content="#FFFFFF" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="google" content="notranslate" />
        <title>buildless.site</title>
        <script src={asset("register-sw.js")}></script>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/favicon-512x512.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="manifest" href="/asset-manifest.json" />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css?family=Inter:400,600,700&display=swap"
          as="font"
        />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css?family=Space+Mono:400,700&display=swap"
          as="font"
        />
        <link
          rel="preload"
          href="https://s3-us-west-2.amazonaws.com/colors-css/2.2.0/colors.min.css"
          as="style"
        />
        <link rel="stylesheet" href={asset("style.css")} />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-136789855-3"
        >
        </script>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html:
              `window.dataLayer = window.dataLayer || [];function gtag() {dataLayer.push(arguments);};gtag('js', new Date());gtag('config', 'UA-136789855-3');`,
          }}
        >
        </script>
      </Head>
      <main class="container">
        <Header title="buildless.site" />
        <Hero />
        <EmbedCode />
        <Manifesto />
        <Boilerplates />
        <Sections sections={sections} />
        <Footer />
      </main>
    </>
  );
}
