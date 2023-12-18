for (i=1; i<=5; i++){
  let ReelsWrap = document.querySelector(".reels_wrap")
  let Reels = document.createElement("div");
  Reels.className = "reels";
  Reels.innerHTML = `
  <div class="reels_img">
  <ul>
   <li>
    <img src="img/explore_img${i}.jpg" alt="x">
   </li>
  </ul>
  <div class="reels_txt">
   <ul class="reels_id">
    <li><img src="img/zzangah.PNG" alt="x"></li>
    <li>Instar_id${i}</li>
    <li><p>팔로우</p></li>
   </ul>
   <ul class="reels_contents"></ul>
   <ul class="reels_audio"></ul>
  </div>
 </div>
 <div class="reels_comment">
  <ul>
   <li>
   <img class="like" src="img/like.png" alt="x">
   <img class="hate" src="img/hate.png" alt="x">
   <p class="like_cnt">0</p>
   </li>
   <li><img src="img/comment.png" alt="x"><p>0</p></li>
   <li><img src="img/dm.png" alt="x"></li>
   <li>
   <img class="scrap" src="img/scrap.png" alt="x">
   <img class="save" src="img/save.png" alt="x">
   </li>
   <li><p class="add_txt">···</p></li>
   <li><img src="img/zzangah.PNG" alt="x"></li>
  </ul>
 </div>
  `
  ReelsWrap.appendChild(Reels);
  ReelsHandler(Reels);
}


function ReelsHandler(Reels){
  let Like = Reels.querySelector(".like");
  let Hate = Reels.querySelector(".hate");
  let Scrap = Reels.querySelector(".scrap");
  let Save = Reels.querySelector(".save");
  let LikeNum = Reels.querySelector(".like_cnt");

  function LikeClick(){
    Like.style.display = "none";
    Hate.style.display = "inline";
    let LikeCnt = parseInt(LikeNum.textContent);
    LikeCnt++;
    LikeNum.textContent = LikeCnt;
    // LikeNum은 p태그의 class이름 LikeNum.textContent는 p태그 안에 있는 문자 = "0"
    // LikeCnt = parseInt("0") => 숫자 0
    // LikeCnt를 1 증가시킨다
    // LikeNum의 textContent에 1을 다시 담아줌
  }

  Like.addEventListener("click",LikeClick);

  function HateClick(){
    Like.style.display = "inline";
    Hate.style.display = "none";
    let LikeCnt = parseInt(LikeNum.textContent);
    LikeCnt--;
    LikeNum.textContent = LikeCnt;
  }

  Hate.addEventListener("click",HateClick);


  function ScrapClick(){
    Scrap.style.display = "none";
    Save.style.display = "inline";
    Save.style.width = "21px";
    Save.style.marginRight = "2px";
  }

  Scrap.addEventListener("click",ScrapClick);

  function SaveClick(){
    Scrap.style.display = "inline";
    Save.style.display = "none";
  }

  Save.addEventListener("click",SaveClick);
}
