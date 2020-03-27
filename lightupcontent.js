// the current telegram web chat query selector
let htmlbody = document.querySelector(
  'body > div.page_wrap > div.im_page_wrap.clearfix > div > div.im_history_col_wrap.noselect.im_history_loaded'
)

//walk(htmlbody)

setTimeout(walk(htmlbody), 1000)
console.log('Ready to walk the nodes')

function walk(node) {
  // I stole this function from here:
  // http://is.gd/mwZp7E

  if (!node) {
    return
  }
  let child, next

  let tagName = node?.tagName ? node.tagName.toLowerCase() : ''
  // skip input areas
  if (tagName == 'input' || tagName == 'textarea') {
    return
  }
  // if it is a message in telegram web
  if (node.classList && node.classList.contains('im_message_body')) {
    console.log('Found a message')
  }

  switch (node.nodeType) {
    case 1: // Element
    case 9: // Document
    case 11: // Document fragment
      child = node.firstChild
      while (child) {
        next = child.nextSibling
        walk(child)
        child = next
      }
      break
    case 2: // attribute node
      break
    case 3: // Text node
      handleText(node)
      break
  }
}

function handleText(textNode) {
  var v = textNode.nodeValue

  v = v.replace(/\bDick Tator\b/g, 'Dictator')
  v = v.replace(/\bThe cloud\b/g, 'My butt')
  v = v.replace(/\bthe Cloud\b/g, 'my Butt')
  v = v.replace(/\bthe cloud\b/g, 'my butt')

  textNode.nodeValue = v
}

function hidenode(attNode) {
  // let att=attNode.attributes
  // foreach(var class in att){
  // }
}
