<template>
    <!-- footer starts -->
    <div class="container-fluid">
        <div class="row footer-box">
            <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 offset-lg-1 offset-md-1 offset-sm-1 offset-xs-1">
                <div class="row ">
                    <div class="col-lg-5 col-md-5 col-sm-5 col-xs-12">
                        <h3>Demo <br /> INTERNATIONAL LLC</h3>
                        <p class="footer_para">
                            We are the direct source ground level manufacturer company in Bangladesh, distributing verity types of rags to customers at a
                            lowest price all around the world with the quickest delivery to their door. Helping customers wipe with confidence that they deserve. So JUST WIPE IT!
                        </p>
                    </div>
                    <div class="col-lg-2 col-md-2 col-sm-3 col-xs-12">
                        <h4>{{locationTitle}}</h4>
                        <i class="fa fa-map-marker" aria-hidden="true&quot;&quot;" style="float:left; padding:5px;"></i><div><p class="sep_loc"> {{loc1}}</p></div>
                        <i class="fa fa-map-marker" aria-hidden="true&quot;&quot;" style="float:left; padding:5px;"></i><div><p class="sep_loc">{{loc2}}</p></div>
                        <i class="fa fa-map-marker" aria-hidden="true&quot;&quot;" style="float:left; padding:5px;"></i><div><p class="sep_loc">  {{loc3}}</p></div>

                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                        <h4>{{contactTitle}}</h4>
                        <p>{{mail}}</p>
                        <p>{{phone}}</p>
                    </div>
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                        <div class="right logo">
                            <img :src="logo" class="img-fluid " alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- footer ends -->

</template>

<script>
import axios from 'axios';

export default {
  name: 'Footer',
  props: {
    msg: String
  },
  data(){
      return {
          companyName: "",
          locationTitle: "",
          loc1: "",
          loc2: "",
          loc3: "",
          contactTitle: "",
          mail: "",
          phone: "",
          logo: ""
      }
  },
    mounted: function () {
      let $this = this;
        axios.get('/home/footer')
    .then(function (response) {
       $this.companyName = response.data[0].companyName;
       $this.locationTitle = response.data[0].locationTitle;
        $this.loc1 = response.data[0].loc1;
       $this.loc2 = response.data[0].loc2;
       $this.loc3 = response.data[0].loc3;
       $this.contactTitle = response.data[0].contactTitle;
       $this.mail = response.data[0].mail;
       $this.phone = response.data[0].phone;
       $this.logo = response.data[0].logo;
    })
    .catch(function (error) {
        console.log(error);
    });
  },
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
