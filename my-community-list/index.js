const BASE_URL = "https://user-list.alphacamp.io"
const INDEX_URL = BASE_URL + "/api/v1/users/"
//使用者列表
const userList = []
//搜尋清單
let filteredUser = []
//收藏清單
const favoriteList = JSON.parse(localStorage.getItem('favoriteUser')) || []

const userCardContainer = document.querySelector("#user-container")
const searchForm = document.querySelector('#search-form')
const searchInput = document.querySelector('#search-input')

//使用者列表每頁顯示卡片數量
const USER_PER_PAGE = 25

const paginator = document.querySelector('#paginator')

//Api 資料取得
axios
  .get(INDEX_URL)
  .then((response) => {
    // console.log(response.data.results)
    userList.push(...response.data.results)
    renderPaginator(userList.length)
    renderUserList(getUsersByPage(1))
  })
  .catch((err) => console.log(err))

//按鈕事件 監聽
userCardContainer.addEventListener("click", function buttonClicked(event) {
  if (event.target.matches(".btn-user-info")) {
    // console.log(event.target.dataset.id)
    //使用者資料視窗(More)
    showUserModal(event.target.dataset.id)
  } else if (event.target.matches('.btn-add-favorite')) {
    //收藏按鈕 觸發事件
    const btnFavorite = event.target
    if (btnFavorite.matches('.fav-no')) {
      btnFavorite.classList.remove('fav-no')
      btnFavorite.classList.add('fav-yes')
      addFavorite(Number(event.target.dataset.id))
    } else if (btnFavorite.matches('.fav-yes')) {
      btnFavorite.classList.remove('fav-yes')
      btnFavorite.classList.add('fav-no')
      delFavorite(Number(event.target.dataset.id))
    }
  }
})

//搜尋列事件 監聽
searchForm.addEventListener("submit", function searchSubmitted(event) {
  //防止事件的預設動作-重載頁面
  event.preventDefault()
  console.log('click!')
  //取得搜尋列文字
  const keyword = searchInput.value.trim().toLowerCase()
  //篩選並儲存符合條件的項目
  filteredUser = userList.filter((user) =>
    user.name.toLowerCase().includes(keyword) || user.surname.toLowerCase().includes(keyword)
  )
  //錯誤處理：無符合條件的結果
  if (filteredUser.length === 0) {
    return alert(`沒有符合搜尋條件的名稱 ${keyword}`)
  }
  //重製分頁器
  renderPaginator(filteredUser.length)
  //預設顯示第 1 頁的搜尋結果
  renderUserList(getUsersByPage(1))
})

paginator.addEventListener('click', function onPaginatorClicked(event) {
  //如果被點擊的不是 a 標籤，結束
  if (event.target.tagName !== 'A') return

  //透過 dataset 取得被點擊的頁數
  const page = Number(event.target.dataset.page)
  //更新畫面
  renderUserList(getUsersByPage(page))
})

//渲染使用者列表
function renderUserList(data) {
  let rawHTML = ""
  data.forEach((item) => {
    //判斷id是否有存在localStorage裡 是則愛心icon的class放fav-yes 否則放fav-no
    let userID = item.id
    const userIndex = favoriteList.findIndex((user) => user.id === userID)
    if (userIndex === -1) { //fav-no
      rawHTML += `  <div class="card m-2" style="width: 15rem;">
    <img class="card-img-top " src="${item.avatar}" />
    <div class="card-body">
      <h5 class="card-title">${item.name} ${item.surname}</h5>
    </div>
    <div class="card-footer d-flex justify-content-between">
      <button class="btn btn-primary btn-user-info" data-bs-toggle="modal" data-bs-target="#user-modal" data-id="${item.id}">More</button>
      <i class="bi bi-heart-fill btn-add-favorite fav-no" data-id="${item.id}"></i>
      </div>
  </div>`
    } else { //fav-yes
      rawHTML += `  <div class="card m-2" style="width: 15rem;">
    <img class="card-img-top " src="${item.avatar}" />
    <div class="card-body">
      <h5 class="card-title">${item.name} ${item.surname}</h5>
    </div>
    <div class="card-footer d-flex justify-content-between">
      <button class="btn btn-primary btn-user-info" data-bs-toggle="modal" data-bs-target="#user-modal" data-id="${item.id}">More</button>
      <i class="bi bi-heart-fill btn-add-favorite fav-yes" data-id="${item.id}"></i>
      </div>
  </div>`
    }
  })
  userCardContainer.innerHTML = rawHTML
}

//使用者資料視窗
function showUserModal(id) {
  if (!id) {
    return
  }
  const modalTitle = document.querySelector(".modal-title")
  const modalAvatar = document.querySelector(".modal-user-avatar")
  const modalInfo = document.querySelector(".modal-user-info")

  modalTitle.innerText = ``
  modalAvatar.innerHTML = ``
  modalInfo.innerHTML = ``

  axios.get(INDEX_URL + id).then((response) => {
    const data = response.data
    // console.log(response.data)
    modalTitle.innerText = `${data.name} ${data.surname}`
    modalAvatar.innerHTML = `<img src="${data.avatar}">`
    modalInfo.innerHTML = `
    <p>email: ${data.email}</p>
    <p>gender: ${data.gender}</p>
    <p>age: ${data.age}</p>
    <p>region: ${data.region}</p>
    <p>birthday: ${data.birthday}</p>
    `
  })
    .catch((err) => console.log(err))
}

//將資料分頁
function getUsersByPage(page) {
  //判斷搜尋清單是否存在 是則把資料放入data 否則改放電影列表的資料在data
  const data = filteredUser.length ? filteredUser : userList
  //計算起始 index
  const startIndex = (page - 1) * USER_PER_PAGE
  //回傳切割後的新陣列
  return data.slice(startIndex, startIndex + USER_PER_PAGE)
}

//依資料數量產生頁數
function renderPaginator(amount) {
  //計算總頁數
  const numberOfPages = Math.ceil(amount / USER_PER_PAGE)
  //製作 template
  let rawHTML = ''

  for (let page = 1; page <= numberOfPages; page++) {
    rawHTML += `<li class="page-item"><a class="page-link" href="#" data-page="${page}">${page}</a></li>`
  }
  //放回 HTML
  paginator.innerHTML = rawHTML
}

//新增到最愛清單
function addFavorite(id) {
  const user = userList.find((user) => user.id === id)
  if (favoriteList.some((user) => user.id === id)) {
    return alert('此使用者已經在收藏清單中！')
  }
  favoriteList.push(user)
  localStorage.setItem('favoriteUser', JSON.stringify(favoriteList))
}

//從最愛清單移除
function delFavorite(id) {
  //如果清單是空的 就離開該函式
  if (!favoriteList || !favoriteList.length) return
  //用id在清單找要刪除的使用者index 找到就刪除 沒有找到就離開該函式
  const userIndex = favoriteList.findIndex((user) => user.id === id)
  if (userIndex === -1) {
    return
  } else {
    favoriteList.splice(userIndex, 1)
    localStorage.setItem('favoriteUser', JSON.stringify(favoriteList))
  }

}