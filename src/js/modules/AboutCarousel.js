import Carousel from './Carousel'
import { mqTy, mqXs, mqSm, mqMd, mqLg } from './utils/mq'

export default class AboutCarousel extends Carousel {
  constructor(el) {
    super(el)
    this.setMoreVars()
    this.handleMqChange()

    // Redistribute items across slides at any breakpoint
    const mqs = [mqTy, mqXs, mqSm, mqMd, mqLg]
    mqs.forEach(mq => mq.addListener(this.handleMqChange))
  }

  itemSelector = '.about-carousel-item'

  setMoreVars() {
    this.items = [...this.el.querySelectorAll(this.itemSelector)].map(node =>
      node.cloneNode(true)
    )
  }

  determineItemsPerSlide() {
    const item = this.el.querySelector(this.itemSelector)
    return parseInt(getComputedStyle(item, '::after').content.slice(1, -1), 10)
  }

  handleMqChange = () => {
    const itemsPerSlide = this.determineItemsPerSlide()

    // Remove all slides
    this.slider.innerHTML = ''

    // Redistribute all items
    let numOfSlides = 0
    for (let i = 0; i < this.items.length; i += itemsPerSlide) {
      const slide = document.createElement('div')
      slide.classList.add('carousel-slide')
      const itemGroup = this.items.slice(i, i + itemsPerSlide)
      itemGroup.forEach(item => slide.appendChild(item.cloneNode(true)))
      this.slider.appendChild(slide)
      numOfSlides++
    }

    // Reset the slider
    this.handleArrows(numOfSlides)
    this.resetSlider()
    this.el.classList.remove('opacity-0')
  }

  handleArrows(numOfSlides) {
    const method = numOfSlides === 1 ? 'add' : 'remove'
    this.arrows.forEach(arrow => arrow.classList[method]('hide'))
  }

  resetSlider = () => {
    // Wipe-away tabbing changes; setting that up again below
    this.slides.forEach((_, idx) => this.enableTabbing(idx))

    // Recreate variables
    this.setVars()
    this.setupTabMaps()
    this.populateIndicators()

    // Reset slider to 0
    this.currentSlide = 0
    this.indicators.forEach(indicator =>
      indicator.classList.remove(this.activeClass)
    )
    this.slideTo(this.currentSlide)
  }
}
