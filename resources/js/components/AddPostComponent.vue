<template>
       <!-- Comments Form -->
        <div class="col-md-12 card my-4">
          <h5 class="card-header">What's on your mind ?</h5>
          <div class="card-body">
           
              <div class="form-group">
                <textarea class="form-control" placeholder="Post title" rows="3" v-model="postTitle"></textarea>
                <textarea class="form-control" placeholder="Post body" rows="3" v-model="postBody"></textarea>
                <input type="text" style="display:none" v-model="userAuth.id" >
              </div>
              <button @click="postPost" class="btn btn-primary">Post</button>
            
          </div>
        </div>
</template>

<script>
    export default {

        props:['userAuth'],

        data(){
            return{
                postTitle: '',
                postBody: ''
            }
        },
        methods:{
postPost(){
   let postData = {
        user : this.userAuth.id,
        title : this.postTitle,
        body : this.postBody
    }

    this.$store.dispatch('postPost',postData)
    this.postBody = '',
    this.postTitle = ''
}
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
