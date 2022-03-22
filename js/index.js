let numberMatches = 0
let tabInd = -1
let matchesMarkup = ''

const isFlag = (el) =>
  el.classList.contains('box-33') ||
  el.classList.contains('box-35') ||
  el.classList.contains('box-47')

const isDefaultMatches = (el) =>
  el.classList.contains('box-48') ||
  el.classList.contains('box-49') ||
  el.classList.contains('box-50') ||
  el.classList.contains('box-51') ||
  el.classList.contains('box-62') ||
  el.classList.contains('box-63') ||
  el.classList.contains('box-64') ||
  el.classList.contains('box-65')

const nodeSpan = '<span class="handle-move"></span>'

const cellMarkup = (idx, spanLeft, spanTop) => `
  <div class="cell-matches">
        <a class="bx bx-1 box-${idx}">${spanLeft}</a>
        <a class="bx bx-2 box-${idx + 1}">${spanTop}</a>    
  </div>`

const makeMatchesMarkup = () => {
  for (let i = 1; i < 50; i++) {
    tabInd += 2
    switch (i) {
      case 24:
      case 31:
        matchesMarkup += cellMarkup(tabInd, '', nodeSpan)
        break

      case 25:
      case 32:
        matchesMarkup += cellMarkup(tabInd, nodeSpan, nodeSpan)
        break

      case 26:
      case 33:
        matchesMarkup += cellMarkup(tabInd, nodeSpan, '')
        break

      default:
        matchesMarkup += cellMarkup(tabInd, '', '')
        break
    }
  }
}

makeMatchesMarkup()

const blockMatches = document.querySelector('.block-matches')
blockMatches.insertAdjacentHTML('afterbegin', matchesMarkup)

const countMatches = document.querySelector('.count-matches')

blockMatches.addEventListener('click', toggleMatch)

function toggleMatch(event) {
  // event.preventDefault()

  const el = event.target
  if (el.nodeName != 'A' && el.nodeName != 'SPAN') return

  if (numberMatches > 3) {
    alert('Вы исчерпали попытки. Обновите страницу и попробуйте заново')
    return
  }

  if (el.nodeName === 'SPAN') {
    el.remove()
    numberMatches += 1
    countMatches.textContent = `${numberMatches}`
    return
  }

  const countSpans = document.querySelectorAll('.handle-move').length
  if (countSpans > 7) return

  if (el.nodeName === 'A') {
    el.insertAdjacentHTML('afterbegin', nodeSpan)

    if (isFlag(el)) el.classList.toggle('flag')

    if (isDefaultMatches(el)) {
      numberMatches -= 1
      countMatches.textContent = `${numberMatches}`
    }
  }

  if (document.querySelectorAll('.flag').length === 3)
    alert('Поздравляю! Вы выиграли')
}
