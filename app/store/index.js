import Vuex from 'vuex'
import firebase from "~/plugins/firebase.js"

const db = firebase.firestore();

const store = () => {
    return new Vuex.Store({
        unsubscribe: null,
        state: function() {
            return {
                comments: [],
                img: 'https://1.bp.blogspot.com/-4-ktVUOZ0Mo/VbnQ8-QED8I/AAAAAAAAwKA/mj58a2ZqwAU/s50/unchi_character.png', // アイコン
                user: {},  // ユーザー情報
            }
        },
        mutations: {
            getLoginUser: function(state) {
                firebase.auth().onAuthStateChanged(user => {
                  // ログイン状態ならuserが取得できる
                  state.user = user ? user : {}
                })
            },
            initChat: async function(state) {
                state.comments = [];
                const querySnapshot = await db.collection('chat').orderBy("createdAt", "asc").get();
                state.comments = querySnapshot.docs.map(elem => elem.data());
            },
            displayChat: async function(state) {
                state.comments = [];
                //let comments_tmp = [];
                
                this.unsubscribe = await db.collection('chat').orderBy("createdAt", "asc")
                              .onSnapshot(querySnapshot => {  
                              //state.comments = Array.from(new Set(state.comments));
                              //state.comments = [];
                              //console.log("^^^^^^^");
                              querySnapshot.docChanges().forEach(change => {
                                if (change.type !== 'removed') {
                                    state.comments.push(change.doc.data());
                                    //comments_tmp.push(change.doc.data());
                                    //console.log("-----");
                                    //console.log(change.doc.data())
                                }
                              });
                              console.log("start")
                              //state.comments = Array.from(new Set(comments_tmp));
                            });
                
            },
            stopListener: function(state){
                //this.unsubscribe = null;
                this.unsubscribe();
                console.log("end");
            },
            addChatData: async function(state, input) {
                const now = new Date();
                const YYYY = now.getFullYear();
                const MM = now.getMonth() + 1 < 10 ? "0" + now.getMonth() + 1 : now.getMonth() + 1;
                const DD = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
                const hh = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
                const mm = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
                const ss = now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();
                // コメントをFirestoreへ登録
                await db.collection('chat').doc("msg" + now.getTime()).set({
                    content: input,
                    user: state.user.displayName,
                    email: state.user.email,
                    img: state.img,
                    createdAt: YYYY + "/" + MM + "/" + DD + " " + hh + ":" + mm + ":" + ss,
                    id: "msg" + now.getTime()
                })

            },
            deleteChatData: async function(state, id) {
                await db.collection('chat').doc(id).delete()
            },
            deleteChatDisplay: async function(state) {
                await db.collection('chat').orderBy("createdAt", "asc")
                    .onSnapshot(querySnapshot => {         
                              querySnapshot.docChanges().forEach(change => {
                                
                                if (change.type === 'removed') {
                                    let index = state.comments.findIndex(comment => comment.id === change.doc.data().id)
                                    
                                    if (index !== -1) {
                                        state.comments.splice(index, 1)
                                    }
                                }
                              });
                            });
            },
        },
    })
}

export default store