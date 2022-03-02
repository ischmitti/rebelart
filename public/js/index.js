
function masonry () {
  window.addEventListener('load', function () {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js'
    const head = document.getElementsByTagName('head')[0]
    head.appendChild(script)
  })
}


function navbarCollapse() {
  const navbar = document.getElementById('navbar')
  const navbarNav = document.getElementById('navbar-nav')
  const toggleBtn = document.getElementById('toggle-btn')
  if (toggleBtn.classList.contains('collapsed')) {
    setTimeout(() => {
      navbar.style.backgroundColor = 'rgba(0,0,0,0)'
      document.body.style.overflow = 'visible'
    }, 340)
  } else {
    navbar.style.backgroundColor = '#005E5D'
    document.body.style.overflow = 'hidden'
  }
}


function animateArt() {
  const first = document.getElementById('first-layer')
  const second = document.getElementById('second-layer')
  const third = document.getElementById('third-layer')
  const firstHeroImage = document.getElementById('first-hero-image')
  const thirdHeroImage = document.getElementById('third-hero-image')
  document.getElementById('hero-button').addEventListener('click', () => {
    if (first.classList.contains('animate-first')) {
      first.classList.remove('animate-first')
      second.classList.remove('animate-second')
      third.classList.remove('animate-third')
      firstHeroImage.classList.remove('hide')
      thirdHeroImage.classList.remove('hide')
      firstHeroImage.classList.add('visible')
      thirdHeroImage.classList.add('visible')
    } else {
      firstHeroImage.classList.remove('visible')
      thirdHeroImage.classList.remove('visible')
      firstHeroImage.classList.add('hide')
      thirdHeroImage.classList.add('hide')
      first.classList.add('animate-first')
      second.classList.add('animate-second')
      third.classList.add('animate-third')
    }
  })
}

animateArt()
masonry()
window.addEventListener('load', () => {
})
