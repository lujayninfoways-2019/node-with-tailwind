export default class MarketoEmbed {
  constructor(el) {
    // MktoForms2 is defined globally by the Marketo forms script;
    // skip everything if missing
    this.ableToRun = typeof MktoForms2 !== 'undefined'
    if (this.ableToRun) {
      this.el = el
      this.formId = this.el.getAttribute('data-form-id')
      this.loadForm()
    }
  }

  loadForm() {
    MktoForms2.loadForm('//app-sjo.marketo.com', '764-XAC-282', this.formId)
    this.removeLoader()
  }

  removeLoader() {
    const loader = this.el.querySelector('[data-loader]')
    loader.parentNode.removeChild(loader)
  }
}
