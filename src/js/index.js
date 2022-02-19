function masonry () {
  window.addEventListener('load', function () {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js'
    const head = document.getElementsByTagName('head')[0]
    head.appendChild(script)
  })
}

masonry()

function heroScroll () {
  const hero = document.getElementById('hero')
  document.addEventListener('scroll', () => {
    if (hero.clientHeight === window.innerHeight & scrollY >= 1) {
      if (hero.classList.contains('fadin')) {
        hero.classList.remove('fadin')
      }
      hero.classList.add('scrollDown')
    } else if (hero.clientHeight === 0 & scrollY === 0) {
      hero.classList.add('fadin')
      hero.classList.remove('scrollDown')
    }
  })
}

heroScroll()
