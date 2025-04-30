import { CustomOgImages } from "./quartz/plugins/emitters/ogImage"
import { og } from "./quartz/plugins/emitters/ogImage/og"
import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"
/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "MAYLOG",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "maylog.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        title:
          {
            name: "Do Hyeon",
            weights: [400],
            includeItalic: true,
          },
        header:
          {
            name: "42dot Sans",
            weights: [400, 500, 600, 700],
            includeItalic: true,
          },
        body:
          {
            name: "42dot Sans",
            weights: [400, 500, 600, 700],
            includeItalic: true,
          },
        code:
          {
            name: "JetBrains Mono",
            weights: [400, 700],
            includeItalic: true,
          },
      },
      colors: {
        lightMode: {
          light: "#faf8f8", /*faf8f8*/
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          secondary: "#2770a4",  /*284b63*/
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#161618",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#7b97aa",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage({
        sort: (f1, f2) => {
          const nameA = f1.slug ?? ""
          const nameB = f2.slug ?? ""
          return nameA.localeCompare(nameB)
        },
      }),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
        sitemapBaseURL: "https://maylog.xyz",
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages({
        colorScheme: "lightMode", // 또는 "darkMode"
        width: 1200,
        height: 630,
        excludeRoot: true,
        component: og, // <- 아래에서 정의할 커스텀 컴포넌트
      }),
    ],
  },
}

export default config
