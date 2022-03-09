import Toggle from './Toggle'

export default class Accordion {
  constructor(el) {
    this.el = el

    this.setVariables()
    new Toggle(el, this.createConfig())
  }

  createConfig = () => ({
    onToggle: this.handleToggle
  })

  setVariables() {
    this.heading = this.el.querySelector('[data-accordion-heading]')
    this.arrow = this.el.querySelector('[data-accordion-arrow]')
    this.image = this.el.querySelector('[data-accordion-image]')
  }

  handleToggle = () => {
    this.arrow.classList.toggle('rotate-270')
    this.arrow.classList.toggle('rotate-90')
    this.heading.classList.toggle('text-teal-600')
    this.image.classList.toggle('opacity-50')
  }
}
