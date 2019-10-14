<template>
  <v-app>
    <v-container>
      <v-layout
        column
        justify-center
        align-center
      >
        <v-flex
          xs12
          sm8
          md6
        >
     
          <h1>{{ title }}</h1>
          <div class="post-meta"><time>{{ created_at }}</time></div>
          <br>
          <div v-html="bodyHtml"></div>
          <br>
          <div v-show="disqus_shortname" class="mt-10">
            <vue-disqus
              :shortname="disqus_shortname"
              :identifier="`${params.date}_${params.slug}`"
              :url="`${base_url}/posts/${params.date}/${params.slug}`"
            ></vue-disqus>
          </div>
     
        </v-flex>  
      </v-layout>
    </v-container>
  </v-app>
</template>

<style>
.post-meta{
    border-bottom: solid 1px gray;
}
</style>

<script>
import { sourceFileArray } from '../../../../contents/summary.json';

export default {
    data: () => ({
        base_url: process.env.base_url,
        disqus_shortname: process.env.disqus_shortname
    }),
    validate({ params }) {
    return sourceFileArray.includes(`contents/md/${params.date}_${params.slug}.md`);
    
    },
    asyncData({ params }) {
    return Object.assign({}, require(`../../../../contents/json/${params.date}_${params.slug}.json`), { params });
    },
}
</script>
