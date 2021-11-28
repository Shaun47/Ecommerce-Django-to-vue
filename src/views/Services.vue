<template>
    <startSection></startSection>
    <services></services>
</template>


<script>
    import startSection from '../components/services/startSection'
    import services from '../components/services/services'
   


    export default {
        name: 'About',
        components: {
            startSection,
            services,
        },
        data() {
            return {
                test: "I am testing",
            }

        },


    }
</script>