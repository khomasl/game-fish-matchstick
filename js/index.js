const matchItems = [
  {
    left: 0,
    top: 0,
  },
  {
    left: 0,
    top: 0,
  },
  {
    left: 0,
    top: 0,
  },
  {
    left: 0,
    top: 0,
  },
  {
    left: 0,
    top: 0,
  },
  {
    left: 0,
    top: 0,
  },
  {
    left: 0,
    top: 0,
  },
  //8
  {
    left: 0,
    top: 0,
  },
  {
    left: 0,
    top: 0,
  },
  {
    left: 0,
    top: 0,
  },
  {
    left: 0,
    top: 0,
  },
  {
    left: 0,
    top: 0,
  },
  {
    left: 0,
    top: 0,
  },
  {
    left: 0,
    top: 0,
  },
  //15
  {
    left: 0,
    top: 0,
  },
  {
    left: 0,
    top: 0,
  },
  {
    left: 0,
    top: 0,
  },
  {
    left: 0,
    top: 0,
  },
  {
    left: 0,
    top: 0,
  },
  {
    left: 0,
    top: 0,
  },
  {
    left: 0,
    top: 0,
  },
  //22
  {
    left: 0,
    top: 0,
  },
  {
    left: 0,
    top: 0,
  },
  {
    left: 0,
    top: 1,
  },
  {
    left: 1,
    top: 1,
  },
  {
    left: 1,
    top: 0,
  },
  {
    left: 0,
    top: 0,
  },
  {
    left: 0,
    top: 0,
  },
  //29
  {
    left: 0,
    top: 0,
  },
  {
    left: 0,
    top: 0,
  },
  {
    left: 0,
    top: 1,
  },
  {
    left: 1,
    top: 1,
  },
  {
    left: 1,
    top: 0,
  },
  {
    left: 0,
    top: 0,
  },
  //36
  {
    left: 0,
    top: 0,
  },
  {
    left: 0,
    top: 0,
  },
  {
    left: 0,
    top: 0,
  },
  {
    left: 0,
    top: 0,
  },
  {
    left: 0,
    top: 0,
  },
  {
    left: 0,
    top: 0,
  },
  {
    left: 0,
    top: 0,
  },
  {
    left: 0,
    top: 0,
  },
  //43
  {
    left: 0,
    top: 0,
  },
  {
    left: 0,
    top: 0,
  },
  {
    left: 0,
    top: 0,
  },
  {
    left: 0,
    top: 0,
  },
  {
    left: 0,
    top: 0,
  },
  {
    left: 0,
    top: 0,
  },
  {
    left: 0,
    top: 0,
  },
]

let tabInd = -1
const nodeSpan = '<span class="handle-move"></span>'

const blockMatches = document.querySelector('.block-matches')

const makeMatchItemsMarkup = ({ left, top }) => {
  tabInd = tabInd + 2
  const spanLeft = left === 1 ? nodeSpan : ''
  const spanTop = top === 1 ? nodeSpan : ''

  return `
  <div class="cell-matches">
        <a class="bx bx-1 box-${tabInd}" data-yes="${left}">${spanLeft}</a>
        <a class="bx bx-2 box-${
          tabInd + 1
        }" data-yes="${top}">${spanTop}</a>    
  </div>`
}

const strWithMatchItemsMarkup = matchItems.map(makeMatchItemsMarkup).join('')
blockMatches.insertAdjacentHTML('afterbegin', strWithMatchItemsMarkup)

document.querySelector('.box-33').setAttribute('data-yes', '1')
document.querySelector('.box-35').setAttribute('data-yes', '1')
document.querySelector('.box-47').setAttribute('data-yes', '1')

blockMatches.addEventListener('click', toggleMatch)

function toggleMatch(event) {
  if (event.target.nodeName != 'A' && event.target.nodeName != 'SPAN') return

  if (event.target.nodeName === 'SPAN') {
    event.target.remove()
    return
  }

  const countSpans = document.querySelectorAll('span').length
  if (countSpans > 7) return

  if (event.target.nodeName === 'A') {
    const valueYes = event.target.dataset.yes

    if (valueYes === '1') {
      event.target.insertAdjacentHTML('afterbegin', nodeSpan)
    }
  }
}
