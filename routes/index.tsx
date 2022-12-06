import { asset, Head } from "$fresh/runtime.ts";
import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import * as marked from "https://esm.sh/marked@4.2.3";
import * as cheerio from "https://esm.sh/cheerio@1.0.0-rc.12";

import Header from "../components/Header.tsx";
import Hero from "../components/Hero.tsx";
import EmbedCode from "../islands/EmbedCode.tsx";
import Manifesto from "../components/Manifesto.tsx";
import Boilerplates from "../islands/Boilerplates.tsx";
import Sections from "../components/Sections.tsx";
import Footer from "../components/Footer.tsx";

interface SectionsData {
  sections: [{
    title: string;
    list: [{
      content: string;
      href: string;
    }];
  }];
}

export const handler: Handlers<SectionsData | null> = {
  async GET(_, ctx) {
    try {
      const readmeUrl =
        "https://raw.githubusercontent.com/hwclass/awesome-buildless/master/README.md";

      const headingIds = {
        articles: "articles",
        tutorials: "tutorials",
        platforms: "tools--platforms",
        libraries: "packages--libraries",
        videos: "videos",
        presentations: "presentations--talks",
      };

      const resp = await fetch(readmeUrl);

      if (resp.status === 404) {
        return new Response(
          "404: Error while fetching content... Please try again.",
        );
      }

      const readmeData = await resp.text();

      const html = marked.parse(readmeData);
      const $ = cheerio.load(html);

      const sections = [
        { ...getSection(headingIds.articles) },
        { ...getSection(headingIds.tutorials) },
        { ...getSection(headingIds.platforms) },
        { ...getSection(headingIds.libraries) },
        { ...getSection(headingIds.videos) },
        { ...getSection(headingIds.presentations) },
      ];

      function getSection(sectionId: string) {
        const sectionTitle = $(`#${sectionId}`).text();

        const linkList: { content: string; href: string }[] = [];

        $(`#${sectionId} + ul li`)
          .each((_, listItem) => {
            linkList.push({
              content: $("a", listItem).text(),
              href: $("a", listItem).attr("href"),
            });
          });

        const section = {
          title: sectionTitle,
          list: linkList,
        };

        return section;
      }

      return ctx.render({ sections });
    } catch (err) {
      console.log(`handler:err, ${err}`);
      return ctx.render(null);
    }
  },
};

export default function Page({ data }: PageProps<SectionsData | null>) {
  const sections = JSON.parse(JSON.stringify(data));
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
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
