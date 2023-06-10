/*menu mobile*/
function initMenuMobile() {
    const $navbar = document.querySelector('.nav-bar .nav-list')
    const $toggle = document.querySelector('.toggle')
    const $icons = document.querySelector('.fa-bars')
    $toggle.addEventListener('click', () => {
        if ($icons.classList.contains('fa-bars')) {
            $icons.classList.replace('fa-bars','fa-times')
        } else {
            $icons.classList.replace('fa-times', 'fa-bars')
        }
        $navbar.classList.toggle('active')
    })
}
initMenuMobile()
/*show slider*/

function initSlider() {
    const $slides = document.querySelectorAll('.slide')
    const nextBtn = document.getElementById('next-btn')
    const leftBtn = document.getElementById('left-btn')
    
    let currentSlide = 0
    
    function hideSlide() {
        $slides.forEach(item => item.classList.remove('on'))
    }

    function showSlide() {
        $slides[currentSlide].classList.add('on')
    }

    function nextSlides() {
        hideSlide()
        if (currentSlide === $slides.length - 1) {
            currentSlide=0
        } else {
            currentSlide++
        }
        showSlide()
    }

    function prevSlides() {
        hideSlide()
        if (currentSlide === 0) {
            currentSlide = $slides.length - 1
        } else {
            currentSlide--
        }
        showSlide()
    }

    function autoPlay() {
        setInterval(() => {
            hideSlide()
            if (currentSlide === $slides.length - 1) {
                currentSlide = 0
            } else {
                currentSlide++
            }
            showSlide()
        },4500)
    }

    nextBtn.addEventListener('click', nextSlides)
    leftBtn.addEventListener('click', prevSlides)
    autoPlay()
}

initSlider()