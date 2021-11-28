<template>
    <!-- footer starts -->
    <div class="container-fluid">
        <div class="row footer-box">
            <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 offset-lg-1 offset-md-1 offset-sm-1 offset-xs-1">
                <div class="row ">
                    <div class="col-lg-5 col-md-5 col-sm-5 col-xs-12">
                        <h3>SINCERE <br /> INTERNATIONAL LLC</h3>
                        <p class="footer_para">
                            We are the direct source ground level manufacturer company in Bangladesh, distributing verity types of rags to customers at a
                            lowest price all around the world with the quickest delivery to their door. Helping customers wipe with confidence that they deserve. So JUST WIPE IT!
                        </p>
                    </div>
                    <div class="col-lg-2 col-md-2 col-sm-3 col-xs-12">
                        <h4>Location</h4>
                        <i class="fa fa-map-marker" aria-hidden="true&quot;&quot;" style="float:left; padding:5px;"></i><div><p class="sep_loc"> Phoenix, AZ 85233, USA</p></div>
                        <i class="fa fa-map-marker" aria-hidden="true&quot;&quot;" style="float:left; padding:5px;"></i><div><p class="sep_loc">Joydebpur, Gazipur, Bangladesh</p></div>
                        <i class="fa fa-map-marker" aria-hidden="true&quot;&quot;" style="float:left; padding:5px;"></i><div><p class="sep_loc">  Konabari, Gazipur, Bangladesh</p></div>

                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                        <h4>Contact Us</h4>
                        <p>info@sincereinternaitonal.com</p>
                        <p>+8801XXXXXXXXX</p>
                    </div>
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                        <div class="right logo">
                            <img src="img/Logo.png" class="img-fluid " alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- footer ends -->

</template>

<script>
export default {
  name: 'Footer',
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
    .footer-box {
        color: white;
        font-family: Montserrat-regular;
        background: #364162;
        padding: 8.71vh 0 11.03vh 0;
    }

        .footer-box h3 {
            font-family: Sulatty;
        }

        .footer-box h5 {
            font-size: 1.4vw;
        }



    .right.pull-right.logo {
        width: 50%;
    }

    .footer-box .footer_para {
        line-height: 2.8vh;
        text-align: justify;
    }

    .footer-box p {
        font-size: 1vw;
    }


</style>
