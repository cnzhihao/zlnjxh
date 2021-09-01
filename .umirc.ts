import { defineConfig } from 'dumi';

export default defineConfig({
  title: '自律内卷协会',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  base: '/zlnjxh',
  publicPath: '/zlnjxh/',
  navs: [
    {
      title: '加入我们',
      path: '/加入我们',
    },
    {
      title: '城市生存指南',
      path: '/城市生存指南',
      // 可通过如下形式嵌套二级导航菜单，目前暂不支持更多层级嵌套：
      children: [
        { title: '原则', path: '/城市生存指南/原则' },
        { title: '生活与消费', path: '/城市生存指南/生活与消费' },
        { title: '工作与投资', path: '/城市生存指南/工作与投资' },
        { title: '婚恋', path: '/城市生存指南/婚恋' },
      ],
    },
    {
      title: '运营项目',
      path: '/运营项目',
      // 可通过如下形式嵌套二级导航菜单，目前暂不支持更多层级嵌套：
      children: [
        { title: 'STEAM教育', path: '/运营项目/steam-edu' },
        { title: '全栈工程师养成', path: '/运营项目/ep-coding' },
      ],
    },
  ],
  // more config: https://d.umijs.org/config
});
