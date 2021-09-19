<template>
    <section>
        <div class="marketplace">
            <div class="contentTop"> 
                <section class="topic">
                  <h2 style="text-align:center">ตลาดสินค้าเฟอร์นิเจอร์และของตกแต่งบ้านออนไลน์</h2>
                  <h1>ทดลองค้นหาสินค้าด้วย<b>ภาพถ่าย</b></h1>
                </section>
                <div class="container">
                  <div class="form-group">
                    <div class="upload-btn-wrapper">
                      <button class="btn">Upload a file</button>
                      <input type="file" id="file"  ref="file" v-on:change="handleFileUpload"   />
                    </div>
                  </div>
                  <button v-on:click="submitFile">ค้นหาสินค้า</button>
                </div>

                 <!-- Camera  -->
                <!-- <div id="app-cam">
                    <div class="camera-button">
                    <button type="button" class="button is-rounded" :class="{ 'is-primary' : !isCameraOpen, 'is-danger' : isCameraOpen}" @click="toggleCamera">
                        <span v-if="!isCameraOpen">ค้นหาสินค้า</span>
                        <span v-else>Close Camera</span>
                    </button>
                    </div>
                
                    <div v-show="isCameraOpen && isLoading" class="camera-loading">
                    <ul class="loader-circle">
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    </div>
                        <div v-if="isCameraOpen" v-show="!isLoading" class="camera-box" :class="{ 'flash' : isShotPhoto }">
                        <div class="camera-shutter" :class="{'flash' : isShotPhoto}"></div>
                        <video v-show="!isPhotoTaken" ref="camera" :width="450" :height="337.5" autoplay></video>
                        <canvas v-show="isPhotoTaken" id="photoTaken" ref="canvas" :width="450" :height="337.5"></canvas>
                    </div>
        
                    <div v-if="isCameraOpen && !isLoading" class="camera-shoot">
                        <button type="button" class="button" @click="takePhoto">
                            <img src="https://img.icons8.com/material-outlined/50/000000/camera--v2.png">
                        </button>
                    </div>
                    <div v-if="isPhotoTaken && isCameraOpen" class="camera-download">
                        <a id="downloadPhoto" download="my-photo.jpg" class="button" role="button" @click="downloadImage">Download</a>
                        <img id="showimg" >
                    </div>
                </div> -->
        <!-- Camera End -->
            </div>
        </div>
    </section>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import axios from 'axios';
// import '../assets/js/cameraSet.js';

export default {
  name: 'Marketplace',
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
      link: '#',
      file: "",

    }
  },
    
    methods: {
      // toggleCamera() {
      //   if(this.isCameraOpen) {
      //     this.isCameraOpen = false;
      //     this.isPhotoTaken = false;
      //     this.isShotPhoto = false;
      //     this.stopCameraStream();
      //   } else {
      //     this.isCameraOpen = true;
      //     this.createCameraElement();
      //   }
      // },
      
      // createCameraElement() {
      //   this.isLoading = true;
        
      //   const constraints = (window.constraints = {
      //             audio: false,
      //             video: true
      //         });
      //         navigator.mediaDevices
      //             .getUserMedia(constraints)
      //             .then(stream => {
      //       this.isLoading = false;
      //                 this.$refs.camera.srcObject = stream;
      //             })
      //             .catch(error => {
      //       this.isLoading = false;
      //                 alert(`May the browser didn't support or there is some errors. ${error.message}`);
      //             });
      // },
      // stopCameraStream() {
      //   let tracks = this.$refs.camera.srcObject.getTracks();
  
      //         tracks.forEach(track => {
      //             track.stop();
      //         });
      // },
      // takePhoto() {
      //   if(!this.isPhotoTaken) {
      //     this.isShotPhoto = true;
  
      //     const FLASH_TIMEOUT = 50;
  
      //     setTimeout(() => {
      //       this.isShotPhoto = false;
      //     }, FLASH_TIMEOUT);
      //   }
        
      //   this.isPhotoTaken = !this.isPhotoTaken;
        
      //   const context = this.$refs.canvas.getContext('2d');
      //   context.drawImage(this.$refs.camera, 0, 0, 450, 337.5);
      //   console.log('context: ',context);
      // },
      // downloadImage() {

      //   function decodeBase64Image(dataString) {
      //     var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
      //     response = {};
      //     if (matches.length !== 3) {
      //       return new Error('Invalid input string');
      //       }

      //     response.type = matches[1];
      //     response.data = new Buffer(matches[2], 'base64');
      //     return response;
      //     }

      //   this.file_img = document.getElementById("photoTaken").toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");


      //   const download = document.getElementById("downloadPhoto");
      //   const setimages = document.getElementById("showimg");
      //   const canvas = document.getElementById("photoTaken").toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
        
      //   // console.log(this.file_img);
 
      //   download.setAttribute("href", canvas);
      //   setimages.setAttribute("src", canvas);

      //   let data = canvas;
      //   var decodedImg = decodeBase64Image(data);
      //   console.log("decodedImg-->", decodedImg);
        
      //   let formData = new FormData();
      //   formData.append('file', imageBuffer)
      //   axios.post('http://localhost:5000/single-file',
      //   formData,{
      //     headers: {'Content-Type': 'multipart/form-data'}
      //     }
      //   )
     
      // }, 
      submitFile(){
        let formData = new FormData();
        formData.append('file', this.file); // append image file name as file in variable formData

        axios.post('http://localhost:5000/single-file', 
        formData,
          {
          headers: {'Content-Type': 'multipart/form-data'}
          }
        )
      },

      handleFileUpload(){
        console.log(this.file)
        this.file = this.$refs.file.files[0];
      }

    }
}
</script>


<style scoped>
@import '../assets/css/cameraSet.scss';
@import url('https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;500&display=swap');


video{
    width: 320px;
    height:380px;
    border-radius: 15px;
}

.contentTop {
  position: absolute;
  left: 60px;
  width: calc(100% - 170px);
  top: 80px;
  padding: 20px;
  border-radius: 30px;
  background-color: #fff;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  transition: 1s transform cubic-bezier(.19,.78,.23,.96);
}


.marketplace {
  font-family: 'Prompt', sans-serif;
  display: block;
  align-items: center;
}


.marketplace h1 {
  font-weight: 400;
  font-size: 3rem;
  margin-top: 0px;
  margin-bottom: 0px;
}

.marketplace b {
  font-weight: 500;
  color: rgb(169, 126, 109);
}

.marketplace h2 {
  font-weight: 400;
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 2rem;
  text-align: left;
}

.marketplace button {
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
  margin: 20px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}

.topic{
  text-align: center;
  align-items: center;
  display: block;
}

.upload-btn-wrapper {
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.btn {
  border: 2px solid gray;
  color: gray;
  background-color: white;
  padding: 8px 20px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bold;
}

.upload-btn-wrapper input[type=file] {
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}
</style>