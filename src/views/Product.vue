<template>
    <startSection></startSection>
    <productSection></productSection>
</template>


<script>
    import startSection from '../components/product/startSection'
    import productSection from '../components/product/productSection'


    export default {
        name: 'Product',
        components: {
            startSection,
            productSection,
        },
        data() {
            return {
                test: "I am testing",
            }

        },


    }
</script>