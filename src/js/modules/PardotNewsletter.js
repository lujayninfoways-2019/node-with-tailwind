export default class PardotNewsletter {
  constructor(el) {
    this.el = el

    this.el.addEventListener('submit', this.handleSubmit)
  }

  handleSubmit = e => {
    e.preventDefault()

    // GTM Tracking Code
    window.dataLayer = window.dataLayer || []
    dataLayer.push({
      event: 'Email Newsletter Submission'
    })

    this.el.submit()
  }
}
