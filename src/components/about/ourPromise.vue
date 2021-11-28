<template>
    <div class="container promise_box">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
                <h1 class="story_title">Our Promises</h1>
                <p style="text-align:center;"><img src="img/brush_stroke.png" alt="" style="" class="img-fluid img-underline" /></p>
                <div class="row">

                    <div class="col-6 p-4">

                        <img src="img/value_img.jpg" alt="" class="img-fluid" />

                    </div>
                    <div class="col-6 p-0 p-2">
                        <div class="contactLeftSide rounded">
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


                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ourPromise',
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

    /* contact form left side's css start */
    .contactLeftSide {
        background: #212529;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        overflow: hidden;
        padding: 30px;
        min-height: 100%;
    }







    .contactLeftInfo {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .bigCrcl, .smallCrcl {
        position: absolute;
    }

    .bigCrcl {
        bottom: -100px;
        right: -60px;
        width: 55%;
        aspect-ratio: 1 / 1;
        background: #b02a37;
        border-radius: 50%;
    }

    .smallCrcl {
        width: 22%;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        background: white;
        bottom: 23%;
        right: 16%;
        opacity: 0.8;
    }

    .contactLeftIcon {
        display: grid;
        justify-content: center;
        align-items: center;
        width: 60%;
        grid-template-columns: 25% 25% 25% 25%;
    }

        .contactLeftIcon i {
            /* padding: 13px; */
            text-align: center;
            border-radius: 50%;
            /* margin: 4px; */
            font-size: 21px;
            transition: 0.15s;
        }

            .contactLeftIcon i:hover {
                /* background: #a72633; */
            }



    .contactLeftIcon {
        display: grid;
        justify-content: center;
        align-items: center;
        width: 60%;
        grid-template-columns: 25% 25% 25% 25%;
    }

        .contactLeftIcon a:hover {
            background: #a72633;
        }

        .contactLeftIcon a {
            text-align: center;
            padding: 13px;
            border-radius: 50%;
            margin: 4px;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            transition: 0.15s;
        }


    /* contact form left side's css ends */

    /* value box ends */

    /* Promise box starts */
    .promise_box {
        margin-bottom: 15px;
    }

    /* Promise box ends */
</style>
