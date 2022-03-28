
window.addEventListener('load', function () {
  const script = document.createElement('script')
  script.src = 'https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js'
  const head = document.getElementsByTagName('head')[0]
  head.appendChild(script)
})

function navbarCollapse() {
  const navbar = document.getElementById('navbar')
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

window.addEventListener('load', () =>{
  if (window.innerWidth < 1200) {
    const first = document.getElementById('animate-first')
    const second = document.getElementById('animate-second')
    const third = document.getElementById('animate-third')
    function deconstruct () {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              first.classList.add('animate-first')
              second.classList.add('animate-second')
              third.classList.add('animate-third')
            }, 1)
          }
          first.classList.remove('animate-first')
          second.classList.remove('animate-second')
          third.classList.remove('animate-third')
        })
      })
      observer.observe(document.querySelector('.see_how-layers'))
    }
    deconstruct()
  }
})
