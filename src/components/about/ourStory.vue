<template>
    <!-- our story starts -->
    <div class="container story_box">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
                <h1 class="story_title">Our Story</h1>
                <p style="text-align:center;"><img src="img/brush_stroke.png" alt="" style="" class="img-fluid img-underline" /></p>
                <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <img src="img/people.png" alt="" class="img-fluid our_image" />
                    </div>
                    <div class="col-lg-8 col-md-8 col-sm-12">

                        <p class="story_para">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and
                            web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                        </p>
                        <p class="story_para">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and
                            web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <!-- our story ends -->
</template>

<script>
export default {
  name: 'ourStory',
  props: {
    msg: String
  },
  data(){
      return {
          name:"shaun",
      }
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
