<template>

  <NavigationMobile class="navigationMobile"/>

  <div class="contentTopDesktop" v-if="!mobileView">
    <nav class="nav">
      <TopNav/> 
    </nav>
  </div>

  <div class="contentTopMobile" v-if="mobileView">
    <nav class="nav">
      <TopNavMobile/>
      <div class="routerIcon" v-if="mobileView" @click="showNav = !showNav">
        <i class="fas fa-bars"></i>
      </div>
    </nav>
  </div>


  <div class="contentApp" :class="{'open':showNav}">
    <router-view/>
  </div>

</template>

<script>

import TopNav from '@/components/TopNav.vue'
import TopNavMobile from '@/components/TopNavMobile.vue'
import NavigationMobile from '@/components/NavigationMobile.vue'
import HomeMobile from '@/components/HomeMobile.vue'
import HomeDesktop from '@/components/HomeDesktop.vue'

export default {

  components: {
    TopNav,
    TopNavMobile,
    NavigationMobile,
    HomeMobile,
    HomeDesktop
  },

  data: function() {
    return{
      showNav: false,
      mobileView: false
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

 .contentTopMobile {
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

 .contentTopDesktop {
  position: absolute;
  top: 10px;
  left: 60px;
  width: calc(100% - 170px);
  padding: 20px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  transition: 1s transform cubic-bezier(.19,.78,.23,.96);
}

.contentApp {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  transition: 1s transform cubic-bezier(.19,.78,.23,.96);
}

.open {
  transform: translateY(65px);
  z-index: -1;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
