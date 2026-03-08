const seeMoreBtn = document.querySelectorAll(".see-more-btn");
const seeMoreSection = document.querySelector(".see-more-section");
seeMoreBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    seeMoreSection.style.display = "flex";
  });
});
