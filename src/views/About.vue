<template>
    <startSection></startSection>
    <ourStory></ourStory>
    <ourValues></ourValues>
    <ourPromise></ourPromise>
</template>


<script>
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
        },
        data() {
            return {
                test: "I am testing",
            }

        },


    }
</script>