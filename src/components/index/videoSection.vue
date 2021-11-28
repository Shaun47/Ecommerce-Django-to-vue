<template>
    <!-- Why we are different section starts -->
    <div class="container">
        <div class="row why-different-row" data-aos="fade-up" data-aos-easing="ease-in-out">
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <img src="img/Group 190.png" class="img-fluid why-img" alt="" />
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 why-different">
                <h1>Why we are different than the Rest</h1>
                <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                    making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a
                    search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,
                    sometimes on purpose (injected humour and the like).
                </p>
                <p>
                    packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their
                    infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </p>
            </div>
        </div>
    </div>


    <!-- Why we are different section ends -->
</template>

<script>
export default {
  name: 'VideoSection',
  props: {
    msg: String
  },
  data(){
      return {

      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .why-different h1 {
        font-size: 3.51vw;
        font-family: FuturaHeavyBT;
    }

    .why-different p {
        font-size: 1.17vw;
        text-align: justify;
        color: #707d90;
    }

    .row.why-different-row {
        margin: 19.72vh 0;
    }

</style>
