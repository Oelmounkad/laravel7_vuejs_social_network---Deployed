<template>

 <v-tabs
    
    dark
  >

    <v-tab to="/profile">
      Profile
    </v-tab>

    <v-tab to="/example">
     Example
    </v-tab>

 <v-tab to="/login">
     Login
    </v-tab>

  </v-tabs>

</template>

<script>
  export default {
props: ['loginRoute'],
  }
</script>