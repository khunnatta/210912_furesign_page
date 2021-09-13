<template>

    <div class="TopNav">
        <img 
            class="logoMobile" 
            src="../assets/furesign_icon.png" 
            alt="FuResign"/>

        <h1 class="furesignMobile"> FuResign </h1>
    </div>

</template>

<script>

export default {
    name:'TopNavMobile'
}

</script>

<style scoped>

@import url('/font-awesome-4.6.3/css/font-awesome.min.css');

.TopNav {
    display: flex;
    align-items: center;
    /* background-color: rgb(248, 248, 248);
    border-radius: 20px; */
    margin: 10px 5px 15px 5px;
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