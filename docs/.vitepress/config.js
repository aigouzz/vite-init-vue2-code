// import logo from '../../public/logo.png'

export default {
    base: '/vue2/',
    head: [
        ['link', { rel: 'icon', href: 'https://aigouzz.github.io/dist/logo.png' }]
      ],
    title: 'Vue2源码解析',
    outDir: '../../aigouzz.github.io/vue2',
    description: 'vue2 vitepress vite vue-router vuex',
    themeConfig: {
        logo: '/public/logo.png',
        siteTitle: 'Vue2.0源码解析',
        nav: [
            { text: '前端架构', link: 'https://aigouzz.github.io/dist' },
            {
              text: '源码解析',
              items: [
                { text: 'Vue2', link: 'https://aigouzz.github.io/vue2' },
                { text: 'Vue3', link: 'https://aigouzz.github.io/vue3' },
                { text: 'React', link: 'https://aigouzz.github.io/react' }
              ]
            },
            {
                text: '商铺项目', link: 'https://aigouzz.github.io/shop'
            },
            {
                text: '听音乐' ,link: 'https://aigouzz.github.io/music'
            }
          ],
        sidebar: [
            {
                text: '前言',
                items: [
                    { text: '介绍', link: '/intro/1' },
                    { text: '认识flow', link: '/intro/2' },
                    { text: 'Vue源码目录设计', link: '/intro/3' },
                    { text: 'Vue源码构建', link: '/intro/4' },
                    { text: 'Ready', link: '/intro/5' }
                ]
            },
            {
                text: '数据驱动',
                items: [
                    { text: '介绍', link: '/data/1' },
                    { text: 'new Vue', link: '/data/2' },
                    { text: 'Vue实例挂载', link: '/data/3' },
                    { text: 'render', link: '/data/4' },
                    { text: 'virtual dom', link: '/data/5' },
                    { text: 'createElement', link: '/data/6' },
                    { text: 'update', link: '/data/7' },
                ]
            },
            {
                text: '组件',
                items: [
                    { text: '介绍', link: '/comp/1' },
                    { text: 'createComponent', link: '/comp/2' },
                    { text: 'patch', link: '/comp/3' },
                    { text: 'merge config', link: '/comp/4' },
                    { text: 'lifecycle', link: '/comp/5' },
                    { text: 'component initialization', link: '/comp/6' },
                    { text: 'async component', link: '/comp/7' },
                ]
            },
            {
                text: '响应式原理',
                items: [
                    { text: '介绍', link: '/proxy/1' },
                    { text: '响应对象', link: '/proxy/2' },
                    { text: '依赖收集', link: '/proxy/3' },
                    { text: '派发更新', link: '/proxy/4' },
                    { text: 'nextTick', link: '/proxy/5' },
                    { text: '检测变化', link: '/proxy/6' },
                    { text: '计算属性and监听属性', link: '/proxy/7' },
                    { text: '组件更新', link: '/proxy/8' },
                    { text: 'Props（2.6.11）', link: '/proxy/9' },
                    { text: '原理图', link: '/proxy/10' },
                ]
            },
            {
                text: '编译',
                items: [
                    { text: '介绍', link: '/compile/1' },
                    { text: '编译入口', link: '/compile/2' },
                    { text: 'parse', link: '/compile/3' },
                    { text: 'optimize', link: '/compile/4' },
                    { text: 'codegen', link: '/compile/5' },
                ]
            },
            {
                text: '扩展',
                items: [
                    { text: '介绍', link: '/expand/1' },
                    { text: 'event', link: '/expand/2' },
                    { text: 'v-model', link: '/expand/3' },
                    { text: 'slot', link: '/expand/4' },
                    { text: 'keep-alive', link: '/expand/5' },
                    { text: 'transition', link: '/expand/6' },
                    { text: 'transition-group', link: '/expand/7' },
                ]
            },
            {
                text: 'Vue router',
                items: [
                    { text: '介绍', link: '/router/1' },
                    { text: '路由注册', link: '/router/2' },
                    { text: 'VueRouter对象', link: '/router/3' },
                    { text: 'matcher', link: '/router/4' },
                    { text: '路径切换', link: '/router/5' },
                ]
            },
            {
                text: 'Vuex',
                items: [
                    { text: '介绍', link: '/vuex/1' },
                    { text: 'vuex初始化', link: '/vuex/2' },
                    { text: 'api', link: '/vuex/3' },
                    { text: '插件', link: '/vuex/4' },
                ]
            }
        ]
      }
  }