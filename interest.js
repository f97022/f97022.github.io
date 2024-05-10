const tab = document.querySelector('#tab')
const content = document.querySelector('#content')

// 取得導覽列的位移位置
const sticky = tab.offsetTop
//當頁面捲動時 如果超過導覽列的位置則會給予sticky樣式 否則移除sticky樣式
window.onscroll = function stickyNav() {
  if (window.scrollY >= sticky) {
    tab.classList.add('sticky')
  } else {
    tab.classList.remove('sticky')
  }
}

tab.addEventListener('click', function switchContent(event) {
  //取得class有active的元素
  const activeItem = document.querySelector('#tab .active')
  //class沒有active的元素 給予active且顯示該頁籤內容 並把其他class帶有active的元素 移除active
  if (!event.target.matches('.active')) {
    if (event.target.matches('.self-info')) {
      event.target.classList.add('active')
      activeItem.classList.remove('active')
      displaySelfInfo()
    } else if (event.target.matches('.project')) {
      event.target.classList.add('active')
      activeItem.classList.remove('active')
      displayProject()
    }
  }
})
