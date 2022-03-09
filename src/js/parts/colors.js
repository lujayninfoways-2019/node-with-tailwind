import tailwind from '../../../tailwind'

export default class Colors {
  constructor(el) {
    this.el = el
    this.createPalette()
  }

  createPalette() {
    const { colors } = tailwind

    Object.keys(colors).forEach(color => {
      const block = document.createElement('div')
      block.style.backgroundColor = colors[color]
      block.classList.add('inline-block', 'mr-32', 'mb-32', 'relative')
      block.style.height = '120px'
      block.style.width = '120px'

      if (color === 'transparent')
        block.classList.add('border', 'border-earth-300')

      const label = document.createElement('div')
      label.classList.add(
        'absolute',
        'pin-b',
        '-mb-16',
        'text-center',
        'text-13',
        'w-full',
        'font-sans',
        'text-earth-500'
      )
      label.innerText = color

      block.appendChild(label)
      this.el.appendChild(block)
    })
  }
}
