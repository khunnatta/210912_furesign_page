<template>
  <div class="home">
    <!-- <TopNavMobile v-if="mobileView"/> -->
    <HomeMobile v-if="mobileView"/>
    <HomeDesktop v-if="!mobileView"/>
  </div>
</template>

<script>
import HomeDesktop from '@/components/HomeDesktop.vue'
import HomeMobile from '@/components/HomeMobile.vue'

export default {

  name: 'Home',
  el: "#app-cam",
  components: {
    HomeDesktop,
    HomeMobile
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

<style scoped>
.home {
  margin: 0px;
  padding: 0px;
}
</style>
