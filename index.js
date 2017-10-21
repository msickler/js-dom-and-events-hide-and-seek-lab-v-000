function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  elements = document.querySelectorAll('.ranked-list li').forEach((li) => {
    li.innerHTML = parseInt(li.innerHTML) + n
  })  
}
