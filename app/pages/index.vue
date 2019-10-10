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
      <div class="text-center">
        <logo />
        <vuetify-logo />
      </div>

      <ul v-for="item in json.fileMap" :key="item.title">
          <li>
            <n-link v-bind:to="`/posts/` + `${item.base}`.split('_')[0] + '/' + `${item.base}`.split('_')[1].split('.')[0]">{{ item.title }} : {{ item.base.split("_")[0] }}</n-link>
          </li>
      </ul>

      <p>aaa</p>
      <p>{{$store.state.test}}</p>
      
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  asyncData () {
    return {json: require('../contents/summary.json')}
  },
}
</script>
