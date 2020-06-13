<template>
       <!-- Comments Form -->
        <div class="card my-4">
          <h5 class="card-header">Leave a Comment:</h5>
          <div class="card-body">
           
              <div class="form-group">
                <textarea class="form-control" rows="3" v-model="comm"></textarea>
                <input type="text" style="display:none" v-model="userAuth.id" >
                <input type="text" style="display:none" v-model="postId">
              </div>
              <button @click="postComment" class="btn btn-primary">Comment</button>
            
          </div>
        </div>
</template>

<script>
    export default {

        props:['userAuth','postId'],

        data(){
            return{
                comm: ''
            }
        },
        methods:{
postComment(){
   let commentData = {
        user : this.userAuth.id,
        post : this.postId,
        comment : this.comm
    }

    this.$store.dispatch('postComment',commentData)
    this.comm = ''
}
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
