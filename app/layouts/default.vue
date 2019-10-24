<template>
<div> 
  <v-app>
    <div>
    <v-app-bar
      color="teal"
      dark
      dense app
    >
      <v-toolbar-title><a class="title" href="/"　style="text-decoration: none; color: white;">yakamazu blog</a></v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-toolbar-items>
        <v-btn text to="/">HOME</v-btn>
        <v-btn text to="/about">ABOUT</v-btn>
        <v-btn text to="/chat">CHAT</v-btn>
        <v-btn text to="/contact">CONTACT</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    </div>
  
    <v-content>
    <nuxt />
    </v-content>

    <v-footer
    dark
    padless
    >
      <v-card
        flat
        tile
        class="flex teal white--text text-center"
      >

          <v-card-text>
            <v-btn
              v-for="icon in icons"
              :key="icon.icon"
              class="mx-4 white--text"
              icon
              :href="icon.url"
              target="_blank"
            >
              <v-icon size="24px">{{ icon.icon }}</v-icon>
            </v-btn>
          </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Copyright © yakamazu All Rights Reserved.</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</div>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        {"icon":"fa-twitter", "url":"https://twitter.com/yakamazu2929"},
        //{"icon":"fa-linkedin", "url":"https://www.linkedin.com/in/kazuki-yamagata-93219759"},
        {"icon":"fa-github", "url":"https://github.com/yakamazu"},
      ],
    }),
  }
</script>

<style>
a .title{
    color: white;
    text-decoration: none;
}
</style>