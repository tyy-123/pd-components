export const data = JSON.parse("{\"key\":\"v-c0f957a0\",\"path\":\"/documents/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"Docs\",\"slug\":\"docs\",\"link\":\"#docs\",\"children\":[{\"level\":3,\"title\":\"Version 1.X\",\"slug\":\"version-1-x\",\"link\":\"#version-1-x\",\"children\":[]},{\"level\":3,\"title\":\"Introduce\",\"slug\":\"introduce\",\"link\":\"#introduce\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"documents/README.md\"}")

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
