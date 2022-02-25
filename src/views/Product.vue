<template>
    <startSection></startSection>
    <productSection></productSection>
    <Footer></Footer>
</template>


<script>
    import startSection from '../components/product/startSection'
    import productSection from '../components/product/productSection'
    import Footer from '../components/footer'


    export default {
        name: 'Product',
        components: {
            startSection,
            productSection,
            Footer
        },
        data() {
            return {
                test: "I am testing",
            }

        },


    }
</script>