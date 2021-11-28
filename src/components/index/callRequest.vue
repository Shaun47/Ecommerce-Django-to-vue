<template>
    <!-- Wanna request a call starts -->
    <div class="container-fluid">
        <div class="row form">
            <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 offset-lg-1 offset-md-1 offset-sm-1 offset-xs-1 ">
                <div class="row  ">
                    <div class="col-lg-5 col-md-5 col-sm-5 request-box ">
                        <div class="call-sec">
                            <i class="fa fa-phone" aria-hidden="true"></i>
                            <h1>Wanna Request a Call?</h1>
                        </div>
                    </div>
                    <div class="col-lg-7 col-md-7 col-sm-7 form-box">
                        <form class="row g-3 move-form">
                            <div class="col-md-6">
                                <input type="text" class="form-control" id="firstName" placeholder="John">
                            </div>
                            <div class="col-md-6">
                                <input type="text" class="form-control" id="lastName" placeholder="Doe">
                            </div>
                            <div class="col-12">
                                <input type="text" class="form-control" id="phone" placeholder="+8801XXXXXXXXXXX">
                            </div>
                            <div class="col-12">
                                <input type="email" class="form-control" id="email" placeholder="johndoe@gmail.com">
                            </div>
                            <div class="col-12">
                                <textarea class="form-control" id="message" rows="3" placeholder="Leave your message.."></textarea>
                            </div>
                            <div class="col-12 d-grid gap-2">
                                <button type="submit" class="btn btn-primary">
                                    Request <i class="fa fa-paper-plane" aria-hidden="true"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <!-- Wanna request a call ends -->
</template>

<script>
export default {
  name: 'callRequest',
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
    .request-box .call-sec {
        font-family: FuturaHeavyBT;
        text-align: center;
        margin: 30% auto;
    }

    .fa.fa-phone {
        font-size: 9vw;
    }

    .form {
        background: #e8eaff;
        padding: 8.56vh 0px;
    }

    .request-box {
        background: #4a4ec7;
        color: white;
        height: 80vh;
    }

    .form-box {
        background: white;
    }

    .row.g-3.move-form {
        margin-top: 14vh;
    }

    #firstName {
        border: none;
        border-bottom: 1px solid gray;
    }

    #lastName {
        border: none;
        border-bottom: 1px solid gray;
    }

    #email {
        border: none;
        border-bottom: 1px solid gray;
    }

    #phone {
        border: none;
        border-bottom: 1px solid gray;
    }

    #message {
        border: none;
        border-bottom: 1px solid gray;
    }

    .form-control:focus {
        color: #212529;
        background-color: #fff;
        border-color: #86b7fe;
        border-bottom: 1px solid #bb2d3b !important;
        box-shadow: none;
        border-bottom: #bb2d3b;
    }

    .form-control {
        display: block;
        width: 100%;
        padding: .375rem .75rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border-radius: 0px;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }
</style>
