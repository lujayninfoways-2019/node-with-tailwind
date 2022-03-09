import Modal from 'micromodal'

export default class VideoModal {
  constructor(el) {
    this.el = el

    this.setVars()
    this.bindEvents()
  }

  modalId = 'video-modal'

  setVars() {
    this.playBtn = this.el.querySelector('[data-iframe-src]')
    this.videoSrc = this.playBtn.getAttribute('data-iframe-src')
    this.modal = document.getElementById(this.modalId)
    this.video = this.modal.querySelector('iframe')
    this.closeTriggers = [...this.modal.querySelectorAll('[data-modal-close]')]
  }

  bindEvents() {
    this.playBtn.addEventListener('click', this.handleOpen)
    this.closeTriggers.forEach(trigger => {
      trigger.addEventListener('click', this.handleClose)
    })
  }

  handleOpen = e => {
    e.preventDefault()
    Modal.show(this.modalId, { awaitCloseAnimation: true })
    this.video.setAttribute('src', this.videoSrc)
  }

  handleClose = () => {
    Modal.close(this.modalId)
    this.video.setAttribute('src', '')
  }
}
