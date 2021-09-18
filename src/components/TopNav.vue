<template>
    <div class="TopNav">
        <img 
        class="logo" 
        src="../assets/furesign_icon.png" 
        alt="FuResign"/>

        <h1 class="furesign"> FuResign </h1>

        <div class="router">
            <router-link class="home" to="/">HOME</router-link>
            <router-link class="market" to="/marketplace">MARKETPLACE</router-link>
        </div>
    </div>
</template>

<script>

export default {
    name:'TopNav'
}

</script>

<style>

@import url('/font-awesome-4.6.3/css/font-awesome.min.css');

.TopNav {
    display: flex;
    align-items: center;
    margin: 10px 0px 15px 0px;
    padding: 0px;
    height: 60px;
}

.logo {
    margin-left: 50px;
    height: 50px;
}

.logoMobile {
    margin-left: 1.5rem;
    height: 2.5rem;
}

.furesign {
    margin-left: 15px;
    font-size: 30px;
}

.furesignMobile {
    margin-left: 15px;
    font-size: 1.5rem;
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
    right: 2rem;
}

i {
    font-size: 1.5rem;
    color: #2c3e50;
}

</style>