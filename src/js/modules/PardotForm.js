export default class PardotForm {
  constructor(el) {
    this.el = el

    this.setVars()
    this.bindEvents()
  }

  setVars() {
    this.topics = [...this.el.querySelectorAll('input[name="topics[]"]')]
    this.products = [...this.el.querySelectorAll('input[name="products[]"]')]
    this.hiddenField = this.el.querySelector('input[name="interests"]')
  }

  bindEvents() {
    this.el.addEventListener('submit', this.handleSubmit)
  }

  handleSubmit = e => {
    e.preventDefault()
    this.assembleCheckboxValues()
    this.el.submit()
  }

  assembleCheckboxValues() {
    // Pardot's form handler will not accept checkboxes,
    // so pass the selected checkbox values as a string
    const topics = this.getValues(this.topics)
    const products = this.getValues(this.products)
    let str = ''

    if (topics.length) {
      str = `Topics: ${topics}; `
    }

    if (products.length) {
      str += `Products: ${products};`
    }

    this.hiddenField.value = str
  }

  getValues(checkboxes) {
    const selected = []
    checkboxes.forEach(checkbox => {
      checkbox.checked && selected.push(checkbox.value)
    })
    return selected.join(', ')
  }
}
