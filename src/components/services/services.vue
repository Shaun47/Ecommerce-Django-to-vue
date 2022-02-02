






<template>
    <div class="container">
        <div class="row shipment section">
            <div class="col-lg-3 col-md-4 col-sm-4 logo">
                <h1><i class="fa fa-truck icon" aria-hidden="true"></i></h1>
                <h4>

                    Expedited/Regular Shipment
                </h4>
            </div>
            <div class="col-lg-9 col-md-8 col-sm-8 description">
                <p>
                    Regular shipment usually require ~30 days, we also provide 3-4 days expediate shipment service depending on buyers need. Our experienced and highly professional team and C&F
                    agent provide top quality shipping service to our customers.
                </p>
            </div>
        </div>
        <div class="row shipment section">
            <div class="col-lg-3 col-md-4 col-sm-4 logo">
                <h1>
                    <i class="fa fa-gift" aria-hidden="true"></i>
                </h1>
                <h4>

                    Packaging
                </h4>
            </div>
            <div class="col-lg-9 col-md-8 col-sm-8 description">
                <p>
                    We provide Final Pack service (2/5/10/25 LBS/Kgs) as our customers� requirement. Also have regular/customized compressed bale pack (100/200/300 lbs)
                    Depending on the customer need. We also do 5Kg Poly pack and (5x10) 50kg bale.
                </p>
            </div>
        </div>
        <div class="row shipment section">
            <div class="col-lg-3 col-md-4 col-sm-4 logo">
                <h1>
                    <i class="fa fa-child" aria-hidden="true"></i>
                </h1>
                <h4>

                    24/7 Customer service
                </h4>
            </div>
            <div class="col-lg-9 col-md-8 col-sm-8 description">
                <p>
                    We are located in the USA and Bangladesh which gives us flexibility to answer our customers 24/7.
                </p>
            </div>
        </div>
        <div class="row shipment section">
            <div class="col-lg-3 col-md-4 col-sm-4 logo">
                <h1>
                    <i class="fa fa-money" aria-hidden="true"></i>
                </h1>
                <h4>

                    Payment Options
                </h4>
            </div>
            <div class="col-lg-9 col-md-8 col-sm-8 description">
                <p>
                    We are open to various payment options (LC/TT/CAD/DP) depending on the buyers and regions of the trade.
                </p>
            </div>
        </div>
        <div class="row shipment section">
            <div class="col-lg-3 col-md-4 col-sm-4 logo">
                <h1>
                    <i class="fa fa-cogs" aria-hidden="true"></i>
                </h1>
                <h4>

                    Delivery Options
                </h4>
            </div>
            <div class="col-lg-9 col-md-8 col-sm-8 description">
                <p>
                    We provide different delivery options to our customers. We have FOB, CNF and door2door delivery options depending on customer requirement.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'services',
  props: {
    msg: String
  },
  data(){
      return {
          shipment:"",
          packaging: "",
          customer_service: "",
          payment_option: "",
          delivery_option: ""
      }
  },     
  mounted: function () {
      let $this = this;
        axios.get('/services')
    .then(function (response) {
         
        $this.shipment = response.data[0].regular_shipment;
        $this.packaging = response.data[0].packaging;
        $this.packaging = response.data[0].customer_service;
        $this.packaging = response.data[0].payment_option;
        $this.packaging = response.data[0].delivery_option;
        

    })
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .section {
        margin: 15px 0;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .shipment .logo {
        background: #ddd9d9;
        padding: 20px;
    }



    .logo h1 {
        text-align: center;
    }

    .logo h4 {
        text-align: center;
    }

    .description p {
        text-align: justify;
        margin: 5% 0;
        color: #262020;
    }
</style>
