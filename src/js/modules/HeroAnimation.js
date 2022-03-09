export default class HeroAnimation {
  constructor(el) {
    this.el = el
    this.setVariables()
    this.bindEvents()
    this.randomizeShapes()
    this.shapeContainer.classList.remove('hidden')
  }

  config = {
    minTop: -25,
    maxTop: 50,
    minLeft: -25,
    maxLeft: 75,
    minSize: 50,
    maxSize: 400,
    minDuration: 40,
    maxDuration: 90,
    maxBlur: 2
  }

  setVariables() {
    this.shapeContainer = this.el.querySelector('.hero-bg-shapes')
    this.shapes = [...this.shapeContainer.querySelectorAll('.hero-bg-shape')]
    this.toggleBtn = document.getElementById('togglebtn')
  }

  bindEvents() {
    this.toggleBtn.addEventListener('click', this.handleToggleClick)
  }

  randomizeShapes() {
    const {
      minTop,
      maxTop,
      minLeft,
      maxLeft,
      minSize,
      maxSize,
      minDuration,
      maxDuration,
      maxBlur
    } = this.config

    this.shapes.forEach((shape, i) => {
      // Position
      shape.style.top = this.minMax(minTop, maxTop) + '%'
      shape.style.left = this.minMax(minLeft, maxLeft) + '%'

      // Size
      const size = this.minMax(minSize, maxSize) + 'px'
      shape.style.width = size
      shape.style.height = size

      // Duration
      shape.style.animationDuration =
        this.minMax(minDuration, maxDuration) + 's'

      // Direction
      shape.style.animationDirection = i % 2 ? 'reverse' : 'normal'

      // Blur
      const filter = `blur(${this.minMax(0, maxBlur)}px)`
      shape.style.filter = filter
    })
  }

  handleToggleClick = () => {
    this.shapes.forEach(shape => {
      if (shape.style.animationPlayState === 'paused') {
        shape.style.animationPlayState = 'running'
        this.toggleBtn.innerHTML = 'Stop Animation'
      } else {
        shape.style.animationPlayState = 'paused'
        this.toggleBtn.innerHTML = 'Resume Animation'
      }
    })
  }

  minMax(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }
}
