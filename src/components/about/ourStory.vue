<template>
    <!-- our story starts -->
    <div class="container story_box">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
                <h1 class="story_title">{{title}}</h1>
                <p style="text-align:center;"><img src="img/brush_stroke.png" alt="" style="" class="img-fluid img-underline" /></p>
                <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <img :src="img" alt="" class="img-fluid our_image" />
                    </div>
                    <div class="col-lg-8 col-md-8 col-sm-12">

                        <p class="story_para">
                            {{paragraph}}
                        </p>
                        
                    </div>
                </div>
            </div>

        </div>
    </div>
    <!-- our story ends -->
</template>

<script>
import axios from 'axios';

export default {
  name: 'ourStory',
  props: {
    msg: String
  },
  data(){
      return {
          title: "",
          paragraph: "",
          img: ""
      }
  },
    mounted: function () {
      let $this = this;
        axios.get('/about/story')
    .then(function (response) {
       $this.title = response.data[0].title;
        $this.paragraph = response.data[0].description;
        $this.img = response.data[0].img;
    })
   
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    /* story styling starts */

    .story_box {
        margin-top: 25px;
    }

    .story_title {
        font-weight: bolder;
        text-align: center;
    }

    .story_para {
        color: #888181;
        text-align: justify;
    }


    .our_image {
        /*margin-top:20px;*/
    }



    .categoryHeading {
        background: #0B3056;
        color: white;
        border-bottom: 4px solid #dc3545;
    }

    .img-underline {
        width: 100px;
        margin-bottom: 35px;
    }





    /* story styling ends */
</style>
