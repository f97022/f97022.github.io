const BASE_URL = "https://user-list.alphacamp.io"
const INDEX_URL = BASE_URL + "/api/v1/users/"
//使用者列表
const userList = JSON.parse(localStorage.getItem('favoriteUser'))
const userCardContainer = document.querySelector("#user-container")


//按鈕事件 監聽
userCardContainer.addEventListener("click", function buttonClicked(event) {
  if (event.target.matches(".btn-user-info")) {
    // console.log(event.target.dataset.id)
    //使用者資料視窗(More)
    showUserModal(event.target.dataset.id)
  } else if (event.target.matches('.btn-add-favorite')) {
    //收藏按鈕 觸發事件
    const btnFavorite = event.target
    if (btnFavorite.matches('.fav-yes')) {
      btnFavorite.classList.remove('fav-yes')
      btnFavorite.classList.add('fav-no')
      delFavorite(Number(event.target.dataset.id))
    }
  }
})

renderUserList(userList)

//渲染使用者列表
function renderUserList(data) {
  let rawHTML = ""
  data.forEach((item) => {
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

function delFavorite(id) {
  //如果清單是空的 就離開該函式
  if (!userList || !userList.length) return
  //用id在清單找要刪除的使用者index 沒有找到就離開該函式
  const userIndex = userList.findIndex((user) => user.id === id)
  if (userIndex === -1) return

  //從清單中刪除該使用者
  userList.splice(userIndex, 1)

  //存回 localStorage
  localStorage.setItem('favoriteUser', JSON.stringify(userList))

  //更新頁面
  renderUserList(userList)
}