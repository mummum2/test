// for문으로 게시글 반복하기

for(i=1; i<10; i++){
  let PostList = document.querySelector(".post_list");
  let Post = document.createElement("div");
  Post.className = "post_list_wrap";
  Post.innerHTML = `
  <img src="img/explore_img${i}.jpg" alt="x">
  <ul class="hover">
    <li><img src="img/explore_commet.png" alt="x"><span>0</span></li>
    <li class="like"><img src="img/explore_heart.png" alt="x"><span class="like_cnt">0</span></li>
  </ul>
  `;
  PostList.appendChild(Post);
  PostHandler(Post);
}

// 포스트 안에 있는 하트 클릭시 숫자 카운트
function PostHandler (Post){
  let PostLike = Post.querySelector(".like")
  let PostNum = Post.querySelector(".like_cnt");
  
  function PostNumClick(){
    let PostCnt = parseInt(PostNum.textContent);
    PostCnt++;
    PostNum.textContent = PostCnt;
  }
  
  PostLike.addEventListener("click",PostNumClick) 
}





for(i=1; i<10; i++){
  let ReelsList = document.querySelector(".reels_list");
  let Reels = document.createElement("div")
  Reels.className = "reels_list_wrap"
  Reels.innerHTML = `
  <img src="img/explore_img${i}.jpg" alt="x">
  <ul class="hover">
    <li><img src="img/explore_commet.png" alt="x"><span>0</span></li>
    <li><img src="img/explore_heart.png" alt="x"><span>0</span></li>
  </ul>
  `;
  ReelsList.appendChild(Reels)
}

for(i=1; i<10; i++){
  let TagList = document.querySelector(".tag_list");
  let Tag = document.createElement("div");
  Tag.className="tag_list_wrap";
  Tag.innerHTML = `
  <img src="img/explore_img${i}.jpg" alt="x">
  <ul class="hover">
    <li><img src="img/explore_commet.png" alt="x"><span>0</span></li>
    <li><img src="img/explore_heart.png" alt="x"><span>0</span></li>
  </ul>
  `;
  TagList.appendChild(Tag);
}



// p_click을 클릭했을 때 t_click, r_click의 border-top 값은 사라지고, p_click의 border-top 값이 나와야한다. p_click을 클릭했을때 post_list가 활성화되고 reels_list 와 tag_list는 사라져야한다.

let PClick = document.querySelector(".p_click")
let RClick = document.querySelector(".r_click")
let TClick = document.querySelector(".t_click")
let PList = document.querySelector(".post_list")
let RList = document.querySelector(".reels_list")
let TList = document.querySelector(".tag_list")

function PostClick (){
  // border-top
  PClick.style.borderTop = "3px solid #aaa";
  RClick.style.borderTop = "none";
  TClick.style.borderTop = "none";

  // post list 활성화
  PList.style.display = "flex";
  RList.style.display = "none";
  TList.style.display = "none";
}

function ReelsClick (){
  // border-top
  PClick.style.borderTop = "none";
  RClick.style.borderTop = "3px solid #aaa";
  TClick.style.borderTop = "none";

  // post list 활성화
  PList.style.display = "none";
  RList.style.display = "flex";
  TList.style.display = "none";
}

function TagClick (){
  // border-top
  PClick.style.borderTop = "none";
  RClick.style.borderTop = "none";
  TClick.style.borderTop = "3px solid #aaa";
  
  // post list 활성화
  PList.style.display = "none";
  RList.style.display = "none";
  TList.style.display = "flex";
}

PClick.addEventListener("click",PostClick);
RClick.addEventListener("click",ReelsClick);
TClick.addEventListener("click",TagClick);

