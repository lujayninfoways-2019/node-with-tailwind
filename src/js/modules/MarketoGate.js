import MarketoEmbed from './MarketoEmbed'

export default class MarketoGate extends MarketoEmbed {
  constructor(el) {
    super(el)

    if (this.ableToRun) {
      this.el = el

      this.setVars()
      this.whenReady()
    }
  }

  setVars() {
    this.gatedUrl = this.el.getAttribute('data-gated-url')
  }

  whenReady() {
    MktoForms2.whenReady(() => {
      const customSubmitBtn = document.getElementById('marketo-submit')
      const FormObj = MktoForms2.getForm(this.formId)

      customSubmitBtn.addEventListener('click', () => {
        FormObj.submit()
      })

      FormObj.onSuccess(() => {
        window.location = this.gatedUrl
        return false
      })
    })
  }
}
