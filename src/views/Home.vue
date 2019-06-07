<template>
  <div class="home container">
    <div class="row">
      <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
      <div class="col-10 ">

      </div>
    </div>
    <div class="row" id="blog">
      <blog-list />
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  // import CreateBlog from '@/components/CreateBlog.vue'
  import BlogList from '@/components/BlogList.vue'

  export default {
    name: 'home',
    mounted() {
      this.$store.dispatch('getBlogs')
    },
    components: {
      BlogList
    }
  }
</script>

<style>
  body {
    background: black;
  }

  #blog {
    padding-top: 200px;
  }
</style>