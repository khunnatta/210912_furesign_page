<template>
    <div class="navigationMobile">

        <ul>
            <li>HOME</li>
            <li>MARKETPLACE</li>
            <li> COMMUNITY </li>
        </ul>

        <div class="socialMedia">
            <i class="fab fa-facebook"></i> |
            <i class="fab fa-instagram"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavigationMobile'
}
</script>

<style scoped>

.navigationMobile {
    float: right;
    position: absolute;
    top: 3rem;
    right: 2rem;
}

ul {
    list-style: none;
    text-align:left;
}

li {
    color: #fff;
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 15px;
    cursor: pointer;
}

li:hover {
    color: #2c3e50;
    }

.socialMedia {
    font-size: 1.3rem;
}

</style>


