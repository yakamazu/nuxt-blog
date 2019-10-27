<template>
<v-app>
<v-container >
  <v-row dense>
    <v-col
      v-for="item in json.fileMap" :key="item.title"
      cols=6
    >
          <v-card
             class="mx-auto"
             outlined
          >
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">{{ item.created_at.split(' ')[0] }}</div>
                <div class="overline mb-4">{{ item.category }}</div>
                
                <a class="title" v-bind:href="`/posts/` + `${item.base}`.split('_')[0] + '/' + `${item.base}`.split('_')[1].split('.')[0]"　style="text-decoration: none; color: black;">
                  <v-list-item-title class="headline mb-1">{{ item.title }}</v-list-item-title>
                  <v-list-item-subtitle>{{ item.preview }}</v-list-item-subtitle>
                </a>
              </v-list-item-content>
            </v-list-item>

            <v-card-actions>
              <v-btn text v-for="tag in item.tags" :key="item.title">{{ tag }}</v-btn>
            </v-card-actions>
            
          </v-card>
    </v-col>
  </v-row> 
</v-container>
</v-app>
</template>

<script>
export default {
  asyncData () {
    return {json: require('../contents/summary.json')}
  },
}
</script>
