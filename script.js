window.addEventListener("load", function () {
  document.getElementById("loader-wrapper").style.display = "none";

  // Assign random likes and comments
  const galleryItems = document.querySelectorAll(".gallery-item");
  galleryItems.forEach(item => {
    const likesSpan = item.querySelector(".likes");
    const commentsSpan = item.querySelector(".comments");

    const likes = Math.floor(Math.random() * 901) + 100; // 100 - 1000
    const comments = Math.floor(Math.random() * 91) + 10; // 10 - 100

    likesSpan.innerHTML = `<i class="fa fa-heart"></i> ${likes}`;
    commentsSpan.innerHTML = `<i class="fa fa-comment"></i> ${comments}`;
  });
});

