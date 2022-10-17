<script setup>
    import { onMounted, ref } from 'vue';
    import { useRouter } from 'vue-router';    

    const router = useRouter();    

    //handle navigation
    const handleNavigate = (url) => {        
        showMenu.value = false;
        router.push({ path: url }); //, replace: true
    };

    //handle language change
    function handleLangChanged(lang) {		
		localStorage.setItem("lang", lang);
        showMenu.value = false;
	}
</script>

<template>
    <footer>
        <img src="../assets/Logo.svg"/>
        
    </footer>
</template>

<style>    
    footer {
        background: #F7F8F1;
        width: 100vw;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }


    /* .social-nav {
    justify-content: flex-start;
    margin: 0;    

    .social {
        // padding: 0 24px;
        margin-bottom: 0;  

        display: flex;
        align-items: center;

        font-size: 16px;
        height: 30px;

        &:focus {
            border-radius: 6px;
            box-shadow: rgba(12, 151, 139, .3) 0px 0px 0px 4px;
            outline: 0px;

            -webkit-transition: all 300ms ease-out;
            -moz-transition: all 300ms ease-out;
            -o-transition: all 300ms ease-out;
            transition: all 300ms ease-out;
        }

        .icon {
            width: 30px;
            height: auto;

            &:hover {
                fill: $color-lorange;
                -webkit-transition: all 250ms ease-out;
                -moz-transition: all 250ms ease-out;
                -o-transition: all 250ms ease-out;
                transition: all 250ms ease-out;
            }                        
        }  
    }
} */
</style>