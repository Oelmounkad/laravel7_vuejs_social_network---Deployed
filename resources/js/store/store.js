import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

let baseUrl = process.env.VUE_APP_URL || "http://desolate-lowlands-42602.herokuapp.com";

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
          axios.get('http://desolate-lowlands-42602.herokuapp.com'+"/posts")
          .then(res =>  {
              context.commit('updatePosts',res)
              console.log("here's the posts")
              console.log(res.data)
        })
          .catch(error => console.log(error))
      
        },
        postComment: (context,payload) => {
            axios.post('http://desolate-lowlands-42602.herokuapp.com'+'/comments', {
                post_id : payload.post,
                user_id : payload.user,
                body : payload.comment
            }).then(res => {
                context.commit('addCommentToPost',res.data)
            })
            .catch(error => console.log(error.message))
            
        },
        deletePost : (context,payload) => {
            axios.delete('http://desolate-lowlands-42602.herokuapp.com'+'/posts/'+ payload)
            .then(res => {
                context.dispatch('fetchAllPosts')
            })
        },
        postPost : (context,payload) => {
            axios.post('http://desolate-lowlands-42602.herokuapp.com'+'/posts', {
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