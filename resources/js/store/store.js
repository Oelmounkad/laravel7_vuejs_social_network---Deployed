import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

const endpoint = process.VUE_APP || 'http://127.0.0.1:8000'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        posts: {}
    },
    getters: {
       
  

    },
    mutations: {
        updatePosts: (state,payload) => {
            state.posts = payload.data
        },
        addNewPost: (state,payload) => {
            state.posts.unshift(payload);
        },
        addCommentToPost: (state,payload) => {
           let index = 0;

           for(var i = 0; i < state.posts.length; i += 1) {
            if(state.posts[i]['id'] === payload.post_id) {
                index = i;
            }
        }
        console.log('index is : '+index);
           state.posts[index].comments.unshift(payload)
        }

    },
    actions: {
        fetchAllPosts: (context) => {
          axios.get(endpoint+"/posts")
          .then(res =>  {
              context.commit('updatePosts',res)
              console.log("here's the posts")
              console.log(res.data)
        })
          .catch(error => console.log(error))
      
        },
        postComment: (context,payload) => {
            axios.post(endpoint+'/comments', {
                post_id : payload.post,
                user_id : payload.user,
                body : payload.comment
            }).then(res => {
                context.commit('addCommentToPost',res.data)
            })
            .catch(error => console.log(error.message))
            
        },
        deletePost : (context,payload) => {
            axios.delete(endpoint+'/posts/'+ payload)
            .then(res => {
                context.dispatch('fetchAllPosts')
            })
        },
        postPost : (context,payload) => {
            axios.post(endpoint+'/posts', {
                user_id: payload.user,
                title: payload.title,
                body: payload.body
            })
            .then( (res) => {
                console.log('New post returned: '+res)
                context.commit('addNewPost',res.data);
            } )
        }


    }
});