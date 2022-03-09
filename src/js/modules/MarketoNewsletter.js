import MarketoEmbed from './MarketoEmbed'

export default class MarketoNewsletter extends MarketoEmbed {
  constructor(el) {
    super(el)

    if (this.ableToRun) {
      this.el = el

      this.setVars()
      this.whenReady()
    }
  }

  setVars() {
    this.form = this.el.querySelector('form')
    this.successMessage = document.querySelector('[data-marketo-success]')
  }

  whenReady() {
    MktoForms2.whenReady(() => {
      const FormObj = MktoForms2.getForm(this.formId)

      FormObj.onSuccess(() => {
        this.form.classList.add('invisible')
        this.form.classList.add('opacity-0')
        this.successMessage.classList.remove('invisible')
        this.successMessage.classList.remove('opacity-0')

        // GTM Tracking Code
        window.dataLayer = window.dataLayer || []
        dataLayer.push({
          event: 'Email Newsletter Submission'
        })

        return false
      })
    })
  }
}
