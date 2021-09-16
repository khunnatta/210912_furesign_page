<template>
    <div class="navigationMobile">

        <ul>
            <li><a class="link-to-page" href="/">HOME</a></li>
            <li><a class="link-to-page" href="/marketplace">MARKETPLACE</a></li>
            <li><a class="link-to-page" href="/community">COMMUNITY</a> </li>
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


ul {
    list-style: none;
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    padding: 0px;
}

li, .link-to-page {
    display: inline-block;
    color: #fff;
    font-size: 0.9rem;
    font-weight: bold;
    margin-left: 0.4rem;
    margin-right: 0.4rem;
    margin-bottom: 0px;
    cursor: pointer;
}

li:hover {
    color: #2c3e50;
    }

.socialMedia {
    font-size: 1.3rem;
}

</style>


