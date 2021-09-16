<template>
<section>
  <div class="marketplace">
    <!-- <h1>This is a Marketplace page</h1> -->
  </div>
  </section>

</template>


<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export default {
  name: 'Home',
  components: {
    Splide,
    SplideSlide,
  },
  data:() => {
    return {
      options: {
        rewind : true,
        width  : 800,
        gap    : '1rem',
      }
    }
  }
}
</script>


<style scoped>

section {
 background-color: beige;
 border-radius: 10px;
 margin: 10px 5px;
}

</style>
