const tab = document.querySelector('#tab')
const content = document.querySelector('#content')

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
              資訊科技與管理系，興趣是學習程式語言、追蹤電腦硬體設備的各種資訊、。<br />
              目前正在上ALPHA Camp的全端網頁開發課程，目前進度在後端開發實作，網頁開發入門在2月初修課完成、前端開發實作在5月中修課完成。
            </p>
          </div>
        </section>
        <section class="skill-section">
          <h2>專長與技能</h2>
          <div class="skills">
            <div class="skill">
              <h3 class="skill-name">程式語言</h3>
              <ul class="skill-description">
                <li>HTML <i class="fa-brands fa-html5 fa-lg"></i></i> / CSS <i class="fa-brands fa-css3-alt fa-lg"></i> <p>能依照設計圖做出靜態網頁，也懂得使用Bootstrap來美化網頁。</p></li>
                <li>JavaScript <i class="fa-brands fa-js fa-lg"></i> <p>可使用JS做出動態網頁、串接API資料處理。</p></li>
                <li>PHP <i class="fa-brands fa-php fa-lg"></i> <p>使用純PHP做到使用網頁呈現對MySQL資料庫的CRUD。</p></li>
                <li>Python <i class="fa-brands fa-python fa-lg"></i><p>熟悉 Python的基礎語法，知道如何安裝套件、網路爬蟲網頁。</p></li>
                <li>Java <i class="fa-brands fa-java fa-lg"></i> <p>熟悉 Java的基礎語法，知道如何使用Spring Boot框架，但尚未熟練寫出 Restful API、JPA等應用。</p></li>
              </ul>
            </div>
            <div class="skill">
              <h3 class="skill-name">資料庫</h3>
              <ul class="skill-description">
                <li>MySQL <p>熟悉基本的SQL語法(CRUD、條件查詢等)。</p></li>
              </ul>
            </div>
            <div class="skill">
              <h3 class="skill-name">其他</h3>
              <ul class="skill-description">
                <li>Word , Excel , PowerPoint</li>
                <li>Photoshop , Illustrator</li>
                <li>Dreamweaver</li>
                <p>熟悉 Office和Adobe系列影像處理軟體，也有相關證照，能做基本的文書、影像處理。</p>
              </ul>
            </div>
          </div>
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
          <hr>
          <h3 class="experience-name">工讀生 <span><i class="fa-solid fa-building"></i> 花蓮慈濟醫院 - 長期照護部</span></h3><br>
          <p>在大四下的5週時間，有幸在花蓮慈濟醫院-長照部擔任工讀生，學習Java和Spring Boot，學到使用API呼叫JPA從MySQL取資料，因畢業相關事項忙碌及未能達到考核要求而離職。</p>
          <span><i class="fa-solid fa-calendar-days"></i> 2024/04/15 - 2024/05/21</span>
        </section>`

  content.innerHTML = htmltext
}

function displayProject() {
  let htmltext = `<section class="project">
          <h2>專案</h2>
          <h3 class="project-name">
            遊戲化創新教學管理系統 - 2023太平洋盃科技教育競賽 軟體創客組
            <span class="awards">佳作</span>
          </h3>
          <br />
          <p class="project-introduce">
            在製作專題時，擔任組長規劃系統功能和分配組員工作，也作為後端負責資料庫與網頁的連接及CRUD。
          </p>
          <img src="登入頁面.PNG" width="100%" />
          <p class="pic-text">系統登入頁面</p>
          <img src="老師頁面-管理題庫.png" width="100%" />
          <p class="pic-text">老師頁面 - 題庫管理系統</p>
        </section>
        <section class="practice-works">
          <h2>ALPHA Camp 練習作品</h2>
          <h3 class="work-name">【C2-M4 指標作業】你的社群名單：手刻功能</h3>
          <p class="work-introduce">學習到 操作DOM元素(更改顯示內容、增加移除Css樣式、建立監聽器來處理事件) 和 Api串接與資料處理 及 對瀏覽器的local storage存取、取出、移除。</p>
          <iframe
            height="600"
            style="width: 100%"
            scrolling="yes"
            title="my-community-list"
            src="my-community-list\\index.html"
          ></iframe>
          <hr />
          <h3 class="work-name">【C2-M5】翻牌遊戲:微型專案設計</h3>
          <p class="work-introduce">理解 程式碼模組化的概念 和 MVC架構與概念。</p>
          <iframe
            height="600"
            style="width: 100%"
            scrolling="no"
            title="play-card"
            src="https://codepen.io/f97022/embed/XWQaKdQ?default-tab=result"
            frameborder="no"
            loading="lazy"
            allowtransparency="true"
            allowfullscreen="true"
          >
            See the Pen
            <a href="https://codepen.io/f97022/pen/XWQaKdQ"> play-card</a> by
            林孟穎 (<a href="https://codepen.io/f97022">@f97022</a>) on
            <a href="https://codepen.io">CodePen</a>.</iframe
          >
        </section>`

  content.innerHTML = htmltext
}

//預設顯示 自我介紹
displaySelfInfo()
