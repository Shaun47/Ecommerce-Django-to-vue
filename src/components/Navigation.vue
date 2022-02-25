<template>

    <nav class="navbar navbar-expand-lg fixed-top   ">
        <div class="container">
            <router-link :to="{ name: 'Home'}" class="navbar-brand nav-color" aria-current="page">
                Rag Sale
            </router-link>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0"  >
                    <li class="nav-item">
                        <router-link :to="{ name: 'Home'}" class="nav-link nav-color" aria-current="page">
                            <i class="icon-user fa-fw"></i> Home
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'About'}" class="nav-link nav-color" aria-current="page">
                            <i class="icon-user fa-fw"></i> About Us
                        </router-link>
                    </li>
                    <li class="nav-item " >
                        <router-link :to="{ name: 'Product'}" class="nav-link nav-color" aria-current="page">
                            <i class="icon-user fa-fw"></i> Product
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'Services'}" class="nav-link nav-color" aria-current="page">
                            <i class="icon-user fa-fw"></i> Services
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'Contact'}" class="nav-link nav-color" aria-current="page">
                            <i class="icon-user fa-fw"></i> Contact
                        </router-link>
                    </li>




                </ul>
            </div>
            <a href="#" type="button" class="btn btn-danger">Call Now: 017XXXXXXXX</a>
        </div>
    </nav>
</template>

<script>


    export default {
          name: 'Navigation',
          props: {
            msg: String
          },
          data(){
              return {
                  menus: [],
                  subMenus: [],

              }
          },

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .nav-color {
    color: white;
}
    .nav-color:hover,.nav-color:focus,.nav-color:active {
        color: white;
    }
.navbar {
    font-family: Montserrat-Medium;
}
.nav-item a{
    font-size:12px;
}
.navbar-brand:hover{
    color:white;
}


.navbar-brand {
    padding-top: .3125rem;
    padding-bottom: .3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    text-decoration: none;
    white-space: nowrap;
    font-weight: bolder;
    font-size: 20px;
}


.nav-item a:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position:relative;
    top:7px;
    background: #bb2d3b;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
}

.nav-item a:hover:after {
    width: 100%;
    left: 0;
    
}

    .dropdown-item:focus, .dropdown-item:hover {
    color: #1e2125;
     background-color: transparent; 
}
</style>
