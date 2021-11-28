function navbar() {
   

    window.addEventListener('scroll', function () {
        var nav = document.querySelector('nav');
        if (window.pageYOffset > 100) {
            nav.classList.add('bg-dark');
        } else {
            nav.classList.remove('bg-dark');
        }
    })

}

navbar();