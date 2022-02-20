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
  const width = (window.innerWidth > 0) ? window.innerWidth : document.documentElement.clientWidth
  if (width >= '1200') {
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
}

if(window.location.pathname==='/') {
  heroScroll()
}

function magnify (imgID, zoom) {
  let img, glass, w, h, bw;
  img = document.getElementById(imgID);

  /* Create magnifier glass: */
  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");

  /* Insert magnifier glass: */
  img.parentElement.insertBefore(glass, img);

  /* Set background properties for the magnifier glass: */
  glass.style.backgroundImage = "url('" + img.src + "')"
  glass.style.backgroundRepeat = "no-repeat"
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px"
  bw = 3;
  w = glass.offsetWidth / 2
  h = glass.offsetHeight / 2

  /* Execute a function when someone moves the magnifier glass over the image: */
  glass.addEventListener("mousemove", moveMagnifier)
  img.addEventListener("mousemove", moveMagnifier)

  /*and also for touch screens:*/
  glass.addEventListener("touchmove", moveMagnifier)
  img.addEventListener("touchmove", moveMagnifier)
  function moveMagnifier(e) {
    var pos, x, y
    /* Prevent any other actions that may occur when moving over the image */
    e.preventDefault()
    /* Get the cursor's x and y positions: */
    pos = getCursorPos(e)
    x = pos.x
    y = pos.y
    glass.style.display="block"
    console.log(x,y)
    /* Prevent the magnifier glass from being positioned outside the image: */
    if (x > img.width) {
      x = img.width
      glass.style.display="none"
    }
    if (x <= 1) {
      x = 1
      glass.style.display="none"
    }
    if (y > img.height){
      y = img.height
      glass.style.display="none"
    }
    if (y <= 1) {
      y = 1
      glass.style.display="none"
    }
    /* Set the position of the magnifier glass: */
    glass.style.left = (x - w) + "px"
    glass.style.top = (y - h) + "px"
    /* Display what the magnifier glass "sees": */
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px"
  }

  function getCursorPos(e) {
    var a, x = 0, y = 0
    e = e || window.event
    /* Get the x and y positions of the image: */
    a = img.getBoundingClientRect()
    /* Calculate the cursor's x and y coordinates, relative to the image: */
    x = e.pageX - a.left
    y = e.pageY - a.top
    /* Consider any page scrolling: */
    x = x - window.pageXOffset
    y = y - window.pageYOffset
    return {x : x, y : y}
  }
}
