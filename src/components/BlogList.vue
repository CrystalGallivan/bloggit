<template>
  <div class="blog-list">
    <div class="col-10 offset-1">
      <div class="card card-secondary mb-3" v-for='blog in blogs' :key="blog._id">
        <img :src="blog.img" class="card-img-top" id="img">
        <div class="card-body">
          <h5 class="card-title"><b>{{blog.title}}</b></h5>
          <p class="card-text">{{blog.body}}</p>
          <p class="card-text"><small class="text-muted">{{blog.user}}</small></p>
        </div>

      </div>
    </div>










    <!-- <div class="col-4">
      <img :src="blog.img" v-for='blog in blogs' :key="blog._id">
    </div>
    <div class="col-8">
      <div class="card bg-dark text-white" v-for='blog in blogs' :key="blog._id">
        <div class="card">
          <h5 class="card-title">{{blog.title}}</h5>
          <p class="card-text">{{blog.body}}</p>
          <p class="card-text">{{blog.user}}</p>
        </div>
      </div>
    </div> -->
    <!-- card-img-overlay -->
  </div>
</template>

<script>
  export default {
    name: "BlogList",
    mounted() {
      this.$store.dispatch('getBlogs')
    },
    computed: {
      blogs() {
        return this.$store.state.blogs
      }
    }
  }
</script>


<style>
  #img {
    display: flex;
    /* float: left; */
    justify-content: center;
    max-height: 200px;
    /* max-width: 200px; */
  }
</style>