import Modal from 'micromodal'
import axios from 'axios'
import bean from 'bean'

export default class MemberModal {
  constructor(el) {
    this.el = el

    this.setVars()
    this.bindEvents()
  }

  modalId = 'member-modal'
  showTriggerSelector = '[data-modal-show]'
  closeTriggerSelector = '[data-modal-close]'
  axiosConfig = {
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/html'
    }
  }

  setVars() {
    this.modalContainer = document.querySelector('.modal__container')
    this.modalLoader = this.modalContainer.innerHTML
    this.closeTriggers = [...document.querySelectorAll('[data-modal-close]')]
  }

  bindEvents() {
    // Delegating events for the trigger as they are dynamically removed/added
    // to the DOM by AboutCarousel.js
    bean.on(this.el, 'click', this.showTriggerSelector, this.handleShow)

    this.closeTriggers.forEach(trigger => {
      trigger.addEventListener('click', this.handleClose)
    })
  }

  handleShow = e => {
    const id = e.currentTarget.getAttribute('data-member-id')
    this.resetBio()
    Modal.show(this.modalId, {
      awaitCloseAnimation: true,
      disableScroll: true
    })
    this.getBio(id)
  }

  handleClose = () => {
    Modal.close(this.modalId)
  }

  getBio = id => {
    axios
      .get(`/people/${id}`, this.axiosConfig)
      .then(({ data }) => {
        this.loadBio(data)
      })
      .catch(error => {
        this.loadError()
      })
  }

  loadBio = data => {
    this.modalContainer.innerHTML = data
  }

  resetBio = () => {
    this.modalContainer.innerHTML = this.modalLoader
  }

  loadError = () => {
    this.modalContainer.innerHTML = `
      <div class="text-center text-warm-200 text-18">
        Something went wrong. Please Try Again.
      </div>
    `
  }
}
