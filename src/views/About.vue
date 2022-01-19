<template>
    <Navigation></Navigation>
    <startSection></startSection>
    <ourStory></ourStory>
    <ourValues></ourValues>
    <ourPromise></ourPromise>
    <Footer></Footer>
</template>


<script>
    import Footer from '../components/footer'
    import Navigation from '../components/Navigation'
    import startSection from '../components/about/startSection'
    import ourStory from '../components/about/ourStory'
    import ourValues from '../components/about/ourValues'
    import ourPromise from '../components/about/ourPromise'


    export default {
        name: 'About',
        components: {
            startSection,
            ourStory,
            ourValues,
            ourPromise,
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