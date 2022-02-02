<template>
    <!-- Why we are different section starts -->
    <div class="container">
        <div class="row why-different-row" data-aos="fade-up" data-aos-easing="ease-in-out">
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <img src="img/Group 190.png" class="img-fluid why-img" alt="" />
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 why-different">
                <h1>{{title}}</h1>
                <p>
                    {{paragraph}}
                </p>
            </div>
        </div>
    </div>


    <!-- Why we are different section ends -->
</template>

<script>
import axios from 'axios';

export default {
  name: 'VideoSection',
  props: {
    msg: String
  }, 
    data(){
      return {
          title: "",
          paragraph: ""
      }
  },      
  mounted: function () {
      let $this = this;
        axios.get('/home/different')
    .then(function (response) {
         
       $this.title = response.data[0].title;
        $this.paragraph = response.data[0].description;
    })
  },

    methods:{

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
