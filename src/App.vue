<template>

  <NavigationMobile class="navigationMobile"/>

  <div class="contentTop">
    <nav class="nav">

      <TopNav v-if="!mobileView"/>
      <TopNavMobile v-if="mobileView"/>

      <div class="routerIcon" v-if="mobileView" @click="showNav = !showNav">
        <i class="fas fa-bars"></i>
      </div>

    </nav>
  </div>

  <div class="content" :class="{'open':showNav}">
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
      mobileView: false,
      miniView: false  
    }
  },

  methods: {
    handleView(){
      this.mobileView = window.innerWidth <= 700;
    },
  },

  created() {
    this.handleView();
  }
}

</script>


<style>

.navigationMobile{
  position: absolute;
  top: 100px;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.nav {
  display: flex;
  align-items: center;
  width: 100%;
  height: 20px;
}

.routerIcon {
  cursor: pointer;
  position: absolute;
  right: 2.5rem;
}

i {
  font-size: 1.5rem;
  color: #2c3e50;
}

.contentTop {
  position: absolute;
  top: 10px;
  left: 10px;
  width: calc(100% - 60px);
  padding: 20px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  transition: 1s transform cubic-bezier(.19,.78,.23,.96);
}

.content {
  position: absolute;
  top: 80px;
  left: 10px;
  width: calc(100% - 60px);
  /* height: calc(100% - 60px); */
  padding: 20px;
  border-radius: 30px;
  background-color: #fff;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  transition: 1s transform cubic-bezier(.19,.78,.23,.96);
}

.open {
  transform: translateY(65px);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
