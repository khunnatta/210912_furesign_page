<template>

    <nav class="TopNav" v-if="mobileView==false">

        <img 
        class="logo" 
        src="../assets/furesign_icon.png" 
        alt="FuResign"/>

        <h1 class="furesign"> FuResign </h1>

        <div class="router">
            <router-link class="home" to="/">HOME</router-link>
            <router-link class="market" to="/demo">MARKETPLACE</router-link>
        </div>

    </nav>

    <nav class="TopNav" v-if="mobileView==true">

        <img 
        class="logoMobile" 
        src="../assets/furesign_icon.png" 
        alt="FuResign"/>

        <h1 class="furesignMobile"> FuResign </h1>

        <div class="routerMobile">
            <i class="fas fa-bars"></i>
            <!-- <ul>
                <router-link class="home" to="/">HOME</router-link>
                <router-link class="market" to="/demo">MARKETPLACE</router-link>
            </ul> -->
        </div>

    </nav>


</template>

<script>

export default {
    name:'TopNav',
    // data: function () {
    //     return {
    //         mobileView: false
    //     }
    // },
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

<style scoped>

@import url('/font-awesome-4.6.3/css/font-awesome.min.css');

.TopNav {
    display: flex;
    align-items: center;
    background-color: rgb(248, 248, 248);
    border-radius: 20px;
    margin: 10px 5px 15px 5px;
    padding: 0px;
    height: 60px;
}

.logo {
    margin-left: 50px;
    height: 50px;
}

.logoMobile {
    margin-left: 50px;
    height: 50px;
}

.furesign {
    margin-left: 15px;
    font-size: 30px;
}

.furesignMobile {
    margin-left: 15px;
    font-size: 30px;
}

.router {
    position: absolute;
    left: 76%;
}

.router a {
    font-size: 20px;
    font-weight: bold;
    color: #2c3e50;
    margin: 5px;
}

.router a.router-link-exact-active {
    color: #e49764;
}

.routerMobile {
    cursor: pointer;
    float: right;
    position: absolute;
    right: 7%;
    
    i {
    font-size: 2rem;
    color:black;
    }
}



</style>