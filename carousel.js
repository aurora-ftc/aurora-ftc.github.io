// CAROUSEL SCROLL
  const tracks = document.querySelectorAll(".carousel-track");
  tracks.forEach(track => {
    const left = track.parentElement.querySelector(".carousel-arrow.left");
    const right = track.parentElement.querySelector(".carousel-arrow.right");
  
    left.addEventListener("click", () => {
      track.scrollBy({ left: -350, behavior:"smooth" });
    });
  
    right.addEventListener("click", () => {
      track.scrollBy({ left: 350, behavior:"smooth" });
    });
  });
  
  // MODAL SYSTEM
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImage");
  const closeBtn = document.getElementById("modalClose");
  const prevBtn = document.getElementById("modalPrev");
  const nextBtn = document.getElementById("modalNext");
  
  const imgs = [...document.querySelectorAll(".modal-img")];
  let index = 0;
  
  imgs.forEach((img, i) => {
    img.addEventListener("click", () => {
      index = i;
      modalImg.src = img.dataset.full;
      modal.classList.add("open");
      document.body.style.overflow = "hidden";
    });
  });
  
  function showImage(i) {
    index = (i + imgs.length) % imgs.length;
    modalImg.src = imgs[index].dataset.full;
  }
  
  prevBtn.addEventListener("click", () => showImage(index - 1));
  nextBtn.addEventListener("click", () => showImage(index + 1));
  
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  });
  
  modal.addEventListener("click", e => {
    if (e.target === modal) {
      modal.classList.remove("open");
      document.body.style.overflow = "";
    }
  });
