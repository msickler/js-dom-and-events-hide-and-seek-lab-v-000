function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  return document.querySelectorAll(".ranked-list li").forEach((li) => {
    li.innerHTML = parseInt(li.innerHTML) + n
  })
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]
  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }
  return node
}
