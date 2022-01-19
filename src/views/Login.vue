<template>
    <Login></Login>
</template>


<script>
    import Login from '../components/login/login'


    export default {
        name: 'webLogin',
        components: {
            Login,
        },
        data() {
            return {
                test: "I am testing",
            }

        },


    }
</script>