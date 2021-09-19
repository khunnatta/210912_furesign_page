<template>
  <div class="homeDesktop">
    <div class="contentTest">
        <section class="topic">
            <h2 style="text-align:center">ตลาดสินค้าเฟอร์นิเจอร์และของตกแต่งบ้านออนไลน์</h2>
            <h1><b>ค้นหาง่าย</b>ทั้งไอเดียและสินค้า</h1>
            <button @click="$router.push({ path: 'marketplace' })" > ค้นหาสินค้า </button>
        </section>

        <section class="image">
            <img alt="demo" src="../assets/cover.gif">
        </section>
    </div>

    <div class="contentTest">
      <section class="description">
      <table style="margin: auto;">
        <tr>
          <td>              
            <div class="subTopic">
                <img src="../assets/online-community.png">
                <h1><b>Idea Community</b></h1>
            </div>
            <h2>แหล่งชุมชนออนไลน์ที่รวบรวมไอเดียการแต่งพื้นที่อาศัย</h2>
          </td>
          <td>              
            <div class="subTopic">
                <img src="../assets/shopping-cart.png">
                <h1><b>Online Shopping</b></h1>
            </div>
            <h2>ตลาดสินค้าเฟอร์นิเจอร์และของตกแต่งบ้านที่ค้นหาได้ง่ายผ่านรูปภาพ</h2>
          </td>
        </tr>
      </table>
      </section>
    </div>

    <!-- <div class="contentTest">
      <section>
        <h1>ทำไม? ต้องซื้อเฟอร์นิเจอร์ของตกแต่งผ่าน <b>Furesign</b></h1> 
      </section>
      <section>
          <h1><b>ค้นหาสินค้าได้ง่าย</b>ผ่านคำและรูปภาพ</h1> 
          <div class="subTopic2">
              <img src="../assets/Pic2-V4_crop.gif" alt="search by image">
              <h2>ช่วยคุณค้นหาสินค้าได้ง่ายผ่านรูปภาพ โดยระบบจะค้นหาสินค้าที่เหมือนหรือใกล้เคียงกับภาพต้นแบบมากที่สุด 
          </h2>
          </div>
      </section>
    </div>

    <div class="contentTest">
    <section>
        <h1><b>แหล่งรวบรวมไอเดีย</b>การตกแต่งพื้นที่</h1>
        <div class="subTopic2">
        <img src="../assets/pic3-V3.png" alt="idea community">
        <h2>หาไอเดียการแต่งบ้านและพื้นที่ต่าง ๆ ได้ง่ายผ่านแหล่งชุมชนออนไลน์บน Furesign</h2>
        </div>
    </section>
    </div>

    <div class="contentTest">
    <section>
        <h1><b>แนะนำสินค้า</b>ที่ตรงตามไอเดียที่สนใจ</h1>
        <div class="subTopic2">
        <img src="../assets/pic4-V2.png" alt="idea recommendation">
        <h2>สั่งซื้อสินค้าผ่านไอเดียที่คุณสนใจได้ง่ายผ่านระบบของ Furesign</h2> 
        </div>
    </section>
    </div> -->

    <div class="contentTest">
      <section>
        <h1 style="margin: 25px 0px 70px 0px">ทำไม? ต้องซื้อเฟอร์นิเจอร์ของตกแต่งผ่าน <b>Furesign</b></h1> 
      </section>
      <splide :options="options">
        <splide-slide>
          <section class="slide">
            <h1><b>ค้นหาสินค้าได้ง่าย</b>ผ่านคำและรูปภาพ</h1> 
            <div class="subTopic2">
              <img src="../assets/Pic2-V4_crop.gif" alt="search by image" style="margin-left: 10vw;width: 14vw">
              <h2 style="text-align:center">ช่วยคุณค้นหาสินค้าได้ง่ายผ่านรูปภาพ โดยระบบจะค้นหาสินค้าที่เหมือนหรือใกล้เคียงกับภาพต้นแบบมากที่สุด</h2>
            </div>
          </section>
        </splide-slide>
        <splide-slide>
          <section class="slide">
            <h1><b>แหล่งรวบรวมไอเดีย</b>การตกแต่งพื้นที่</h1>
              <div class="subTopic2">
                <img src="../assets/pic3-V3.png" alt="idea community">
                <h2 style="text-align:center">หาไอเดียการแต่งบ้านและพื้นที่ต่าง ๆ ได้ง่ายผ่านแหล่งชุมชนออนไลน์บน Furesign</h2>
              </div>
          </section>
        </splide-slide>
        <splide-slide>
          <section class="slide">
            <h1><b>แนะนำสินค้า</b>ที่ตรงตามไอเดียที่สนใจ</h1>
            <div class="subTopic2">
              <img src="../assets/pic4-V2.png" alt="idea recommendation">
              <h2 style="text-align:center; float: right">สั่งซื้อสินค้าผ่านไอเดียที่คุณสนใจได้ง่ายผ่านระบบของ Furesign</h2> 
            </div>
          </section>
        </splide-slide>
      </splide>
    </div>
  </div>
