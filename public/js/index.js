function masonry () {
  window.addEventListener('load', function () {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js'
    const head = document.getElementsByTagName('head')[0]
    head.appendChild(script)
  })
}

masonry()



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
