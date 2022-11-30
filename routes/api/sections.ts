import { HandlerContext, Handlers } from "$fresh/server.ts";
import * as marked from "https://esm.sh/marked@4.2.3";
import * as cheerio from "https://esm.sh/cheerio@1.0.0-rc.12";

export const handler: Handlers<null> = {
  async GET(_, ctx: HandlerContext) {
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

    function getSection(sectionId) {
      const sectionTitle = $(`#${sectionId}`).text();

      let linkList: { content: string; href: string }[] = [];

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

    const sections = [
      { ...getSection(headingIds.articles) },
      { ...getSection(headingIds.tutorials) },
      { ...getSection(headingIds.platforms) },
      { ...getSection(headingIds.libraries) },
      { ...getSection(headingIds.videos) },
      { ...getSection(headingIds.presentations) },
    ];

    const structuredDoc = {
      sections,
    };

    return new Response(JSON.stringify(structuredDoc), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};