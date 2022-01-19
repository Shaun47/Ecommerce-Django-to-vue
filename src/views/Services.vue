<template>
    <Navigation></Navigation>
    <startSection></startSection>
    <services></services>
    <Footer></Footer>
</template>


<script>
    import startSection from '../components/services/startSection'
    import services from '../components/services/services'
    import Footer from '../components/footer'
    import Navigation from '../components/Navigation'


    export default {
        name: 'About',
        components: {
            startSection,
            services,
            Footer,
            Navigation,
        },
        data() {
            return {
                test: "I am testing",
            }

        },


    }
</script>