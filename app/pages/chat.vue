<template>
<v-app>
<v-container>
<!-- ログイン時にはフォームとログアウトボタンを表示 -->
  <div class="google-auth" v-if="$store.state.user.uid" key="login">
  
  <v-card
      max-width="650"
      class="mx-auto"
  >

    <v-toolbar
        color="cyan"
        dark
    >
    <v-toolbar-title>ユーザー名: [{{ $store.state.user.displayName }}]</v-toolbar-title>
    <div class="flex-grow-1"></div>

      <v-toolbar-items>
        <v-btn depressed large color="success" @click="dialog = true">ログアウト</v-btn>
      </v-toolbar-items>

      <v-dialog
        v-model="dialog"
        max-width="290"
      >
        <v-card>
          <v-card-title class="headline">ログアウトしますか？</v-card-title>
  
          <v-card-actions>
            <div class="flex-grow-1"></div>
  
            <v-btn
              color="green darken-1"
              text
              @click="logout"
            >
              はい
            </v-btn>
  
            <v-btn
              color="green darken-1"
              text
              @click="dialog = false"
            >
              いいえ
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>

    <v-list three-line>
        <template v-for="(comment, index) in $store.state.comments">
  
          <v-list-item
          >
            <v-list-item-avatar>
              <v-img :src="comment.img"></v-img>
            </v-list-item-avatar>
  
            <v-list-item-content>
              <v-list-item-title>{{ comment.user }} : {{ comment.createdAt }}</v-list-item-title>
              <v-list-item-subtitle>{{ comment.content }}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-icon v-if="comment.email === $store.state.user.email">
              <v-btn icon>
                <v-icon @click="$store.commit('deleteChatData', comment.id)">mdi-delete-circle</v-icon>
              </v-btn>
            </v-list-item-icon>

          </v-list-item>

          <v-divider></v-divider>

        </template>
      </v-list>

      <v-form
            class="pa-4 pt-6"
          >
            <v-textarea
              v-model="input"
              auto-grow
              filled
              color="deep-purple"
              label="Message"
              rows="1"
            ></v-textarea>
            <v-btn
              class="white--text"
              color="deep-purple accent-4"
              depressed
              @click="addComment"
            >Submit</v-btn>
      </v-form>
    </v-card>
    </div>
    
    <!-- 未ログイン時にはログインボタンを表示 -->
    <div class="google-auth" v-else key="logout">
    <v-btn depressed large color="primary" @click="googleLogin">googleでログイン</v-btn>
    </div>
</v-container>
</v-app>
</template>


<script>
import firebase from "~/plugins/firebase.js"

const db = firebase.firestore();

export default {
  data() {
    return {
      dialog: false,
      input: ''  // 入力したメッセージ
    }
  },
  asyncData({ store }) {
      //store.commit('displayChat');
      //store.commit('deleteChatDisplay');
  },
  methods: {
    googleLogin: function () {
      //firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())
      firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
    },
    logout: function () {
      this.dialog=false
      firebase.auth().signOut()
    },
    addComment: function() {
      this.$store.commit('addChatData', this.input);
      this.input='';
    },
  },
  created() {
    this.$store.commit('getLoginUser');
    //this.$store.commit('initChat');
    this.$store.commit('displayChat');
    this.$store.commit('deleteChatDisplay');
  },
  destroyed() {
      this.$store.commit('stopListener');
  },
}
</script>
