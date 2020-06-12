// .vuepress/config.js
module.exports = {
  base:'/app-beauty/',
  themeConfig: {
    logo: '/assets/img/UI.png',
    nav: [
      { text: 'app-beauty', link: '/' },
      { text: '组件', link: '/manual/' },
      {
        text: 'Github',
        link: 'https://github.com/liva92/appUi.git',
        target: '_blank',
      },
    ],
    sidebar: [
      '/manual/button',
      '/manual/input',
      '/manual/search',
      '/manual/actionSheet',
      '/manual/article',
      '/manual/grid',
      '/manual/icon',
      '/manual/layout',
      '/manual/list',
      '/manual/loading',
      '/manual/menu',
      '/manual/modal',
      '/manual/toast',
    ],
  },
};
