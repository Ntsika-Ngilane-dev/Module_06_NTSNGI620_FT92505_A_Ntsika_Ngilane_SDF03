// Hide loader once content is fully loaded
window.addEventListener("load", () => {
  document.getElementById("loader-wrapper").style.display = "none";

  // Add random likes/comments
  const items = document.querySelectorAll(".gallery-item");

  items.forEach(item => {
    const likesEl = item.querySelector(".likes");
    const commentsEl = item.querySelector(".comments");

    const likes = Math.floor(Math.random() * 901) + 100;    // 100–1000
    const comments = Math.floor(Math.random() * 91) + 10;   // 10–100

    likesEl.innerHTML = `<i class="fa fa-heart"></i> ${likes}`;
    commentsEl.innerHTML = `<i class="fa fa-comment"></i> ${comments}`;
  });
});
