<template>
    <!-- Main contact form starts -->

    <section class="container rounded bg-white shadow-sm mb-5 contact-form">
        <div class="row">
            <div class="col-4 p-0 p-2">
                <div class="contactLeftSide rounded">
                    <div class="contactLeftInfo">
                        <div class="contactLeftTxt mb-2">
                            <h3><b>Location</b></h3>

                        </div>
                        <div class="locations">
                            <i class="fa fa-map-marker" aria-hidden="true&quot;&quot;" style="float:left; padding:5px;"></i>
                            <div class="specific_loc">
                                <h6 class="sep_loc"> <b>USA Office:</b></h6>
                                <p>
                                    1295 N Ash St <br />
                                    Gilbert, AZ 85233 <br />
                                    USA
                                </p>
                            </div>

                            <i class="fa fa-map-marker" aria-hidden="true&quot;&quot;" style="float:left; padding:5px;"></i>
                            <div class="specific_loc">
                                <h6 class="sep_loc"> <b>Bangladesh Office:</b></h6>
                                <p>
                                    Plant - 1: <br />
                                    Konabari, Gazipur <br />
                                    Bangladesh
                                </p>

                                <p>
                                    Plant - 2: <br />
                                    Mariali, Gazipur Sadar, Gazipur-1700 <br />
                                    Bangladesh
                                </p>
                            </div>

                        </div>
                    </div>
                    <div class="contactLeftIcon">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    <div class="bigCrcl"></div>
                    <div class="smallCrcl"></div>
                </div>
            </div>
            <div class="col-8 p-4">
                <form action="#">
                    <div class="mb-3">
                        <label for="name" class="form-label asterisk" required>Full Name</label>
                        <input type="text" class="form-control" id="name" aria-describedby="fullname">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail" class="form-label asterisk" required>Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="phone" class="form-label asterisk" required>Phone Number</label>
                        <input type="text" class="form-control" id="phone" aria-describedby="phone">
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label asterisk">Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                    </div>
                    <a href="#" class="btn form_submit">Submit</a>
                </form>
            </div>
        </div>
    </section>

    <!-- Main contact form ends -->
</template>

<script>
export default {
  name: 'form',
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
    /* contact form left side's css start */

    /* my code starts */
    .asterisk:after {
        content: "*";
        color: red;
    }

    a.form_submit {
        background: #b02a37;
        border: 1px solid #b02a37;
        color: white;
        float: right;
    }
    /* my code ends */
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

    .contactLeftTxt p {
        margin-top: 15px;
        font-size: 12px;
        font-weight: lighter;
        font-family: Montserrat-Medium;
    }



    .specific_loc p {
        margin-left: 20px;
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

    .bigCrcl, .smallCrcl {
        position: absolute;
    }

    .bigCrcl {
        bottom: -100px;
        right: -60px;
        width: 56%;
        aspect-ratio: 1 / 1;
        background: #b02a37;
        border-radius: 50%;
    }

    .smallCrcl {
        width: 24%;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        background: white;
        bottom: 11%;
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

    /* contact form right side's css starts */

    .contactTopForm {
        display: grid;
        grid-template-columns: 50% 50%;
    }

    .formBox {
        display: flex;
        flex-direction: column;
    }

        .formBox input {
            width: 75%;
            border: none;
            border-bottom: 2px solid #6f6e6e5c;
            outline: none;
            color: #9d9d9d;
            padding-top: 4px;
            padding-bottom: 7px;
            font-weight: 500;
        }

        .formBox label {
            font-size: 13px;
            font-weight: 500;
            color: #9d9d9d;
        }

        .formBox input:focus {
            color: #a72633;
            border-bottom: 2px solid #a72633;
        }

    .contactMiddleBox > p {
        font-weight: 500;
        font-size: 16px;
    }

    /* css for radio btns start */
    .radioInput {
        display: none;
    }

    .radiolable {
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    .radioCrcl {
        border: 1px solid #212529;
        height: 20px;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
    }

        .radioCrcl i {
            font-size: 12px;
            color: white;
        }

    .radioInput:checked + .radioCrcl {
        background-color: #212529;
    }

    .radioBox {
        display: flex;
        justify-content: space-between;
    }

    .textArea textarea {
        width: 100%;
        border: none;
        border-bottom: 2px solid #6f6e6e5c;
        outline: none;
        font-weight: 500;
        color: #212529;
        transition: 0.2s;
    }

    .textArea p {
        font-size: 13px;
        font-weight: 500;
    }

    .formSbmtBtn {
        text-align: end;
    }

        .formSbmtBtn input {
            border: none;
            background: #dc3545;
            color: white;
            padding: 13px 23px;
            border-radius: 0.25rem;
            transition: 0.2s;
        }

            .formSbmtBtn input:hover {
                background: #bb2d3b;
            }

    /* css for radio btns start */

    /* contact form right side's css ends */



    /* my modification */

    .contact-form {
        border-radius: .25rem !important;
        margin-top: 25px;
    }

</style>
