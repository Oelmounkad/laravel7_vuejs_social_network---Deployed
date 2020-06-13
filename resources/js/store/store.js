import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';


Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        posts: {}
    },
    getters: {},
    mutations: {
        updatePosts: (state,payload) => {
            state.posts = payload.data
        },
        refreshPosts: (state,payload) => {
            state.posts = payload.data
        }

    },
    actions: {
        fetchAllPosts: (context) => {
          axios.get("http://127.0.0.1:8000/posts")
          .then(res =>  {
              context.commit('updatePosts',res)
              console.log("here's the posts")
              console.log(res.data)
        })
          .catch(error => console.log(error))
      
        },
        postComment: (context,payload) => {
            axios.post('http://127.0.0.1:8000/comments', {
                post_id : payload.post,
                user_id : payload.user,
                body : payload.comment
            }).then(res => {
                context.dispatch('fetchAllPosts')
            })
            .catch(error => console.log(error.message))
            
        },
        deletePost : (context,payload) => {
            axios.delete('http://127.0.0.1:8000/posts/'+ payload)
            .then(res => {
                context.dispatch('fetchAllPosts')
            })
        },
        postPost : (context,payload) => {
            axios.post('http://127.0.0.1:8000/posts', {
                user_id: payload.user,
                title: payload.title,
                body: payload.body
            })
            .then( (res) => {
                context.dispatch('fetchAllPosts');
            } )
        }


    }
});