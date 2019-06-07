<template>
  <div id="app">
    <div id="nav" class="navbar container-fluid">
      <div class="row" id="navi">
        <div class="col-8" id="title">
          <h1 id="title1"><b>BLOGGIT!</b></h1>

        </div>
        <div class="col-4" id='links'>
          <router-link to="/">Home</router-link> |
          <router-link to="/create">Create!</router-link>

        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
    height: 120px;
    width: 100%;
    background-color: rgba(50, 50, 50, .4);
    position: fixed;
    z-index: 1;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  #navi {
    display: flex;
    align-items: center;


  }



  #title1 {
    color: #42b983;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 4rem;

  }
</style>