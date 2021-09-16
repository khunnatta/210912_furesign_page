<template>

  <div class="home">

    <section class="topic">
      <h2 style="text-align:center">ตลาดสินค้าเฟอร์นิเจอร์และของตกแต่งบ้านออนไลน์</h2>
      <h1><b>ค้นหาง่าย</b>ทั้งไอเดียและสินค้า</h1>
      <button> ค้นหาสินค้า </button>
    </section>

    <section class="image">
      <img alt="demo" src="../assets/demo_01.jpg">
    </section>

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

    <section>
      
    </section>

  </div>

</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;500&display=swap');

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

.description img {
  width: 3em;
  height: 100%;
  margin-right: 3px;

}

</style>
