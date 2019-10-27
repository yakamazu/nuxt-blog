import colors from 'vuetify/es5/util/colors'

const entries = require('./app/contents/summary.json');

export default {
  mode: 'universal',
  srcDir: 'app/',
  generate: {
    routes() {
        let blogRoutes = [];
        const posts = '/posts/';
        const srash = '/';

        for(let i in entries.fileMap) {
          let blogDate = entries['fileMap'][i]['base'].split('_')[0];
          let blogTitle = entries['fileMap'][i]['base'].split('_')[1].split('.')[0];
          blogRoutes.push(posts + blogDate + srash + blogTitle);
        }

        return blogRoutes;
    }
  },
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
      '~/plugins/firebase',
      '~/plugins/disqus',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/font-awesome',
    '@nuxtjs/dotenv',
    [
      '@nuxtjs/google-gtag',
      {
        id: 'UA-135977737-1', //あなたのGoogleアナリティクスのプロパティID
        debug: true //本番環境以外でもGAを有効にしたい場合はtrueに。
      }
    ],
  ],
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },

}
