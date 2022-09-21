export const data = JSON.parse("{\"key\":\"v-2d0ad528\",\"path\":\"/zh/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"你好，vuePress\",\"slug\":\"你好-vuepress\",\"link\":\"#你好-vuepress\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"zh/README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
