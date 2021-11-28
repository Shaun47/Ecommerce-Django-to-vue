<template>
        <!-- Why choose us starts -->

    <div class="container-fluid">
        <div class="row why-choose-us-row">
            <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 offset-lg-1 offset-md-1 offset-sm-1 offset-xs-1 why-choose text-center">
                <h1>Why Choose Us?</h1>
                <div class="row why-choose-row">
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <img src="img/Group 144.png" class="img-fluid" alt="" />
                        <h3>Operate on Integrity &Aacute; Customer Care</h3>
                        <p>
                            packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their
                            infancy..

                        </p>
                        <a href="#">Read More</a>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <img src="img/Group 150.png" class="img-fluid" alt="" />
                        <h3>Top Quality Control</h3>
                        <p class="quality">
                            packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their
                            infancy..
                        </p>
                        <a href="#">Read More</a>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <img src="img/Group 149.png" class="img-fluid" alt="" />
                        <h3>Most Absorbent in the Industry</h3>
                        <p>
                            packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their
                            infancy..
                        </p>
                        <a href="#">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- Why choose us ends -->
</template>

<script>
export default {
  name: 'chooseUs',
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
    
.quality {
    margin-top: 3.111vw;
}

.row.why-choose-us-row {
    background: #e8eaff;
}

.why-choose h1 {
    margin-top: 14.67vh;
    margin-bottom: 13.76vh;
}

.row.why-choose-row {
    margin-bottom: 14.83vh;
}

.why-choose-row h3 {
    margin-top: 4.3vh;
}

.why-choose-row a {
    text-decoration: none;
}

.why-choose-row a:hover {
    color: #bb2d3b;
}

</style>