</template>

<script>

import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { Splide, SplideSlide } from '@splidejs/vue-splide';

export default {
  name: 'HomeDesktop',
  components: {
    Splide,
    SplideSlide,
  },
  data:() => {
    return {
      options: {
          rewind : true,
          gap    : '1rem',
          // autoplay: true
      }
    }
  }
}

</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;500&display=swap');

td {
  padding: 30px;
}

.slide{
  border-radius: 30px;
  margin-left: 20%;
  width: 60%;
  /* border: 3px;
  border-style: solid;
  border-color: burlywood;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2); */
}

.contentTest {
  width: 100%;
  padding: 20px;
  border-radius: 30px;
  background-color: #fff;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  margin: 10px 0px;
}

.homeDesktop {
  font-family: 'Prompt', sans-serif;
  position: absolute;
  top: 70px;
  left: 60px;
  width: calc(100% - 170px);
  /* width: 100%; */
}

.homeDesktop h1 {
  font-weight: 400;
  font-size: 3rem;
  margin-top: 0px;
  margin-bottom: 0px;
  transition: 1s transform cubic-bezier(.19,.78,.23,.96);
}

.homeDesktop b {
  font-weight: 500;
  color: rgb(169, 126, 109);
}

.homeDesktop h2 {
  font-weight: 400;
  font-size: 2rem;
  margin-bottom: 0px;
  text-align: left;
}

.homeDesktop button {
  background-color: rgb(169, 126, 109);
  font-family: 'Prompt', sans-serif;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 20px;
  font-size: 2rem;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  margin: 10px;
}

.topic{
  text-align: center;
  align-items: center;
  display: block;
}

.image{
  margin-top: 20px;
}

.image img {
 height: 50vh;
 border-radius: 20px;
}

.description {
  margin-top: 20;
}

.create
{
background-image: url("../assets/online-community.png");
background-repeat: no-repeat;
padding-left: 30px;  /* width of the image plus a little extra padding */
display: block;  /* may not need this, but I've found I do */
}

.subTopic{
  display: flex;
  align-items: center;
  align-content: center;
  margin-left: 10vw;
  /* -ms-transform: translate(-50%, -50%);
  transform: translate(50%, -50%); */
}

.subTopic img {
  width: 3em;
  height: 100%;
  margin-right: 3px;

}

.subTopic2 h2{
  font-size: 2rem;
  float: right;
  width: 24vw;
  margin-top: 7%;
  margin-right: 4vw;
}

.subTopic2 img {
  float: left;
  margin-top: 2%;
  margin-left: 13vw;
  width: 10vw;
  height: 100%;
}

.content4 img {
  width: 10em;
  height: 100%;
  margin-left: 5vw;
}

.content5 img {
  width: 10em;
  height: 100%;
  margin-left: 4vw;
}

.slider{
  position: relative;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.box {
  border: 3px solid;
  width: 280px;
  height: 100px;
  border-radius: 30px;
  text-align: center;
  position: relative;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, 0);
}

</style>
