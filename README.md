# nuxt-blog

> My dandy Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

# create blog json
processmd contents/md/*.md --preview 160 --stdout --outputDir contents/json > contents/summary.json &&  sed -i -e 's/&gt;/>/g' contents/json/* &&  sed -i -e 's/&lt;/</g' contents/json/* && sed -i -e "s/&quot;/'/g" contents/json/*
