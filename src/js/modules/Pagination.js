import axios from 'axios'

class Pagination {
  constructor(el) {
    this.el = el

    this.setVariables()
  }

  setVariables() {
    this.nextButton = this.el.querySelector('button')
    this.nextPageUrl = this.nextButton.getAttribute('data-href')
    this.resultsSelector = '.resources-results'
    this.resultsContainer = document.querySelector(this.resultsSelector)

    if (this.nextPageUrl) this.initiallyEnableButton()
  }

  initiallyEnableButton() {
    this.el.classList.remove('hidden')
    this.nextButton.addEventListener('click', this.handleLoadMore)
    this.prepareButton()
  }

  prepareButton() {
    this.nextPageUrl ? this.enableButton() : this.removeButton()
  }

  enableButton() {
    this.nextButton.classList.remove('opacity-25')
    this.nextButton.removeAttribute('disabled')
    this.nextButton.textContent = 'Load more'
  }

  disableButton() {
    this.nextButton.classList.add('opacity-25')
    this.nextButton.setAttribute('disabled', 'disabled')
    this.nextButton.textContent = 'Loading'
  }

  removeButton() {
    this.el.removeChild(this.nextButton)
  }

  handleLoadMore = () => {
    this.disableButton()

    axios
      .get(this.nextPageUrl)
      .then(({ data }) => {
        this.appendResults(data)
      })
      .catch(error => {
        window.location = this.nextPageUrl
      })
      .then(() => {
        this.prepareButton()
      })
  }

  appendResults = body => {
    const tempBody = document.createElement('div')
    tempBody.innerHTML = body
    const moreResults = tempBody.querySelector(this.resultsSelector)
    const nextButton = tempBody.querySelector('#resources-more-results button')
    this.nextPageUrl = nextButton.getAttribute('data-href')

    this.resultsContainer.innerHTML =
      this.resultsContainer.innerHTML + moreResults.innerHTML
  }
}

export default Pagination
