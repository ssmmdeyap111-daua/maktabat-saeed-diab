function moveBooks(direction) {
  const container = document.getElementById("booksContainer");

  if (!container) {
    alert("❌ لم يتم العثور على booksContainer");
    return;
  }

  container.scrollBy({
    left: direction * 300,
    behavior: "smooth"
  });
}
const container = document.getElementById("booksContainer");
const btnRight = document.querySelector(".arrow.right");
const btnLeft  = document.querySelector(".arrow.left");

btnRight.addEventListener("click", () => {
  container.scrollBy({
    left: 300,
    behavior: "smooth"
  });
});

btnLeft.addEventListener("click", () => {
  container.scrollBy({
    left: -300,
    behavior: "smooth"
  });
});
