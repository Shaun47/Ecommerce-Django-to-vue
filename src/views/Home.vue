<template>
    <Navigation></Navigation>
    <HeroSection></HeroSection>
    <VideoSection></VideoSection>
    <chooseUs></chooseUs>
    <product></product>
    <callRequest></callRequest>
    <Footer></Footer>
</template>


<script>
    import Footer from '../components/footer'
    import Navigation from '../components/Navigation'
    import HeroSection from '../components/index/herosection'
    import VideoSection from '../components/index/videoSection'
    import chooseUs from '../components/index/chooseUs'
    import product from '../components/index/product'
    import callRequest from '../components/index/callRequest'
    export default {
        name: 'Home',
        components: {
            HeroSection,
            VideoSection,
            chooseUs,
            product,
            callRequest,
            Navigation,
            Footer,
        },
        mounted: function () {
       
        },
        data() {
            return {
                
            }

        },
        methods:{

        }


    }
</script>