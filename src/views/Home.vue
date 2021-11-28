<template>
    <HeroSection></HeroSection>
    <VideoSection></VideoSection>
    <chooseUs></chooseUs>
    <product></product>
    <callRequest></callRequest>
</template>


<script>
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
        },
        data() {
            return {
                test: "I am testing",
            }

        },


    }
</script>