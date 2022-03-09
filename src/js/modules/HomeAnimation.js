import sr from 'scrollreveal'

export default class HomeAnimation {
  constructor(el) {
    this.el = el

    sr({ viewFactor: 0.5 })

    sr().reveal('.home-featured-solutions__block.-block-1', {
      delay: 200,
      distance: '50px'
    })

    sr().reveal('.home-featured-solutions__block.-block-2', {
      distance: '50px',
      origin: 'top'
    })

    sr().reveal('.home-featured-solutions__block.-block-3', {
      delay: 400,
      distance: '50px',
      origin: 'right'
    })
  }
}
