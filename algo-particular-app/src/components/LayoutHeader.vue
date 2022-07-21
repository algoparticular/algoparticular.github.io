<script setup>
    import Menu from './Menu.vue';
</script>

<template>
    <header>
        <Menu />

        <div id="logo">
            <img src="../assets/icon_praxis.svg"/>
        </div>                   
    </header>
</template>

<style>    
    header {
        padding: 16px 5%;
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        width: 90%;

        background: rgba(247, 248, 241, 0.18);
        backdrop-filter: blur(6px);
    }    

    #logo {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #logo img {
        width: 50px;
    }
</style>