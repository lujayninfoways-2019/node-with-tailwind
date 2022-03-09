import MarketoEmbed from './MarketoEmbed'

export default class MarketoContact extends MarketoEmbed {
  constructor(el) {
    super(el)

    if (this.ableToRun) {
      this.el = el
      this.whenReady()
    }
  }

  whenReady() {
    MktoForms2.whenReady(() => {
      const form = document.querySelector('.marketo-form form')
      const fieldsets = [...form.querySelectorAll('fieldset')]
      const customSubmitBtn = document.getElementById('marketo-submit')
      const FormObj = MktoForms2.getForm(this.formId)

      const container = document.createElement('div')
      container.innerHTML = this.template
      form.appendChild(container)
      const fieldsetContainers = [...form.querySelectorAll('[data-fieldset]')]

      fieldsets.forEach((fieldset, i) => {
        fieldset.parentNode.removeChild(fieldset)
        fieldsetContainers[i].appendChild(fieldset)
      })

      customSubmitBtn.addEventListener('click', () => {
        FormObj.submit()
      })

      FormObj.onSuccess(() => {
        window.location = `${window.location.origin}/contact?status=success`
        return false
      })
    })
  }

  template = `
    <div class="sm:flex">
      <div class="sm:w-1/3 mb-48" data-fieldset="1">
        <h2 class="sr-only">
          Contact Form
        </h2>
        <p class="label text-12 mb-32">
          All fields are required
        </p>
      </div>

      <div class="sm:w-2/3 sm:ml-48">
        <h2 class="sr-only">
          I’m interested in...
        </h2>
        <p class="label text-12 mb-32">
          Select at least one
        </p>
        <p class="font-serif text-18 text-purple-700 mb-12" aria-hidden="true">
          I’m interested in...
        </p>

        <div class="xs:flex">
          <div class="xs:w-1/2 mb-32" data-fieldset="2"></div>
          <div class="xs:w-1/2 mb-32" data-fieldset="3"></div>
        </div>
      </div>
    </div>
  `
}
