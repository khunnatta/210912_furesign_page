<template>
  <div class="home">
    <div class="contentTop">
    <section class="topic">
      <h2 style="text-align:center">ตลาดสินค้าเฟอร์นิเจอร์และของตกแต่งบ้านออนไลน์</h2>
      <h1><b>ค้นหาง่าย</b>ทั้งไอเดียและสินค้า</h1>

      <button @click="$router.push({path: 'camera_action'})">ค้นหาสินค้า</button>


    </section>

    <section class="image">
      <img alt="demo" src="../assets/demo_01.jpg">
    </section>
    </div>

    <div class="content">
    <section class="description">

      <div class="subTopic">
      <img src="../assets/online-community.png">
      <h1><b>Idea Community</b></h1>
      </div>
      <h2>แหล่งชุมชนออนไลน์ที่รวบรวมไอเดียการแต่งพื้นที่อาศัย</h2>

      <div class="subTopic">
      <img src="../assets/shopping-cart.png">
      <h1><b>Online Shopping</b></h1>
      </div>
      <h2>ตลาดสินค้าเฟอร์นิเจอร์และของตกแต่งบ้านที่ค้นหาได้ง่ายผ่านรูปภาพ</h2>
      
    </section>
    </div>

  <div class="content2">
    <section>
      <h1>ทำไม? ต้องซื้อเฟอร์นิเจอร์ของตกแต่งผ่าน <b>Furesign</b></h1> 
    </section>
  </div>

  <div class="content3">
    <section>
      <h1><b>ค้นหาสินค้าได้ง่าย</b>ผ่านคำและรูปภาพ</h1> 
      <div class="subTopic2">
        <img src="../assets/Pic2-V4_crop.gif" alt="search by image">
        <h2>ช่วยคุณค้นหาสินค้าได้ง่ายผ่านรูปภาพ โดยระบบจะค้นหาสินค้าที่เหมือนหรือใกล้เคียงกับภาพต้นแบบมากที่สุด 
        </h2>
      </div>
    </section>
  </div>

  <div class="content4">
    <section>
      <h1><b>แหล่งรวบรวมไอเดีย</b>การตกแต่งพื้นที่</h1>
      <div class="subTopic2">
      <img src="../assets/pic3-V3.png" alt="idea community">
      <h2>หาไอเดียการแต่งบ้านและพื้นที่ต่าง ๆ ได้ง่ายผ่านแหล่งชุมชนออนไลน์บน Furesign</h2>
      </div>
    </section>
  </div>

  <div class="content5">
    <section>
      <h1><b>แนะนำสินค้า</b>ที่ตรงตามไอเดียที่สนใจ</h1>
      <div class="subTopic2">
      <img src="../assets/pic4-V2.png" alt="idea recommendation">
      <h2>สั่งซื้อสินค้าผ่านไอเดียที่คุณสนใจได้ง่ายผ่านระบบของ Furesign</h2> 
      </div>
    </section>
  </div>

  </div>

</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
// import '../assets/js/cameraSet.js';

