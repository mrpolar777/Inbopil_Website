document.addEventListener('DOMContentLoaded', function () {
    const btnMenu = document.getElementById('btn__menu')
    const mobileMenu = document.getElementById('mobile')
    const closeMenu = document.getElementById('close__menu')

    btnMenu.addEventListener('click', function () {
      mobileMenu.classList.toggle('active')
    })

    closeMenu.addEventListener('click', function () {
      mobileMenu.classList.remove('active')
    })
})