const anchorPosition = document.querySelector('#role').getBoundingClientRect().top;

window.addEventListener('scroll', function() {
    var scroll = document.querySelector('.anchor-nav');
    scroll.classList.toggle("active", window.scrollY > anchorPosition)
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        })
    })
})