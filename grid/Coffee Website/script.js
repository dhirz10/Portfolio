const scrollHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('scroll-header')
        : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// scroll up 

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// scroll reveal Animation

const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay: 400,
    })

sr.reveal(`.home__data, .products__data .steps__content, footer__container`)
sr.reveal(`.home__img`, {origin: 'bottom'} )
sr.reveal(`.product__card`, {interval: 100} )
sr.reveal(`.about__img, .testimonial__img` ,{origin: 'right'} )
sr.reveal(`.about__data, .testimonial__data`, {origin: 'left'} )