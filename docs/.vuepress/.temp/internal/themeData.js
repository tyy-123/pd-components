export const themeData = JSON.parse("{\"repo\":\"https://gitlab.com/foo/bar\",\"navbar\":[{\"text\":\"Docs\",\"link\":\"/documents\"},{\"text\":\"components\",\"link\":\"/componentsView\"}],\"sidebar\":{\"/componentsView\":[{\"text\":\"componentsView\",\"link\":\"/componentsView\",\"children\":[]},{\"text\":\"Media\",\"link\":\"/componentsView/Media.md\",\"children\":[{\"text\":\"media01\",\"link\":\"/componentsView/Media/media01.md\"},{\"text\":\"media02\",\"link\":\"/componentsView/Media/media02.md\"}]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
