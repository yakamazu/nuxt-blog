<template>
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
      <div class="post-meta"><time>{{ params.date }}</time></div>
      <div v-html="bodyHtml"></div>
     
    </v-flex>  
  </v-layout>
</template>


<script>
import { sourceFileArray } from '../../../../contents/summary.json';

export default {
    validate({ params }) {
    return sourceFileArray.includes(`contents/md/${params.date}_${params.slug}.md`);
    },
    asyncData({ params }) {
    return Object.assign({}, require(`../../../../contents/json/${params.date}_${params.slug}.json`), { params });
    },
}
</script>
