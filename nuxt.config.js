const isDev = process.env.NODE_ENV !== 'production';

export default {
  head: {
    title: 'Массаж в Омске «Ключ к здоровью»',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '«Ключ к здоровью» кабинет массажа в городе Омске оказывающий услугу массажа взрослым и детям' },
      { hid: 'keywords', name: 'keywords', content: 'Ключ к здоровью, массаж в Омске, детский массаж, массаж спины, общий массаж детям, массаж шейноворотниковой зоны, массаж поясницы, Омск, массаж, массаж детям с ЛФК' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//cdn.jsdelivr.net/npm/@mdi/font@6.5.95/css/materialdesignicons.min.css' },
    ]
  },

  css: [
    '@/assets/style.scss',
  ],

  plugins: [
    '@/plugins/vuesax.ts',
    { src: '@/plugins/ymap.ts', mode: 'client' },
  ],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    'nuxt-typed-vuex',
  ],

  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    [
      '@nuxtjs/yandex-metrika',
      {
        id: '88926425',
        webvisor: true,
      }
    ]
  ],

  sitemap: {
    hostname: 'https://xn-----flchopbg6aav1fudrl.xn--p1ai/',
    path: '/sitemap.xml',
    gzip: true,
    generate: true,
  },

  robots: {
    UserAgent: '*',
    Disallow: ['/yandex_583067b7955ae24f.html', '/googlec8c2b13332591ee7.html'],
  },

  // build: {
  //   ...(!isDev && {
  //     html: {
  //       minify: {
  //         collapseBooleanAttributes: true,
  //         decodeEntities: true,
  //         minifyCSS: true,
  //         minifyJS: true,
  //         processConditionalComments: true,
  //         removeEmptyAttributes: true,
  //         removeRedundantAttributes: true,
  //         trimCustomFragments: true,
  //         useShortDoctype: true
  //       }
  //     }
  //   }),
  //
  //   optimization: {
  //     minimize: !isDev
  //   },
  //
  //   ...(!isDev && {
  //     extractCSS: {
  //       ignoreOrder: true
  //     }
  //   }),
  //
  //   filenames: {
  //     app: ({ isDev }) => isDev ? '[name].js' : 'js/[contenthash].js',
  //     chunk: ({ isDev }) => isDev ? '[name].js' : 'js/[contenthash].js',
  //     css: ({ isDev }) => isDev ? '[name].css' : 'css/[contenthash].css',
  //     img: ({ isDev }) => isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]',
  //     font: ({ isDev }) => isDev ? '[path][name].[ext]' : 'fonts/[contenthash:7].[ext]',
  //     video: ({ isDev }) => isDev ? '[path][name].[ext]' : 'videos/[contenthash:7].[ext]'
  //   },
  //
  //   extend(config) {
  //     config.resolve.alias.vue = 'vue/dist/vue.common';
  //   },
  // },

  generate: {
    dir: 'docs',
  },

  target: 'static',

  // router: {
  //   base: '/health-key/',
  // },
}
