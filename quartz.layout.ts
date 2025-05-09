import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.Comments({
      provider: 'giscus',
      options: {
        // from data-repo
        repo: 'kikiru328/maylog',
        // from data-repo-id
        repoId: 'R_kgDOOebMJA',
        // from data-category
        category: 'Comments',
        // from data-category-id
        categoryId: 'DIC_kwDOOebMJM4Cp8Wl-Xg6',
      }
    }),
  ],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/kikiru328/",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer(
      {
        title: "Contents"
      }
    ),
    Component.DesktopOnly(
      Component.RecentNotes({
        title: "Recent",
        limit: 3,
        showTags: false,
        filter: (f) =>
          f.slug !== "index" &&
          !f.slug?.includes("/index"),
      })
    ),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(
      {
        title: "Contents"
      }
    ),
    Component.DesktopOnly(
      Component.RecentNotes({
        title: "Recent",
        limit: 3,
        showTags: false,
        filter: (f) =>
          f.slug !== "index" &&
          !f.slug?.includes("/index"),
      })
    ),
  ],
  right: [],
}
