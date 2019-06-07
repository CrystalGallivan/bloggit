<template>
  <div class="home container">
    <div class="row">
      <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
      <div class="col-10 offset-1 create-blog">
        <div class="create-blog, card">
          <form @submit.prevent="handleSubmit" class="blog-form">
            <div class="form-group">
              <label for="exampleFormControlInput1"><b>Title</b></label>
              <input type="text" class="form-control" placeholder="Type title here" v-model="title">
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1"><b>Image</b></label>
              <input type="url" class="form-control" placeholder="URL" v-model='img'>
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1"><b>Name</b></label>
              <input type="text" class="form-control" placeholder="Type name here" v-model='user'>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1"><b>Blog</b></label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model='body'></textarea>
            </div>
            <button class="btn btn-danger" type="submit">Post!</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'CreateBlog',
    data() {
      return {
        body: '',
        title: '',
        user: '',
        img: ''
      }
    },
    components: {

    },
    methods: {
      handleSubmit() {
        let data = {
          title: this.title,
          body: this.body,
          img: this.img,
          user: this.user,
        }
        this.$store.dispatch('createBlog', data)
        this.blog = ''
      }
    }
  }
</script>
<style>
  .card {
    background-color: whitesmoke;
  }

  .create-blog {
    padding-top: 125px;
  }
</style>

<!-- var blog = new Schema({
title: { type: String, required: true },
body: { type: String, required: true },
img: { type: String },
user: { type: String, required: true }
}) -->