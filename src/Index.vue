<template>


    <Navigation></Navigation>
    <router-view />
    <Footer></Footer>
    
</template>
<script>
    import Navigation from './components/Navigation'
    import Footer from './components/footer'

    export default {
        name: 'Index',
        components: {
            Navigation,
            Footer,
        },
        data() {
            return {

            }

        },
        mounted() {
    
        },
        methods: {
          
        }

        
    }

</script>











