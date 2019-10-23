<template>
<v-app>
  <v-container>
    <v-card>
      <v-tabs vertical>
        <v-tab>
          <v-icon left>mdi-account</v-icon>
          about
        </v-tab>
        <v-tab>
          <v-icon left>mdi-thumb-up</v-icon>
          hobby             
        </v-tab>
        <v-tab>
          <v-icon left>mdi-rocket</v-icon>
          will         
        </v-tab>

        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <p>福岡在住</p>
              <p>仕事ではDWHやBIに関連する泥臭いことがメイン</p>
              <p>個人的に色々試してみたいことをメモしていく</p>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <a :href="qiita.kyotei" target="_blank">競艇の自動売買</a><br>
              <p>
                試行錯誤中
              </p>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <ul>
                <li>Wind surfing</li>
                <li>Fishing</li>
                <li>Holding sushi with caught fish</li>
                <li>Piano</li>
                <li>English</li>
                <li>Art</li>
                <li>Martial arts</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card>

  </v-container>
</v-app>
</template>


<script>
export default {
    data() {
        return {
            qiita : {
                kyotei : "https://qiita.com/yakamazu/items/076516b01d1079ca5769"
            },
        }
    },
}
</script>
