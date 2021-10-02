module.exports = {
  head: [
    ['link', { rel: 'icon', href: 'https://cdn.jsdelivr.net/gh/Big-Cake-jpg/Image_For_My_Blog/favicon.png' }]
  ],
  title: 'CakeMC 帮助文档',  // 设置网站标题
  description : 'CakeMC 官方帮助文档',
  themeConfig : {
    nav : [
        { text: '首页', link: '/' },
        { text: 'RTMWorld', link: '/rtmworld/' },
        { text: 'Cake Launcher', link: '/cake-launcher/' }
    ],
    sidebar: {
        '/' : [
      "/", //指的是根目录的md文件 也就是 README.md 里面的内容
            "main"
        ]
    },
    sidebarDepth : 2
  }
}