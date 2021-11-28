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
                    <li class="nav-item dropdown" >
                        <a class="nav-link nav-color" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Products <i class="fa fa-angle-down"></i>
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                          
                                <li>
                                    <a class="dropdown-item" href="product.html">product 1</a>
                                </li>
                          
                            
                            
                            
                        </ul>
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
    import axios from 'axios'

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
          mounted() {
              this.getNav();
              this.getSubNav();
            //   this.setTestCookie(7,"test2","shaunCookietttt");
            //   this.getCookie("test2");
           },
           methods: {
                getNav() {
                    axios.get('http://127.0.0.1:8000/navigation/menu/').then((response) => {
                     
                        this.menus = response.data;
                    }).catch((error) => {
                        console.log(error)
                    })

               },
                 
               getSubNav() {
                   axios.get('http://127.0.0.1:8000/navigation/drop-menu/').then((response) => {
                       
                       this.subMenus = response.data;
                   }).catch((error) => {
                       console.log(error)
                   })
               },

            //    setTestCookie(exdays,cname,cvalue){
            //         const d = new Date();
            //         d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            //         let expires = "expires="+d.toUTCString();
            //         // document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;HttpOnly="+true;
            //         document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;HttpOnly;samesite=None;Secure=true;";
            //    },
            //    getCookie(cname) {
            //     let name = cname + "=";
            //     let ca = document.cookie.split(';');
            //     for(let i = 0; i < ca.length; i++) {
            //         let c = ca[i];
            //         while (c.charAt(0) == ' ') {
            //         c = c.substring(1);
            //         }
            //         if (c.indexOf(name) == 0) {
            //         // return c.substring(name.length, c.length);
            //         console.log(c.substring(name.length, c.length));
            //         }
            //     }
            //     return "";
            //     },
        }
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
