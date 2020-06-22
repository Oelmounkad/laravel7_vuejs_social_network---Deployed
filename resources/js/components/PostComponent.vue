<template>
<div>


  <div class="container">
<div class="row">
  <div class="col-md-4">
    <p>here profile ?</p>
  </div>
   <div class="col-md-4">
    <addpost-component v-bind:user-auth="userAuth">  </addpost-component>
      

      <!-- Post Content Column -->
      <div class="col-md-12 bg-white mt-3" v-for="post in posts" :key="post.id">

<button type="button" @click="deletePost(post.id)" class="btn btn-danger">Delete</button>
        <!-- Title -->
        <h1 class="mt-4">{{ post.title }}</h1>         

        <!-- Author -->
        <p class="lead">
          by
          <a href="#">{{ post.user.name }}</a>
        </p>

        <hr>

        <!-- Date/Time -->
        <p>Posted on {{ post.created_at }}</p>

        <hr>

 <!-- Preview Image 
        <img class="img-fluid rounded" src="http://placehold.it/900x300" alt="">

        <hr>-->

        <!-- Post Content -->
        <p class="lead">{{ post.body }}</p>
        <hr>

             <!-- Single Comment -->
        <div class="media mb-4" v-for="comment in post.comments" :key="comment.id">
          <img class="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="">
          <div class="media-body">
            <h5 class="mt-0">{{ comment.user.name }}</h5>
           {{ comment.body }}

            <div class="media mt-4" v-for="reply in comment.replies" :key="reply.id">
              <img class="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="">
              <div class="media-body">
                <h5 class="mt-0">{{ reply.user.name }}</h5>
                {{ reply.body }}
                </div>
            </div>
          </div>
        </div>

        

<addcomment-component v-bind:user-auth="userAuth" v-bind:post-id="post.id">  </addcomment-component>



</div>
    
  </div>
    <div class="col-md-4">
    <v-alert
      v-model="alert"
      border="left"
      close-text="Close Alert"
      color="red"
      dismissible
    >
   Post deleted !
    </v-alert>
  </div>
</div>
</div> </div>
</template>

<script>

    export default {

      props: ['userAuth'],
  
  data() {
    return {
  comm: '',
   alert: false,  
    }
  },

    computed: {
        posts(){
            return this.$store.state.posts;
        }
    },
    methods:{
          postComment(comm){
this.$store.dispatch('postComment',comm);

                  },
                  deletePost(id){
this.$store.dispatch('deletePost',id);
this.alert = true;
setInterval(() => this.alert = false ,2000)

                  }
    },

        created() {
            this.$store.dispatch('fetchAllPosts').then(res => console.log(res));
        }
    }
</script>
