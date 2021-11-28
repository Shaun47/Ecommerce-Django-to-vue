<template>
    <startSection></startSection>
    <formbox></formbox>
</template>


<script>
    import startSection from '../components/contact/startSection'
    import formbox from '../components/contact/form'


    export default {
        name: 'Contact',
        components: {
            startSection,
            formbox,
        },
        data() {
            return {
                test: "I am testing",
            }

        },


    }
</script>