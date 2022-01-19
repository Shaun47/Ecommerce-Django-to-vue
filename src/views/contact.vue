<template>
    <Navigation></Navigation>
    <startSection></startSection>
    <formbox></formbox>
    <Footer></Footer>
</template>


<script>
    import startSection from '../components/contact/startSection'
    import formbox from '../components/contact/form'
    import Footer from '../components/footer'
    import Navigation from '../components/Navigation'

    export default {
        name: 'Contact',
        components: {
            startSection,
            formbox,
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