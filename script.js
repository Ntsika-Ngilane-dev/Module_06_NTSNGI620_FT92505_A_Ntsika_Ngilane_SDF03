window.addEventListener("load", () => {
  document.getElementById("loader-wrapper").style.display = "none";

  const items = document.querySelectorAll(".gallery-item");
  items.forEach(item => {
    const likes = Math.floor(Math.random() * 900) + 100;
    const comments = Math.floor(Math.random() * 90) + 10;
    item.querySelector(".likes").innerHTML = `<i class="fa fa-heart"></i> ${likes}`;
    item.querySelector(".comments").innerHTML = `<i class="fa fa-comment"></i> ${comments}`;
  });
});
