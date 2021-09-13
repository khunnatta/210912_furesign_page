<template>

  <NavigationMobile/>
  <div class="content">

    <nav class="nav">
      <TopNav v-if="!mobileView"/>
      <TopNavMobile v-if="mobileView"/>
        <div id="routerIcon">
          <i class="fas fa-bars"></i>
        </div>
    </nav>

    <router-view/>
  </div>


</template>

<script>

import TopNav from '@/components/TopNav.vue'
import TopNavMobile from '@/components/TopNavMobile.vue'
import NavigationMobile from '@/components/NavigationMobile.vue'

export default {

  components: {
    TopNav,
    TopNavMobile,
    NavigationMobile
  },

  data: function() {
    return{
      showNav: false,
      mobileView: false   
    }
  },

  methods: {
    handleView(){
    this.mobileView = window.innerWidth <= 1100;
    console.log(this.mobileView)
    }
  },

  created() {
    this.handleView();
  }
}

</script>


<style>

.nav {
  display: flex;
  align-items: center;
  width: 100%;
}

.routerIcon {
  cursor: pointer;
  float: right;
  /* position: absolute;
  left: 10rem; */
}

i {
  font-size: 1.5rem;
  color: #2c3e50;
}

.content {
  position: absolute;
  top: 10px;
  width: calc(100% - 60px);
  height: calc(100% - 60px);
  padding: 20px;
  border-radius: 30px;
  background-color: #fff;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}

.open {
  transform: translateX(300px);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
