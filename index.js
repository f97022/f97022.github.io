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

function displaySelfInfo() {
  let htmltext = `<section class="personal-info">
          <img src="10943040.jpg" class="avatar" />
          <div class="introduction">
            <h1 class="name">林孟穎 Lin,Meng-Ying</h1>
            <p class="social-media">
              <i class="fa-solid fa-envelope fa-lg"></i> <b>f97022@gmail.com</b>
              <i class="fa-solid fa-phone"></i> <b>0966628263</b>
              <i class="fa-brands fa-line fa-lg"></i> <b>f1693108</b>
            </p>
            <p class="description">
              我是林孟穎，113年應屆畢業生，目前就讀慈濟科技大學
              資訊科技與管理系，興趣是學習程式語言、追蹤電腦硬體設備的各種資訊、組鋼彈模型、玩遊戲、看動漫。<br />
              目前正在上ALPHA
              Camp的全端網頁開發課程，目前進度在前端開發實作，網頁開發入門在2月初修課完成。
            </p>
          </div>
        </section>
        <section class="skill-section">
          <h2>專長與技能</h2>
          <div class="skills">
            <div class="skill">
              <h3 class="skill-name">程式語言</h3>
              <ul class="skill-description">
                <li>HTML <i class="fa-brands fa-html5 fa-lg"></i></i> / CSS <i class="fa-brands fa-css3-alt fa-lg"></i></li>
                <li>JavaScript <i class="fa-brands fa-js fa-lg"></i></li>
                <li>PHP <i class="fa-brands fa-php fa-lg"></i></li>
                <li>Python <i class="fa-brands fa-python fa-lg"></i></li>
                <li>C# </li>
              </ul>
            </div>
            <div class="skill">
              <h3 class="skill-name">資料庫</h3>
              <ul class="skill-description">
                <li>MySQL</li>
              </ul>
            </div>
            <div class="skill">
              <h3 class="skill-name">其他</h3>
              <ul class="skill-description">
                <li>Word , Excel , PowerPoint</li>
                <li>Photoshop , Illustrator</li>
                <li>Dreamweaver</li>
              </ul>
            </div>
          </div>
          <p class="skill-description">
            我能依照設計圖使用HTML/CSS做出靜態網頁，使用PHP與MySQL做到用網頁對資料庫CRUD，熟悉Python和C#的基礎語法，能看懂程式碼，也能理解大致運作過程。<br />
            熟悉Office和Adobe系列軟體，能做基本的文書、影像處理。
          </p>
        </section>
        <section class="certificate-section">
          <h2>證照</h2>
          <div class="certificates">
            <div class="certificate">
              <h3 class="certificate-name">勞動部</h3>
              <ul class="certificate-description">
                <li>電腦軟體應用 乙級<br>(證號：118-163655)</li>
                <li>電腦軟體應用 丙級<br>(證號：118-840056)</li>
                <li>網頁設計 丙級<br>(證號：173-224104)</li>
              </ul>
            </div>
            <div class="certificate">
              <h3 class="certificate-name">TQC企業人才技能認證</h3>
              <ul class="certificate-description">
                <li>電子商務概論 專業級</li>
                <li>Word 2016 進階級</li>
                <li>Excel 2016 進階級</li>
                <li>PowerPoint  2016 進階級</li>
              </ul>
            </div>
            <div class="certificate">
              <h3 class="certificate-name">Adobe＆Certiport</h3>
              <ul class="certificate-description">
                <li>Visual Design using Adobe Photoshop CC 2015</li>
                <li>Graphic Design & Illustration using Adobe Illustrator CC 2015</li>
                <li>Web Authoring using Adobe Dreamweaver CC 2015</li>
              </ul>
            </div>
          </div>
        </section>
        <section class="experience">
          <h2>經歷</h2>
          <h3 class="experience-name">校務工讀生 <span><i class="fa-solid fa-building"></i> 慈濟科技大學 - 電子計算機中心 - 系統管理組</span></h3><br>
          <p>由於對電腦硬體的興趣，我運用課餘時間在學校電算中心系統管理組工讀，幫忙處理教職員生的電腦問題，也同時學習電腦硬體的檢查維修方法及周邊設備的安裝設定，更認識許多網路和伺服器相關的設備。</p>
          <p>能對BIOS進行設定、安裝作業系統及硬體的驅動程式、拆裝硬體設備(如記憶體、硬碟、顯示卡等)、周邊設備的安裝並調整設定 (如多個螢幕的顯示設定、更換鍵盤滑鼠、安裝印表機等)。</p>
          <span><i class="fa-solid fa-calendar-days"></i> 2020/02 - 2023/12</span>
          <hr>
          <h3 class="experience-name">實習生 <span><i class="fa-solid fa-building"></i> 花蓮慈濟醫院 - 人工智慧醫療創新發展中心</span></h3><br>
          <p>在實習過程中學到SQL更多應用方式、用PowerBI連結資料庫把資料視覺化、git基本操作和應用概念等，自己的表達能力和協作能力也提升不少，學習到如何應對職場問題更是寶貴的經驗。</p>
          <p>透過這次實習讓我確定方向，要以全端工程師為目標繼續努力學習相關技能。</p>
          <span><i class="fa-solid fa-calendar-days"></i> 2023/06/26 - 2023/08/04</span>
        </section>`

  content.innerHTML = htmltext
}

function displayProject() {
  let htmltext = ``

  content.innerHTML = htmltext
}

//預設顯示 自我介紹
displaySelfInfo()