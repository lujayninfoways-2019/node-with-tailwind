import Slide from './utils/slide'
import { mqSm } from './utils/mq'

export default class FeaturedQuotes {
  constructor(el) {
    this.el = el

    this.setVariables()
    this.designateTallestPanel()
    this.bindEvents()
  }

  activeTab = 0
  activeClass = '-is-active'
  changingTimeout = null
  changingClass = '-is-changing'
  changingDuration = '600' // ms
  collapsedClass = 'smd:collapsed'

  setVariables() {
    this.tabEls = [...this.el.querySelectorAll('.featured-quotes__tab')]
    this.tabElSlides = this.tabEls.map(el => new Slide(el, this.collapsedClass))
    this.tabPanels = [
      ...this.el.querySelectorAll('.featured-quotes__tab-panel')
    ]
    this.tabPanelsContainer = this.el.querySelector(
      '.featured-quotes__tab-panels'
    )
    this.mobileToggle = this.el.querySelector('[data-toggler]')
  }

  bindEvents() {
    this.tabEls.map((tab, idx) => {
      tab.addEventListener('click', () => this.handleTabClick(idx))
    })

    this.mobileToggle.addEventListener('click', this.handleMobileToggle)
  }

  handleTabClick(idx) {
    if (this.activeTab !== idx) {
      const oldTab = this.tabEls[this.activeTab]
      const oldPanel = this.tabPanels[this.activeTab]
      const newTab = this.tabEls[idx]
      const newPanel = this.tabPanels[idx]

      oldTab.classList.remove(this.activeClass)
      oldPanel.classList.remove(this.activeClass)
      newTab.classList.add(this.activeClass)
      newPanel.classList.add(this.activeClass)

      this.animateChange()
      this.activeTab = idx
      this.handleMobileToggle()
    }
  }

  animateChange() {
    clearTimeout(this.changingTimeout)
    this.tabPanelsContainer.classList.add(this.changingClass)
    this.changingTimeout = setTimeout(() => {
      this.tabPanelsContainer.classList.remove(this.changingClass)
    }, this.changingDuration)
  }

  designateTallestPanel() {
    const heights = this.tabPanels.map(panel => panel.offsetHeight)
    const tallest = heights.indexOf(Math.max(...heights))
    this.tabPanels[tallest].classList.add('static')
  }

  handleMobileToggle = () => {
    if (mqSm.matches) {
      // Keep desktop version synced
      this.tabEls.forEach((tab, idx) => {
        const method = idx !== this.activeTab ? 'add' : 'remove'
        tab.classList[method](this.collapsedClass)
      })
    } else {
      this.mobileToggle.classList.toggle('rotate-90')
      this.mobileToggle.classList.toggle('rotate-270')

      this.tabElSlides.forEach((slide, idx) => {
        idx !== this.activeTab && slide.toggle()
      })
    }
  }
}
