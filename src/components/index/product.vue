<template>
    <!-- Our Top Products starts -->

    <div class="container">
        <div class="row text-center top-products-row">
            <h1>Our Top Products</h1>
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <img src="img/product1.png" class="img-fluid" alt="" />
                <h4>Garment Rags</h4>
                <a href="request_sample.html" class="btn order">Order Now</a>
                <a href="product.html" class="btn detail">Details</a>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <img src="img/product2.png" class="img-fluid" alt="" />
                <h4>Garment Rags</h4>
                <a href="request_sample.html" class="btn order">Order Now</a>
                <a href="product.html" class="btn detail">Details</a>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <img src="img/product3.png" class="img-fluid" alt="" />
                <h4>Garment Rags</h4>
                <a href="request_sample.html" class="btn order">Order Now</a>
                <a href="product.html" class="btn detail">Details</a>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <img src="img/product4.png" class="img-fluid" alt="" />
                <h4>Garment Rags</h4>
                <a href="request_sample.html" class="btn order">Order Now</a>
                <a href="product.html" class="btn detail">Details</a>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <img src="img/product5.png" class="img-fluid" alt="" />
                <h4>Garment Rags</h4>
                <a href="request_sample.html" class="btn order">Order Now</a>
                <a href="product.html" class="btn detail">Details</a>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <img src="img/product6.png" class="img-fluid" alt="" />
                <h4>Garment Rags</h4>
                <a href="request_sample.html" class="btn order">Order Now</a>
                <a href="product.html" class="btn detail">Details</a>
            </div>

        </div>
    </div>
    <!-- Our Top Products ends -->
</template>

<script>
export default {
  name: 'product',
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
    .top-products-row h4 {
        margin: 15px 0;
        color: #0B3056;
    }

    .top-products-row .btn {
        margin-bottom: 15vh;
    }

    .top-products-row h1 {
        margin: 18.2vh 0 12.23vh 0;
        font-family: FuturaHeavyBT;
        font-size: 7.34vh;
        color: #0B3056;
    }

    .btn.order {
        background: #0B3056;
        color: white;
        margin-right: 5px;
    }

    .btn.detail {
        border: 1px solid #0B3056;
        width: 8vw;
    }

        .btn.order:hover, .btn.detail:hover {
            background: #bb2d3b;
            border: 1px solid #bb2d3b;
            color: white;
        }

    .top-products-row a.view-products {
        color: #0B3056;
        text-decoration: none;
        font-family: Montserrat-regular;
        width: 20vw;
        border: 1px solid #0B3056;
        margin: 0 auto 10.7vh auto;
        border-radius: .25rem;
        padding: 7px;
    }

        .top-products-row a.view-products:hover {
            border: 1px solid #bb2d3b;
            background: #bb2d3b;
            color: white;
        }
</style>