export default {
  name: 'Home',
  el: "#app-cam",
  components: {
    Splide,
    SplideSlide,
  },
  data:() => {
    return {
      options: 
      {
        rewind : true,
        width  : 800,
        gap    : '1rem',
      },
      isCameraOpen: false,
      isPhotoTaken: false,
      isShotPhoto: false,
      isLoading: false,
      link: '#'
    }
  },
    
    methods: {
      toggleCamera() {
        if(this.isCameraOpen) {
          this.isCameraOpen = false;
          this.isPhotoTaken = false;
          this.isShotPhoto = false;
          this.stopCameraStream();
        } else {
          this.isCameraOpen = true;
          this.createCameraElement();
        }
      },
      
      createCameraElement() {
        this.isLoading = true;
        
        const constraints = (window.constraints = {
                  audio: false,
                  video: true
              });
  
  
              navigator.mediaDevices
                  .getUserMedia(constraints)
                  .then(stream => {
            this.isLoading = false;
                      this.$refs.camera.srcObject = stream;
                  })
                  .catch(error => {
            this.isLoading = false;
                      alert(`May the browser didn't support or there is some errors. ${error.message}`);
                  });
      },
      
      stopCameraStream() {
        let tracks = this.$refs.camera.srcObject.getTracks();
  
              tracks.forEach(track => {
                  track.stop();
              });
      },
      
      takePhoto() {
        if(!this.isPhotoTaken) {
          this.isShotPhoto = true;
  
          const FLASH_TIMEOUT = 50;
  
          setTimeout(() => {
            this.isShotPhoto = false;
          }, FLASH_TIMEOUT);
        }
        
        this.isPhotoTaken = !this.isPhotoTaken;
        
        const context = this.$refs.canvas.getContext('2d');
        context.drawImage(this.$refs.camera, 0, 0, 450, 337.5);
      },
      
      downloadImage() {
        const download = document.getElementById("downloadPhoto");
        const canvas = document.getElementById("photoTaken").toDataURL("image/jpeg")
      .replace("image/jpeg", "image/octet-stream");
        download.setAttribute("href", canvas);
      }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;500&display=swap');

.contentTop {
  position: absolute;
  top: 80px;
  left: 5px;
  width: calc(100% - 50px);
  /* height: calc(100% - 60px); */
  padding: 20px;
  border-radius: 30px;
  background-color: #fff;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  transition: 1s transform cubic-bezier(.19,.78,.23,.96);
}

.content {
  position: absolute;
  top: 590px;
  left: 5px;
  width: calc(100% - 50px);
  /* height: calc(100% - 60px); */
  padding: 20px;
  border-radius: 30px;
  background-color: #fff;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  transition: 1s transform cubic-bezier(.19,.78,.23,.96);
}

.content2 {
  position: absolute;
  top: 1045px;
  left: 5px;
  width: calc(100% - 50px);
  /* height: calc(100% - 60px); */
  padding: 20px;
  border-radius: 30px;
  background-color: #fff;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  transition: 1s transform cubic-bezier(.19,.78,.23,.96);
}

.content3 {
  position: absolute;
  top: 1210px;
  left: 5px;
  width: calc(100% - 50px);
  /* height: calc(100% - 60px); */
  padding: 20px;
  border-radius: 30px;
  background-color: #fff;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  transition: 1s transform cubic-bezier(.19,.78,.23,.96);
}

.content4 {
  position: absolute;
  top: 1830px;
  left: 5px;
  width: calc(100% - 50px);
  /* height: calc(100% - 60px); */
  padding: 20px;
  border-radius: 30px;
  background-color: #fff;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  transition: 1s transform cubic-bezier(.19,.78,.23,.96);
}

.content5 {
  position: absolute;
  top: 2450px;
  left: 5px;
  width: calc(100% - 50px);
  /* height: calc(100% - 60px); */
  padding: 20px;
  border-radius: 30px;
  background-color: #fff;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  transition: 1s transform cubic-bezier(.19,.78,.23,.96);
}

.home {
  font-family: 'Prompt', sans-serif;
  display: block;
  align-items: center;
}

.home h1 {
  font-weight: 400;
  font-size: 1.5rem;
}

.home b {
  font-weight: 500;
  color: rgb(169, 126, 109);
}

.home h2 {
  font-weight: 400;
  font-size: 1.3rem;
  text-align: left;
}

.home button {
  background-color: rgb(169, 126, 109);
  font-family: 'Prompt', sans-serif;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 20px;
  font-size: 1.3rem;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
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
 width: 85vw;
 height: 100%;
 border-radius: 20px;
}

.description {
  margin-top: 20px;
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

.subTopic2{
  /* display: flex;
  align-items: center;
  align-content: center;
  margin-left: 10vw; */
  /* -ms-transform: translate(-50%, -50%);
  transform: translate(50%, -50%); */
}

.subTopic2 img {
  width: 13em;
  height: 100%;
  margin-left: 15vw;
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
