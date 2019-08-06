// 新建DIV包裹TABLE
blog.addLoadEvent(function() {
  // 文章页生效
  if (document.getElementsByClassName('page-post').length == 0) {
    return
  }
  var tables = document.getElementsByTagName('table')
  for (var i = 0; i < tables.length; i++) {
    var table = tables[i]
    var elem = document.createElement('div')
    elem.setAttribute('class', 'table-container')
    table.parentNode.insertBefore(elem, table)
    elem.appendChild(table)
  }
})

// 菜单
// 回到顶部
blog.addLoadEvent(function() {
  var upDom = document.getElementById('moveUp')
  var bottom = parseInt(window.getComputedStyle(upDom).bottom)
  // 隐藏
  upDom.style.bottom = -2 * bottom + 'px'

  function getScrollTop() {
    if (document.documentElement && document.documentElement.scrollTop) {
      return document.documentElement.scrollTop
    } else if (document.body) {
      return document.body.scrollTop
    }
  }

  blog.addEvent(window, 'scroll', function() {
    // 菜单
    document.querySelector('#menu-checkbox').checked = false
    upDom.style.display = 'block'
    // 回到顶部
    if (getScrollTop() > 200) {
      upDom.style.bottom = bottom + 'px'
    } else {
      upDom.style.bottom = -2 * bottom + 'px'
    }
  })

  blog.addEvent(upDom, 'click', function() {
    if (document.documentElement && document.documentElement.scrollTop) {
      document.documentElement.scrollTop = 0
    } else if (document.body) {
      document.body.scrollTop = 0
    }
  })
})
