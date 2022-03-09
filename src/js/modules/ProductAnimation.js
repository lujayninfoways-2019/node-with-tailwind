import sr from 'scrollreveal'

export default class ProductAnimation {
  constructor(el) {
    this.el = el

    sr({ viewFactor: 0.5 })

    sr().reveal('.how-it-works__heading', {
      distance: '20px'
    })

    sr().reveal('.how-it-works__description', {
      delay: 200,
      distance: '20px'
    })

    sr().reveal('.how-it-works__img', {
      opacity: 1,
      beforeReveal: this.handleBeforeReveal
    })
  }

  handleBeforeReveal = el => {
    el.classList.add('-is-revealed')
  }
}
