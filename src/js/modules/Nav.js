export default class Nav {
  constructor(el) {
    this.el = el

    this.setVars()
    this.createBgExit()
    this.bindEvents()
  }

  currentSubnav = null
  activeClass = '-is-active'
  subnavActiveClass = '-sub-nav-is-active'

  setVars() {
    this.subnavTriggers = [
      ...this.el.querySelectorAll('[data-sub-nav-trigger]')
    ]
    this.subnavs = this.subnavTriggers.map(trigger => ({
      trigger: trigger,
      panel: this.el.querySelector(`#${trigger.getAttribute('aria-controls')}`)
    }))
    this.mobileTrigger = this.el.querySelector('.main-nav__mobile-trigger')
  }

  createBgExit() {
    // This is used to easily track clicks outside the subnav to close it
    this.bg = document.createElement('div')
    this.bg.classList.add('sub-nav__bg-exit')
    this.el.appendChild(this.bg)
  }

  bindEvents() {
    this.subnavs.forEach(subnav => {
      subnav.trigger.addEventListener('click', () =>
        this.handleSubnavClick(subnav)
      )
    })

    this.bg.addEventListener('click', this.handleBgClick)
    this.mobileTrigger.addEventListener('click', this.handleMobileTriggerClick)
  }

  handleSubnavClick(subnav) {
    // Save subnav for later logic
    const currentSubnav = this.currentSubnav

    // Hide current subnav, if exists
    this.currentSubnav && this.hideSubnav(this.currentSubnav)

    // Show new subnav,if new
    if (subnav !== currentSubnav) {
      this.showSubnav(subnav)
    }
  }

  hideSubnav({ trigger, panel }) {
    trigger.setAttribute('aria-expanded', 'false')
    panel.classList.remove(this.activeClass)
    this.currentSubnav = null

    // Remove some styling
    this.el.classList.remove(this.subnavActiveClass)
  }

  showSubnav(subnav) {
    const { trigger, panel } = subnav
    trigger.setAttribute('aria-expanded', 'true')
    panel.classList.add(this.activeClass)
    this.currentSubnav = subnav

    // Apply some styling
    this.el.classList.add(this.subnavActiveClass)
  }

  handleBgClick = () => {
    this.currentSubnav && this.hideSubnav(this.currentSubnav)
    this.el.classList.remove(this.activeClass)
  }

  handleMobileTriggerClick = () => {
    this.el.classList.toggle(this.activeClass)
  }
}
