<template>
    <!-- our values starts -->
    <div class="container value_box">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
                <h1 class="story_title">Our Values</h1>
                <p style="text-align:center;"><img src="img/brush_stroke.png" alt="" style="" class="img-fluid img-underline" /></p>
                <div class="row">
                    <div class="col-6 p-0 p-2">
                        <div class="valueSide rounded">
                            <div class="contactLeftInfo">
                                <div class="row">
                                    <div class="col-lg-12 col-md-12 col-sm-12">
                                        <div class="row">
                                            <div class="col-lg-2">
                                                <i class="fa fa-tint icon" aria-hidden="true"></i>

                                            </div>
                                            <div class="col-lg-10">
                                                <h4 class="value_title">Embrace change</h4>
                                                <p class="value_para">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-2"><i class="fa fa-handshake-o icon" aria-hidden="true"></i></div>
                                            <div class="col-lg-10">
                                                <h4 class="value_title">Customer Commitment</h4>
                                                <p class="value_para">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-2">
                                                <i class="fa fa-american-sign-language-interpreting icon" aria-hidden="true"></i>



                                            </div>
                                            <div class="col-lg-10">
                                                <h4 class="value_title">Team Work</h4>
                                                <p class="value_para">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-2">
                                                <i class="fa fa-gavel icon" aria-hidden="true"></i>
                                            </div>
                                            <div class="col-lg-10">
                                                <h4 class="value_title">Integrity</h4>
                                                <p class="value_para">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-2">
                                                <i class="fa fa-users icon" aria-hidden="true"></i>


                                            </div>
                                            <div class="col-lg-10">
                                                <h4 class="value_title">Ownership</h4>
                                                <p class="value_para">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div class="col-6 p-4">

                        <img src="img/value_img.jpg" alt="" class="img-fluid" />

                    </div>

                </div>
            </div>
        </div>
    </div>
    <!-- our values ends -->
</template>

<script>
export default {
  name: 'ourValues',
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
    /* Value box starts */
    .story_title {
        font-weight: bolder;
        text-align: center;
    }
    .img-underline {
        width: 100px;
        margin-bottom: 35px;
    }
    .value_box {
        margin: 65px auto;
    }

    p.value_para {
        line-height: 1.1;
    }

    .contactLeftInfo .icon {
        font-size: 44px;
    }



    .valueSide {
        background: #364162;
        color: white;
        padding: 30px;
        height: 100%;
    }
    /* Value box ends */
</style>
