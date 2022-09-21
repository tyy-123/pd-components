export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"你好， VuePress ！\",\"description\":\"这是我的第一个 VuePress 站点\",\"head\":[],\"locales\":{\"/\":{\"lang\":\"en-US\",\"title\":\"pd-components\",\"description\":\"Vue-powered Static Site Generator\"},\"/zh/\":{\"lang\":\"zh-CN\",\"title\":\"pd-components\",\"description\":\"Vue 驱动的静态网站生成器\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
